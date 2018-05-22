import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  title: {
    ...Component.defaultContent.title,
    content: '- BLOG -',
  },
  subtitle: {
    content: 'I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
    type: 'subtitle',
  },
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_title: {
          ...Component.defaultContent.collection.items[0].item_title,
          content: 'HOW TO HIRE EMPLOYEES?',
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
          resourceRef: 'img-1.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_title: {
          ...Component.defaultContent.collection.items[1].item_title,
          content: 'OW TO ACHIEVE HIGHER PROFITS IN RETAIL WITH OUR NEW PRODUCT?',
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
          resourceRef: 'img-2.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_title: {
          ...Component.defaultContent.collection.items[2].item_title,
          content: 'TOP 5 TIPS TO IMPROVE YOUR ENGINEERING DEPARTMENT.',
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
          resourceRef: 'img-3.jpg',
        },
      },
    ],
  },
  button: {
    ...Component.defaultContent.button,
    textValue: 'Learn more',
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}


export default ExtendedWireframe
