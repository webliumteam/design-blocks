const string = () => ({
  type: "string"
});

const object = properties => ({
  type: "object",
  additionalProperties: false,
  properties
});

module.exports = {
  string,
  object
};
