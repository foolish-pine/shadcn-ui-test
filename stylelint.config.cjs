module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-html",
  ],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind"] }],
    "custom-property-pattern": null,
    "function-name-case": null,
    "keyframes-name-pattern": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
  ignoreFiles: ["dist/**", "**/node_modules/**"],
};
