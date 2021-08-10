module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "current",
        chrome: "67",
        firefox: "60"
      }
    }],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
};