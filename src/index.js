import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'slide.jpg',
  },
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_subheading: {
          ...Component.defaultContent.collection.items[0].item_subheading,
          content: '<span style="font-weight: bold;">WE IMPLEMENT INNOVATIVE PROJECTS</span>',
        },
        item_button: {
          ...Component.defaultContent.collection.items[0].item_button,
          type: 'secondary',
          size: 'lg',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[0].item_button_additional,
          type: 'primary-alt',
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_subheading: {
          ...Component.defaultContent.collection.items[1].item_subheading,
          content: '<span style="font-weight: bold;">WE IMPLEMENT INNOVATIVE PROJECTS</span>',
        },
        item_button: {
          ...Component.defaultContent.collection.items[1].item_button,
          type: 'secondary',
          size: 'lg',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[1].item_button_additional,
          type: 'primary-alt',
          size: 'lg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_subheading: {
          ...Component.defaultContent.collection.items[2].item_subheading,
          content: '<span style="font-weight: bold;">WE IMPLEMENT INNOVATIVE PROJECTS</span>',
        },
        item_button: {
          ...Component.defaultContent.collection.items[2].item_button,
          type: 'secondary',
          size: 'lg',
        },
        item_button_additional: {
          ...Component.defaultContent.collection.items[2].item_button_additional,
          type: 'primary-alt',
          size: 'lg',
        },
      },
    ],
  },
}


ExtendedWireframe.modifierScheme = {
  item_subheading: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  item_button: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  item_button_additional: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'hidden'},
}

export default ExtendedWireframe
