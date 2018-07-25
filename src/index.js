import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-blog_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-4-blog_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'brand-color',
    opacity: '0.35',
  },
  collection: {
    ...Component.defaultContent.collection,
    background: {
      id: 'monochrome',
      colors: {
        background: {
          type: 'color',
          color: '#fff',
        },
      },
      preset: [['n', {type: 'color', color: '#fff'}]],
    },
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_image: {
          ...Component.defaultContent.collection.items[0].item_image,
          resourceRef: '1.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_image: {
          ...Component.defaultContent.collection.items[1].item_image,
          resourceRef: '2.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_image: {
          ...Component.defaultContent.collection.items[2].item_image,
          resourceRef: '3.jpg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  item_date: {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
}

export default ExtendedWireframe
