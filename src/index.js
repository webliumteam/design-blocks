import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {
  enhancers: {
    withProps,
  },
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '100% 20%',
          },
          resourceRef: 'coverpic.jpg',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '100% 20%',
          },
          resourceRef: 'coverpic.jpg',
        },
        item_button: {
          ...Component.defaultContent.collection.items[1].item_button,
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '100% 20%',
          },
          resourceRef: 'coverpic.jpg',
        },
        item_button: {
          ...Component.defaultContent.collection.items[2].item_button,
          size: 'lg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  item_button: {
    id: 'primary-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
  arrows: {
    id: 'arrows',
    type: 'checkbox',
    label: 'Navigation arrows',
    defaultValue: true,
  },
  dots: {
    id: 'dots',
    type: 'checkbox',
    label: 'Navigation indicators',
    defaultValue: true,
  },
}

export default ExtendedWireframe
