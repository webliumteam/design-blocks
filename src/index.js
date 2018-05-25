import $editor from 'weblium/editor'

import Component from 'wireframe-series-10-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

export default ExtendedWireframe

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          resourceRef: 'img7.jpg',
          overlay: {
            type: 'color',
            color: 'light-shade-color',
            opacity: 0.6,
          },
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        background: {
          type: 'image',
          resourceRef: 'img4.jpg',
          overlay: {
            type: 'color',
            color: 'light-shade-color',
            opacity: 0.6,
          },
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        background: {
          type: 'image',
          resourceRef: 'img3.jpg',
          overlay: {
            type: 'color',
            color: 'light-shade-color',
            opacity: 0.6,
          },
        },
      },
      {
        ...Component.defaultContent.collection.items[3],
        background: {
          type: 'image',
          resourceRef: 'img1.jpg',
          overlay: {
            type: 'color',
            color: 'light-shade-color',
            opacity: 0.6,
          },
        },
      },
      {
        ...Component.defaultContent.collection.items[4],
        background: {
          type: 'image',
          resourceRef: 'img5.jpg',
          overlay: {
            type: 'color',
            color: 'light-shade-color',
            opacity: 0.6,
          },
        },
      },
      {
        ...Component.defaultContent.collection.items[5],
        background: {
          type: 'image',
          resourceRef: 'img6.jpg',
          overlay: {
            type: 'color',
            color: 'light-shade-color',
            opacity: 0.6,
          },
        },
      },
    ],
  },
}
