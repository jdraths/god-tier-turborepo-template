import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import unusedImports from "eslint-plugin-unused-imports";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier, // Turns off all rules that are unnecessary or might conflict with Prettier
  ...tseslint.configs.strictTypeChecked,
  {
    ignores: [
      "**/*.hbs",
      "**/*.config.mjs",
      "eslint.config.js",
      "eslint.config.mjs",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.hbs"],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: [
      "dist/**",
      "**/*.config.mjs",
      "eslint.config.js",
      "eslint.config.mjs",
      "**/*.hbs",
    ],
    rules: {
      // "@typescript-eslint/no-floating-promises": "error", // already in tseslint.configs.strict
      "@typescript-eslint/no-explicit-any": "warn", // overriding tseslint.configs.strict
      "@typescript-eslint/no-unused-vars": "off", // see unusedImports
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      // "@typescript-eslint/prefer-reduce-type-parameter": "error", // already in tseslint.configs.strict
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/promise-function-async": "error",
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...importPlugin.flatConfigs.typescript,
    rules: {
      "import/named": "off", // per https://typescript-eslint.io/troubleshooting/typed-linting/performance#eslint-plugin-import
      "import/order": "error",
    },
  },
];
