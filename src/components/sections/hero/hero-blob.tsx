'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { createNoise3D } from 'simplex-noise';
import * as THREE from 'three';

/* ——————————————————————————————————————————————
   Custom shader material — soft gradient glow
   —————————————————————————————————————————————— */

const vertexShader = `
  uniform float uTime;
  uniform float uNoiseFreq;
  uniform float uNoiseAmp;
  varying vec3 vNormal;
  varying vec3 vPosition;

  // Simplex-like noise via sin combinations
  float snoise(vec3 p) {
    return sin(p.x * 1.3 + uTime * 0.4) *
           sin(p.y * 1.1 + uTime * 0.3) *
           sin(p.z * 1.5 + uTime * 0.5) * 0.5 + 0.5;
  }

  void main() {
    vec3 pos = position;
    float noise = snoise(pos * uNoiseFreq + uTime * 0.15);
    pos += normal * noise * uNoiseAmp;
    vNormal = normalize(normalMatrix * normal);
    vPosition = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColorWarm;
  uniform vec3 uColorCool;
  uniform float uOpacity;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    // Gradient based on vertical position + normal direction
    float gradient = (vNormal.y + 1.0) * 0.5;
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);

    vec3 color = mix(uColorWarm, uColorCool, gradient);

    // Soften edges with fresnel — makes it feel atmospheric
    float alpha = uOpacity * (0.4 + fresnel * 0.6);

    gl_FragColor = vec4(color, alpha);
  }
`;

/* ——————————————————————————————————————————————
   AmbientBlob — soft, transparent, atmospheric
   —————————————————————————————————————————————— */

function AmbientBlob(): React.JSX.Element {
  const meshRef = useRef<THREE.Mesh>(null);
  const noise3D = useMemo(() => createNoise3D(), []);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });

  const originalPositions = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.1, 48);
    return new Float32Array(geo.attributes.position.array);
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uNoiseFreq: { value: 0.8 },
      uNoiseAmp: { value: 0.15 },
      uColorWarm: { value: new THREE.Color('#FF6B35') },
      uColorCool: { value: new THREE.Color('#3B82F6') },
      uOpacity: { value: 0.08 },
    }),
    [],
  );

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Slow mouse parallax
    const mc = mouseCurrent.current;
    const mt = mouseTarget.current;
    mc.x += (mt.x - mc.x) * 0.02;
    mc.y += (mt.y - mc.y) * 0.02;
    mesh.rotation.y = mc.x * 0.15;
    mesh.rotation.x = -mc.y * 0.15;

    // Slow vertex displacement
    const geo = mesh.geometry;
    const positions = geo.attributes.position;
    const time = performance.now() * 0.00015;
    const freq = 0.6;
    const amp = 0.12;

    for (let i = 0; i < positions.count; i++) {
      const ix = i * 3;
      const ox = originalPositions[ix];
      const oy = originalPositions[ix + 1];
      const oz = originalPositions[ix + 2];

      const length = Math.sqrt(ox * ox + oy * oy + oz * oz);
      const nx = ox / length;
      const ny = oy / length;
      const nz = oz / length;

      const displacement =
        noise3D(nx * freq + time, ny * freq + time, nz * freq + time) * amp;

      positions.setXYZ(
        i,
        ox + nx * displacement,
        oy + ny * displacement,
        oz + nz * displacement,
      );
    }
    positions.needsUpdate = true;
    geo.computeVertexNormals();

    uniforms.uTime.value = time * 10;
  });

  return (
    <mesh ref={meshRef} position={[1, 0, 0]}>
      <icosahedronGeometry args={[1.1, 48]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ——————————————————————————————————————————————
   HeroBlob (exported for dynamic import)
   —————————————————————————————————————————————— */

interface HeroBlobProps {
  className?: string;
}

export function HeroBlob({ className = '' }: HeroBlobProps): React.JSX.Element {
  const dpr = Math.min(window.devicePixelRatio, 2);

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <AmbientBlob />
      </Canvas>
    </div>
  );
}
