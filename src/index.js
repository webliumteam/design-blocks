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
          ...Component.defaultContent.items[0].picture[0],
          resourceRef: 'pic1.jpg',
        },
        {
          ...Component.defaultContent.items[0].picture[1],
          resourceRef: 'pic1.jpg',
        },
        {
          ...Component.defaultContent.items[0].picture[2],
          resourceRef: 'pic1.jpg',
        },
        {
          ...Component.defaultContent.items[0].picture[3],
          resourceRef: 'pic1.jpg',
        },
        {
          ...Component.defaultContent.items[0].picture[4],
          resourceRef: 'pic1.jpg',
        },
        {
          ...Component.defaultContent.items[0].picture[5],
          resourceRef: 'pic1.jpg',
        },
      ],
    },
    {
      ...Component.defaultContent.items[1],
      picture: [
        {
          ...Component.defaultContent.items[1].picture[0],
          resourceRef: 'pic2.jpg',
        },
        {
          ...Component.defaultContent.items[1].picture[1],
          resourceRef: 'pic2.jpg',
        },
        {
          ...Component.defaultContent.items[1].picture[2],
          resourceRef: 'pic2.jpg',
        },
        {
          ...Component.defaultContent.items[1].picture[3],
          resourceRef: 'pic2.jpg',
        },
        {
          ...Component.defaultContent.items[1].picture[4],
          resourceRef: 'pic2.jpg',
        },
        {
          ...Component.defaultContent.items[1].picture[5],
          resourceRef: 'pic2.jpg',
        },
      ],
    },
    {
      ...Component.defaultContent.items[2],
      picture: [
        {
          ...Component.defaultContent.items[2].picture[0],
          resourceRef: 'pic3.jpg',
        },
        {
          ...Component.defaultContent.items[2].picture[1],
          resourceRef: 'pic3.jpg',
        },
        {
          ...Component.defaultContent.items[2].picture[2],
          resourceRef: 'pic3.jpg',
        },
        {
          ...Component.defaultContent.items[2].picture[3],
          resourceRef: 'pic3.jpg',
        },
        {
          ...Component.defaultContent.items[2].picture[4],
          resourceRef: 'pic3.jpg',
        },
        {
          ...Component.defaultContent.items[2].picture[5],
          resourceRef: 'pic3.jpg',
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
