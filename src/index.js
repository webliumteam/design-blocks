import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-process/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      ...Component.defaultContent.steps[0],
      title: {
        ...Component.defaultContent.steps[0].title,
        content: 'PICK A PLAN',
      },
    },
    {
      ...Component.defaultContent.steps[1],
      title: {
        ...Component.defaultContent.steps[1].title,
        content: 'MAKE A PAYMENT',
      },
    },
    {
      ...Component.defaultContent.steps[2],
      title: {
        ...Component.defaultContent.steps[2].title,
        content: 'ENJOY OUR PRODUCTS',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: '- OUR PROCESS -',
  },
  'cta-1': {
    ...Component.defaultContent['cta-1'],
    type: 'secondary',
  },
  'cta-2': {
    ...Component.defaultContent['cta-2'],
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
