import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_image: {
          ...Component.defaultContent.collection.items[0].item_image,
          resourceRef: 'img-1.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_image: {
          ...Component.defaultContent.collection.items[1].item_image,
          resourceRef: 'img-2.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_image: {
          ...Component.defaultContent.collection.items[2].item_image,
          resourceRef: 'img-3.jpg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
