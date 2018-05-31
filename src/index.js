import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'bg.png',
        },
        cta: {
          ...Component.defaultContent.collection.items[0].item_button,
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'bg.png',
        },
        cta: {
          ...Component.defaultContent.collection.items[1].item_button,
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'bg.png',
        },
        cta: {
          ...Component.defaultContent.collection.items[2].item_button,
          size: 'lg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'hidden'},
}

export default ExtendedWireframe
