const Ajv = require("ajv");
const scheme = require("./schemes/cover-1");

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(scheme);

const test = data => {
  const valid = validate(data);
  if (valid) console.log("Valid!");
  else console.log("Invalid: " + ajv.errorsText(validate.errors));
};

const entries = [
  {
    background: {
      type: "color",
      color: "#d8d8d8"
    },
    title: {
      content: "Quantum Company",
      type: "heroTitle"
    },
    subtitle: {
      content: "We can execute even the most unpredictable ideas! ",
      type: "subtitle"
    },
    "cta-1": {
      actionConfig: {
        action: "link",
        actions: {
          link: {
            type: "",
            innerPage: "",
            url: ""
          }
        }
      },
      textValue: "Request a quote",
      type: "primary",
      size: "lg"
    },
    "cta-2": {
      actionConfig: {
        action: "link",
        actions: {
          link: {
            type: "",
            innerPage: "",
            url: ""
          }
        }
      },
      textValue: "Learn more",
      type: "secondary",
      size: "lg"
    },
    topCaption: "welcome"
  }
];

entries.forEach(test);
