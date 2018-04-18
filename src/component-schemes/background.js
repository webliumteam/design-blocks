const { object, string, number } = require("../utils");

const scheme = {
  anyOf: [
    object({
      type: string({ pattern: "^color$" }),
      color: string()
    }),
    object({
      type: string({ pattern: "^gradient$" }),
      gradient: object({
        angle: number(),
        firstColor: string(),
        secondColor: string()
      })
    }),
    object({
      type: string({ pattern: "^image$" }),
      position: object({
        type: string(),
        cover: string()
      }),
      resourceRef: string(),
      overlay: object({
        type: string(),
        color: string(),
        opacity: number()
      })
    })
  ]
};

module.exports = scheme;
