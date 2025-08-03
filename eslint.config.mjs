// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"),

  {
    files: ["**/*.ts", "**/*.tsx"],
    files: ["**/*.js", "**/*.jsx"],

    languageOptions: {
      parser: "@typescript-eslint/parser", // ✅ Correct parser
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // Optional: only if you're using `strict` mode
      },
    },
    plugins: {
      "@typescript-eslint": await import("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // ✅ Example recommended rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
