const { object, string } = require("../utils");

const scheme = object({
  type: string(),
  content: string()
});

module.exports = scheme;
