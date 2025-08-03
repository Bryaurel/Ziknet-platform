import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["src/**/*.{js,mjs,cjs}", "tests/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, // allow jest globals in tests
      },
    },
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
]);
