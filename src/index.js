import $editor from 'weblium/editor'

import Component from 'wireframe-series-8-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    background: {
      'nth-child': [
        ['3n+2', {
          color: 'brand-color',
          type: 'color',
        }],
        ['3n+3', {
          color: 'brand-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        image: {
          resourceRef: 'image-1.jpg',
          alt: 'Service illustration photo',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        image: {
          resourceRef: 'image-2.jpg',
          alt: 'Service illustration photo',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        image: {
          resourceRef: 'image-3.jpg',
          alt: 'Service illustration photo',
        },
      },
      {
        ...Component.defaultContent.collection.items[3],
        image: {
          resourceRef: 'image-4.jpg',
          alt: 'Service illustration photo',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  cta: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
}

export default ExtendedWireframe
