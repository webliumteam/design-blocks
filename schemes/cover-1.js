const string = () => ({
  type: "string"
});

const object = properties => ({
  type: "object",
  additionalProperties: false,
  properties
});

const backgroundScheme = object({
  type: string(),
  color: string()
});

const textScheme = object({
  type: string(),
  content: string()
});

const btnScheme = object({
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

const schema = object({
  background: backgroundScheme,
  title: textScheme,
  subtitle: textScheme,
  "cta-1": btnScheme,
  "cta-2": btnScheme,
  topCaption: string()
});

module.exports = schema;
