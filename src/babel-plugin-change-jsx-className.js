const types = require("@babel/types");

let config = {};

module.exports = function (
  _,
  options = {
    prefix: "",
  }
) {
  config = options;
  return {
    visitor: {
      CallExpression,
    },
  };
};

function CallExpression(path) {
  const callee = path.node.callee;
  if (callee.type === "MemberExpression") {
    const callFn = callee.object.name + "." + callee.property.name;
    if (callFn === "React.createElement") {
      path.skip();
      path.get("arguments.1").traverse({
        ObjectProperty,
      });
    }
  }
}

function ObjectProperty(path) {
  const key = path.node.key;
  const val = path.node.value;
  if (key.name === "className") {
    path.node.value = types.binaryExpression(
      "+",
      types.StringLiteral(config.prefix),
      val
    );
  }
}
