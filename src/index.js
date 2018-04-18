import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-events/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  items: [
    {
      ...Component.defaultContent.items[0],
      picture: [
        {
          resourceRef: 'pic1.jpg',
          alt: 'Picture about the company',
        },
      ],
    },
    {
      ...Component.defaultContent.items[1],
      picture: [
        {
          resourceRef: 'pic2.jpg',
          alt: 'Picture about the company',
        },
      ],
    },
    {
      ...Component.defaultContent.items[2],
      picture: [
        {
          resourceRef: 'pic3.jpg',
          alt: 'Picture about the company',
        },
      ],
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default ExtendedWireframe
