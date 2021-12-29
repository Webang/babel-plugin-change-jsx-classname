### 1、介绍

修改 `React.createElement(Component, props, children)` props 中 className 的值，用于给所用元素加上一个相同的 css class。

### 2、转换

```jsx
const hello = (
  <div className={b}>
    <div className={a + 1}>
      <div className={c + [1, 2]}>hello world</div>
    </div>
  </div>
);
```

=>

```js
const hello = /*#__PURE__*/ React.createElement(
  "div",
  {
    className: "f6" + b,
  },
  /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "f6" + (a + 1),
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "f6" + (c + [1, 2]),
      },
      "hello world"
    )
  )
);
```

### 3、配置

```json
{
  "plugins": [
    [
      "babel-plugin-change-jsx-className",
      {
        "prefix": "f6"
      }
    ]
  ]
}
```

### 4、注意事项

因为这个插件是对 React.createElement 的调用进行遍历修改其 `props`，所以 plugin 的配置顺序要要保证在 `babel-plugin-jsx` 的后面，通常放在最后面即可。