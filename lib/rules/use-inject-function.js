module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Use inject() instead of constructor-based dependency injection in Angular",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      ConstructorBasedDependencyInjection:
        "Constructor-based dependency injection is not allowed.",
    },
    schema: [],
  },
  create(context) {
    return {
      MethodDefinition(node) {
        if (
          node.kind === "constructor" &&
          node.value.params.some(
            (param) => param.type === "TSParameterProperty"
          )
        ) {
          context.report({
            node,
            messageId: "ConstructorBasedDependencyInjection",
          });
        }
      },
    };
  },
};
