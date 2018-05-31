import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
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
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '25% 50%',
          },
          resourceRef: 'img-1-pizza.png',
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: 'QUANTUM COMPANY',
        },
        item_subheading: {
          ...Component.defaultContent.collection.items[0].item_subheading,
          content: 'WE IMPLEMENT INNOVATIVE PROJECTS',
          color: 'light-accent-color',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '25% 50%',
          },
          resourceRef: 'img-1-pizza.png',
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: 'QUANTUM COMPANY',
        },
        item_subheading: {
          ...Component.defaultContent.collection.items[0].item_subheading,
          content: 'WE IMPLEMENT INNOVATIVE PROJECTS',
          color: 'light-accent-color',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '25% 50%',
          },
          resourceRef: 'img-1-pizza.png',
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: 'QUANTUM COMPANY',
        },
        item_subheading: {
          ...Component.defaultContent.collection.items[0].item_subheading,
          content: 'WE IMPLEMENT INNOVATIVE PROJECTS',
          color: 'light-accent-color',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          size: 'lg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
