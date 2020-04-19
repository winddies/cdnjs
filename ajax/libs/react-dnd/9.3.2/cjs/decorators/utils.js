"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDecoratedComponent = getDecoratedComponent;
exports.isClassComponent = isClassComponent;
exports.isRefForwardingComponent = isRefForwardingComponent;
exports.isRefable = isRefable;
exports.checkDecoratorArguments = checkDecoratorArguments;

function getDecoratedComponent(instanceRef) {
  var currentRef = instanceRef.current;

  if (currentRef == null) {
    return null;
  } else if (currentRef.decoratedRef) {
    // go through the private field in decorateHandler to avoid the invariant hit
    return currentRef.decoratedRef.current;
  } else {
    return currentRef;
  }
}

function isClassComponent(Component) {
  return Component && Component.prototype && typeof Component.prototype.render === 'function';
}

function isRefForwardingComponent(C) {
  return C && C.$$typeof && C.$$typeof.toString() === 'Symbol(react.forward_ref)';
}

function isRefable(C) {
  return isClassComponent(C) || isRefForwardingComponent(C);
}

function checkDecoratorArguments(functionName, signature) {
  if (process.env.NODE_ENV !== 'production') {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      var arg = _args[_i];

      if (arg && arg.prototype && arg.prototype.render) {
        // eslint-disable-next-line no-console
        console.error('You seem to be applying the arguments in the wrong order. ' + "It should be ".concat(functionName, "(").concat(signature, ")(Component), not the other way around. ") + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
        return;
      }
    }
  }
}