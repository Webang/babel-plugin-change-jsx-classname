module.exports = function (api) {
  api && api.cache(false);
  return {
    presets: [
      ["@babel/preset-react", { runtime: "classic" }],
    ],
    plugins: [
      ["./src/babel-plugin-change-jsx-className", {
        prefix: 'f6 '
      }]
    ]
  };
};
