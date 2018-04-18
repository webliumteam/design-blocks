const Ajv = require("ajv");
const scheme = require("./cover-1");

const W_ZAPDOS_COVER = {
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
};

const D_ZAPDOS_COVER = {
  ...W_ZAPDOS_COVER,
  background: {
    type: "image",
    position: {
      type: "cover"
    },
    resourceRef: "cover_bg.jpg"
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
    textValue: "Learn more",
    type: "primary",
    size: "lg"
  }
};

describe("cover-1 scheme test", () => {
  it("validate W_ZAPDOS_COVER", () => {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(scheme);
    const valid = validate(W_ZAPDOS_COVER);
    if (!valid) throw new Error(ajv.errorsText(validate.errors));
  });

  it("validate D_ZAPDOS_COVER", () => {
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(scheme);
    const valid = validate(D_ZAPDOS_COVER);
    if (!valid) throw new Error(ajv.errorsText(validate.errors));
  });
});
