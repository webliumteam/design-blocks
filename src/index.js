import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  gallery: [
    {
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        resourceRef: 'image-1.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        resourceRef: 'image-2.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        resourceRef: 'image-3.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        resourceRef: 'image-4.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        resourceRef: 'image-5.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'image-6.jpg',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: false, label: 'Image description', type: 'hidden'},
  caption: {defaultValue: false, label: 'Caption after body', type: 'hidden'},
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
