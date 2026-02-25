// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unicorn from "eslint-plugin-unicorn";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  // Unicorn — curated best-practice rules
  {
    plugins: { unicorn },
    rules: {
      "unicorn/prefer-node-protocol": "error",
      "unicorn/no-array-for-each": "warn",
      "unicorn/no-null": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": [
        "error",
        { cases: { kebabCase: true, pascalCase: true } },
      ],
      "unicorn/prefer-string-replace-all": "warn",
      "unicorn/prefer-at": "warn",
      "unicorn/no-useless-undefined": "warn",
      "unicorn/prefer-ternary": "warn",
      "unicorn/no-lonely-if": "warn",
    },
  },
  // TypeScript strict rules
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  },
  // React best practices
  {
    rules: {
      "react/self-closing-comp": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-no-useless-fragment": "warn",
      "react/no-array-index-key": "warn",
    },
  },
  // General code quality
  {
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "multi-line"],
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "object-shorthand": "error",
      "prefer-template": "warn",
    },
  },
  ...storybook.configs["flat/recommended"]
]);

export default eslintConfig;
