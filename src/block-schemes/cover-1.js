const { object, string } = require("../utils");
const {
  backgroundScheme,
  btnScheme,
  textScheme
} = require("../component-schemes");

const scheme = object({
  background: backgroundScheme,
  title: textScheme,
  subtitle: textScheme,
  "cta-1": btnScheme,
  "cta-2": btnScheme,
  topCaption: string()
});

module.exports = scheme;
