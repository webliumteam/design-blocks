const { object, string, bool } = require("../utils");

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
  size: string(),
  iconEnabled: bool(),
  iconAlignment: string(),
  icon: object({
    svg: string()
  })
});

module.exports = scheme;
