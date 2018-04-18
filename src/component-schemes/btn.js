const { object, string } = require("../utils");

const scheme = object({
  type: string(),
  actionConfig: object({
    action: string(),
    actions: object({
      link: object({
        type: string(),
        innerPage: string(),
        url: string()
      })
    })
  }),
  textValue: string(),
  size: string()
});

module.exports = scheme;
