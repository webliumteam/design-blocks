import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-4-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  cover: {
    items: [
      {
        ...Component.defaultContent.cover.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'img1.jpg',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
          opacity: 0.85,
        },
      },
      {
        ...Component.defaultContent.cover.items[1],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'img2.jpg',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
          opacity: 0.80,
        },
      },
      {
        ...Component.defaultContent.cover.items[2],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'img3.jpg',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
          opacity: 0.80,
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
