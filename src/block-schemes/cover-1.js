const { object, string } = require("../utils");
const {
  backgroundScheme,
  btnScheme,
  textScheme
} = require("../component-schemes");

const scheme = object({
  theme: string(),
  background: backgroundScheme,
  title: textScheme,
  subtitle: textScheme,
  "cta-1": btnScheme,
  "cta-2": btnScheme,
  topCaption: string(),
  picture: object({
    resourceRef: string()
  })
});

module.exports = scheme;
