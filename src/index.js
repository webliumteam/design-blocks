import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  items: [
    {
      image: {
        resourceRef: 'pic1.jpg',
        alt: 'Picture about the company',
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
      image: {
        resourceRef: 'pic2.jpg',
        alt: 'Picture about the company',
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
      image: {
        resourceRef: 'pic3.jpg',
        alt: 'Picture about the company',
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
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Why us description', type: 'checkbox'},
  'main-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
