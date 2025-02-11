import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-n";
import eslintPlugin from "eslint-plugin-eslint-plugin";
import customPlugin from "eslint-plugin-custom";
import tsParser from "@typescript-eslint/parser";

export default [
  pluginJs.configs.recommended,
  ...pluginNode.configs["flat/mixed-esm-and-cjs"],
  eslintPlugin.configs["flat/recommended"],
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { parser: tsParser },
    },
    plugins: {
      custom: customPlugin,
    },
    rules: {
      "custom/use-inject-function": "error",
    },
  },
];
