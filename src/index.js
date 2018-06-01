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
          resourceRef: 'cover.jpg',
          overlay: {
            type: 'color',
            color: '#072747',
            opacity: 0.4,
          },
        },
        item_heading: {
          ...Component.defaultContent.collection.items[0].item_heading,
          content: 'QUANTUM COMPANY',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          textValue: 'Request a quote',
          type: 'secondary',
          size: 'lg',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[0].item_button_additional,
          textValue: 'Learn more',
          type: 'primary',
          size: 'lg',
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
          resourceRef: 'cover.jpg',
          overlay: {
            type: 'color',
            color: '#072747',
            opacity: 0.4,
          },
        },
        item_heading: {
          ...Component.defaultContent.collection.items[1].item_heading,
          content: 'QUANTUM COMPANY',
        },
        item_button: {
          ...Component.defaultContent.collection.items[1].item_button,
          textValue: 'Request a quote',
          type: 'secondary',
          size: 'lg',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[1].item_button_additional,
          textValue: 'Learn more',
          type: 'primary',
          size: 'lg',
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
          resourceRef: 'cover.jpg',
          overlay: {
            type: 'color',
            color: '#072747',
            opacity: 0.4,
          },
        },
        item_heading: {
          ...Component.defaultContent.collection.items[2].item_heading,
          content: 'QUANTUM COMPANY',
        },
        item_button: {
          ...Component.defaultContent.collection.items[2].item_button,
          textValue: 'Request a quote',
          type: 'secondary',
          size: 'lg',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[2].item_button_additional,
          textValue: 'Learn more',
          type: 'primary',
          size: 'lg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  item_button_additional: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
