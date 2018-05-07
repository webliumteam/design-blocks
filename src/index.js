import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers/src/options.json'
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
          content: 'for our customers',
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
          content: 'of our clients',
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
          content: 'of our users',
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
    content: 'Тактико-технічні характеристики',
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
