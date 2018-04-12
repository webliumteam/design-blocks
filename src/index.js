import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  numbers: [
    {
      ...Component.defaultContent.numbers[0],
      picture: {
        ...Component.defaultContent.numbers[0].picture,
        resourceRef: 'pic1.jpg',
      },
    },
    {
      ...Component.defaultContent.numbers[1],
      picture: {
        ...Component.defaultContent.numbers[1].picture,
        resourceRef: 'pic2.jpg',
      },
    },
    {
      ...Component.defaultContent.numbers[2],
      picture: {
        ...Component.defaultContent.numbers[2].picture,
        resourceRef: 'pic3.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
