import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_image: {
          ...Component.defaultContent.collection.items[0].item_image,
          resourceRef: 'img-1.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_image: {
          ...Component.defaultContent.collection.items[1].item_image,
          resourceRef: 'img-2.jpg',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_image: {
          ...Component.defaultContent.collection.items[2].item_image,
          resourceRef: 'img-3.jpg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'post-description': {
    defaultValue: true,
    label: 'Post main text',
    type: 'checkbox',
  },
  'post-image': {defaultValue: true, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {
    defaultValue: true,
    label: 'Date of publishing',
    type: 'checkbox',
  },
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {
    defaultValue: false,
    label: 'Top icon decorator',
    type: 'hidden',
  },
}

export default ExtendedWireframe
