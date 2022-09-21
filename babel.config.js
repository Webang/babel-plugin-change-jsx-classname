module.exports = function (api) {
  api && api.cache(false);
  return {
    presets: [
      ["@babel/preset-react", { runtime: "classic" }],
    ],
    plugins: [
      // 注意 prefix 中的空格
      ["./src/babel-plugin-change-jsx-className", {
        prefix: 'f6 '
      }]
    ]
  };
};
