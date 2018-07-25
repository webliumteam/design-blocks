import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover_old/src/options.json'
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
            cover: '50% 50%',
          },
          resourceRef: 'img-bg.jpg',
          overlay: {
            type: 'color',
            color: '#000',
            opacity: 0.55,
          },
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
          resourceRef: 'img-bg.jpg',
          overlay: {
            type: 'color',
            color: '#000',
            opacity: 0.55,
          },
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
          resourceRef: 'img-bg.jpg',
          overlay: {
            type: 'color',
            color: '#000',
            opacity: 0.55,
          },
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
