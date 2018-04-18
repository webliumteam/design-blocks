const number = options => ({
  type: "number",
  ...options
});

const string = options => ({
  type: "string",
  ...options
});

const bool = () => ({
  type: "boolean"
});

const object = (properties, options) => ({
  type: "object",
  additionalProperties: false,
  properties,
  ...options
});

module.exports = {
  number,
  string,
  bool,
  object
};
