module.exports = api => {
  return {
    presets: [
      ["@babel/preset-env", {
        useBuiltIns: "entry",
        targets: api.caller(caller => caller && caller.target === "node")
          ? { node: "current" }
          : { chrome: "67", firefox: "60" }
      }],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ]
  }
};