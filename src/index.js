import $editor from 'weblium/editor'

import Component from 'wireframe-series-8-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        icon: {
          ...Component.defaultContent.collection.items[0].icon,
          fill: 'brand-color',
        },
        advantages: [
          {
            ...Component.defaultContent.collection.items[0].advantages[0],
            icon: {
              ...Component.defaultContent.collection.items[0].advantages[0].icon,
              fill: 'brand-color',
            },
          },
          {
            ...Component.defaultContent.collection.items[0].advantages[1],
            icon: {
              ...Component.defaultContent.collection.items[0].advantages[1].icon,
              fill: 'brand-color',
            },
          },
          {
            ...Component.defaultContent.collection.items[0].advantages[2],
            icon: {
              ...Component.defaultContent.collection.items[0].advantages[2].icon,
              fill: 'brand-color',
            },
          },
        ],
      },
      {
        ...Component.defaultContent.collection.items[1],
        icon: {
          ...Component.defaultContent.collection.items[1].icon,
          fill: 'brand-color',
        },
        advantages: [
          {
            ...Component.defaultContent.collection.items[1].advantages[0],
            icon: {
              ...Component.defaultContent.collection.items[1].advantages[0].icon,
              fill: 'brand-color',
            },
          },
          {
            ...Component.defaultContent.collection.items[1].advantages[1],
            icon: {
              ...Component.defaultContent.collection.items[1].advantages[1].icon,
              fill: 'brand-color',
            },
          },
          {
            ...Component.defaultContent.collection.items[1].advantages[2],
            icon: {
              ...Component.defaultContent.collection.items[1].advantages[2].icon,
              fill: 'brand-color',
            },
          },
        ],
      },
      {
        ...Component.defaultContent.collection.items[2],
        icon: {
          ...Component.defaultContent.collection.items[2].icon,
          fill: 'brand-color',
        },
        advantages: [
          {
            ...Component.defaultContent.collection.items[2].advantages[0],
            icon: {
              ...Component.defaultContent.collection.items[2].advantages[0].icon,
              fill: 'brand-color',
            },
          },
          {
            ...Component.defaultContent.collection.items[2].advantages[1],
            icon: {
              ...Component.defaultContent.collection.items[2].advantages[1].icon,
              fill: 'brand-color',
            },
          },
          {
            ...Component.defaultContent.collection.items[2].advantages[2],
            icon: {
              ...Component.defaultContent.collection.items[2].advantages[2].icon,
              fill: 'brand-color',
            },
          },
        ],
      },
    ],
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'karim-ghantous-329207-unsplash.jpg',
    overlay: {
      type: 'color',
      color: 'light-shade-color',
      opacity: 0.75,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
