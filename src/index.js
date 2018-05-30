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
            cover: '50% 50%',
          },
          resourceRef: 'bg.png',
          overlay: {
            type: 'color',
            color: 'dark-shade-color',
            opacity: 0.3,
          },
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: '<span style="font-weight: bold;">QUANTUM</span> COMPANY',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          type: 'secondary',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[0].item_button_additional,
          type: 'primary-alt',
        },
      },
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'bg.png',
          overlay: {
            type: 'color',
            color: 'dark-shade-color',
            opacity: 0.3,
          },
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: '<span style="font-weight: bold;">QUANTUM</span> COMPANY',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          type: 'secondary',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[0].item_button_additional,
          type: 'primary-alt',
        },
      },
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          resourceRef: 'bg.png',
          overlay: {
            type: 'color',
            color: 'dark-shade-color',
            opacity: 0.3,
          },
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: '<span style="font-weight: bold;">QUANTUM</span> COMPANY',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          type: 'secondary',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[0].item_button_additional,
          type: 'primary-alt',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'hidden'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
