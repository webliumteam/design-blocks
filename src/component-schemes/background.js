const { object, string } = require("../utils");

const scheme = object({
  type: string(),
  color: string()
});

module.exports = scheme;
