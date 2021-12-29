module.exports = function () {
  return {
    visitor: {
      // JSXElement: ImportDeclaration,
      JSXIdentifier,
    },
  };
};

function JSXIdentifier(path, source) {
  // console.log(path.node)
  console.log(path.parent);
}

function ImportDeclaration(path, source) {
  const nodes = path.node.openingElement.attributes;
  nodes.forEach((node) => {
    if (node.name.name === "className") {
      console.log(node.value);
    }
  });
}
