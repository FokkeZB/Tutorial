var args = arguments[0] || {};

var model = args.model;

console.debug(
  JSON.stringify(
    model.toJSON(),
    null,
    '  '
  )
);