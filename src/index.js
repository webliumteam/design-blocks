import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  numbers: {
    items: [
      {
        label: {
          ...Component.defaultContent.numbers[0].label,
        },
        value: {
          ...Component.defaultContent.numbers[0].value,
          type: 'heroTitle',
          content: '75<span style="font-size: 22px;font-weight: bold;">%</span>',
        },
      },
      {
        label: {
          ...Component.defaultContent.numbers[1].label,
        },
        value: {
          ...Component.defaultContent.numbers[1].value,
          type: 'heroTitle',
          content: '30<span style="font-size: 22px;font-weight: bold;">%</span>',
        },
      },
      {
        label: {
          ...Component.defaultContent.numbers[2].label,
        },
        value: {
          ...Component.defaultContent.numbers[2].value,
          type: 'heroTitle',
          content: '85<span style="font-size: 22px;font-weight: bold;">%</span>',
        },
      },
    ],
  },
  title: {
    ...Component.defaultContent.title,
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {
    ...Component.modifierScheme.button,
    defaultValue: false,
    type: 'hidden',
  },
  'number-title': {
    ...Component.modifierScheme['number-title'],
    defaultValue: false,
    type: 'hidden',
  },
}

export default ExtendedWireframe
