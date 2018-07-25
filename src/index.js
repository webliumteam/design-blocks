import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-why_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-why_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-shade-color',
        }],
      ],
    },
    items: [
      {
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'pic1.jpg',
        },
        heading: {
          type: 'heading',
          content: 'Open-minded',
        },
        text: {
          type: 'text',
          content: 'We always look for new ideas, explore various spheres, and apply a positive approach',
        },
      },
      {
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'pic2.jpg',
        },
        heading: {
          type: 'heading',
          content: 'Long-term cooperation',
        },
        text: {
          type: 'text',
          content: 'We believe that effective cooperation should last for ages',
        },
      },
      {
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'pic3.jpg',
        },
        heading: {
          type: 'heading',
          content: 'Turnkey solutions',
        },
        text: {
          type: 'text',
          content: 'Every good or service we provide is empowered with the top-notch features to deliver the best result to our customers',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Why us description', type: 'checkbox'},
  'main-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
