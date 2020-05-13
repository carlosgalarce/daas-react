module.exports = {
  extends: "eslint-config-react-app",
  rules: {
    "jsx-a11y/anchor-is-valid": "warn",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "semi": "error",
    "quotes": ["error", "single"],
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
};
