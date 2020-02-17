const common = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  plugins: ["react", "react-hooks"]
};

module.exports = {
  env: common.env,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react"
  ],
  globals: {},
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: common.plugins,
  rules: common.rules,
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: common.env,
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
      ],
      globals: {},
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json"
      },
      plugins: ["@typescript-eslint", ...common.plugins],
      settings: { react: { version: "detect" } }
    }
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error"
  }
};
