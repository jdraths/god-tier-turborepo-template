import { config } from "@repo/eslint-config/base";

/** @type {import("eslint").Linter.Config[]} */
const modifiedConfig = [
  ...config,
  { rules: { "@typescript-eslint/no-floating-promises": "off" } },
];
export default modifiedConfig;
