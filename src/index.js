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
        item_title: {
          ...Component.defaultContent.collection.items[0].item_title,
          type: 'subtitle',
        },
        item_category: {
          ...Component.defaultContent.collection.items[0].item_category,
          content: 'CREATIVE PROCESS',
        },
        item_date: {
          ...Component.defaultContent.collection.items[0].item_date,
          content: 'SEPTEMBER 22, 2017',
        },
        item_image: {
          ...Component.defaultContent.collection.items[0].item_image,
          resourceRef: 'blog-pic-1.jpg',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          textValue: 'LEARN MORE',
          type: 'link',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_title: {
          ...Component.defaultContent.collection.items[1].item_title,
          type: 'subtitle',
        },
        item_category: {
          ...Component.defaultContent.collection.items[1].item_category,
          content: 'CREATIVE PROCESS',
        },
        item_date: {
          ...Component.defaultContent.collection.items[1].item_date,
          content: 'SEPTEMBER 22, 2017',
        },
        item_image: {
          ...Component.defaultContent.collection.items[1].item_image,
          resourceRef: 'blog-pic-2.jpg',
        },
        item_button: {
          ...Component.defaultContent.collection.items[1].item_button,
          textValue: 'LEARN MORE',
          type: 'link',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_title: {
          ...Component.defaultContent.collection.items[2].item_title,
          type: 'subtitle',
        },
        item_category: {
          ...Component.defaultContent.collection.items[2].item_category,
          content: 'CREATIVE PROCESS',
        },
        item_date: {
          ...Component.defaultContent.collection.items[2].item_date,
          content: 'SEPTEMBER 22, 2017',
        },
        item_image: {
          ...Component.defaultContent.collection.items[2].item_image,
          resourceRef: 'blog-pic-3.jpg',
        },
        item_button: {
          ...Component.defaultContent.collection.items[2].item_button,
          textValue: 'LEARN MORE',
          type: 'link',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Block button', type: 'hidden'},
}

export default ExtendedWireframe
