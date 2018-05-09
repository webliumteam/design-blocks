import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'numbers.jpg',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: 0.6,
    },
  },
  numbers: [
    {
      ...Component.defaultContent.numbers[0],
      title: {
        ...Component.defaultContent.numbers[0].title,
        content: 'INCREASE PROFITS BY',
      },
      label: {
        ...Component.defaultContent.numbers[0].label,
        content: 'FOR OUR CUSTOMERS',
      },
    },
    {
      ...Component.defaultContent.numbers[1],
      title: {
        ...Component.defaultContent.numbers[1].title,
        content: 'EXPAND MARKET REACH FOR',
      },
      label: {
        ...Component.defaultContent.numbers[1].label,
        content: 'OF OUR CLIENTS',
      },
    },
    {
      ...Component.defaultContent.numbers[2],
      title: {
        ...Component.defaultContent.numbers[2].title,
        content: 'IMPROVE CUSTOMER SATISFACTION FOR',
      },
      label: {
        ...Component.defaultContent.numbers[2].label,
        content: 'OF OUR USERS',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  border: {
    defaultValue: true,
    label: 'White border',
    type: 'checkbox',
    classNameOnActive: style['section--with-border'],
  },
}

export default ExtendedWireframe
