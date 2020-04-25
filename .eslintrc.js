module.exports = {
  extends: ["eslint:recommended", "react-app"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  globals: {
    React: "writable",
  },
  settings: {
    react: {
      linkComponents: [{ name: "Link", linkAttribute: "href" }],
    },
  },
};
