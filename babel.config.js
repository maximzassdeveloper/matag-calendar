module.exports = {
  presets: [
    "@babel/preset-env", // compiles your js according
    "@babel/preset-typescript", // allows  to use TypeScript
    ["@babel/preset-react", {
      "runtime": "automatic"
    }], // optional: react: this resolves react-files (jsx, tsx)
  ]
}