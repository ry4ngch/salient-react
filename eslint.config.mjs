import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  // Ignore legacy files and hidden files
  {
    ignores: [
      "**/legacy/**",
      "**/*.test.jsx",
      "**/._*.js",
      "src/utils/Salient/legacy/**",
    ],
  },

  // React hooks (flat-compatible)
  pluginReactHooks.configs.flat.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },

    rules: {
      // ESLint core
      "no-unused-vars": "warn",
      "no-console": "warn",

      // React
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // React hooks - warn instead of error for legacy code
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/static-components": "warn",

      // Prettier (warn instead of error for legacy code)
      "prettier/prettier": "warn",
    },

    settings: {
      react: { version: "19" },
    },
  },
];
