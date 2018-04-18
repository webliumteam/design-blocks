const number = options => ({
  type: "number",
  ...options
});

const string = options => ({
  type: "string",
  ...options
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
  object
};
