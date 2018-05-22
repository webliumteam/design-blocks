import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_image: {
          ...Component.defaultContent.collection.items[0].item_image,
          resourceRef: 'img1.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_image: {
          ...Component.defaultContent.collection.items[1].item_image,
          resourceRef: 'img2.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_image: {
          ...Component.defaultContent.collection.items[2].item_image,
          resourceRef: 'img3.jpg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
