import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(
  _.set('style', style),
  _.set('$block.options', {...defaultOptions, ...options}),
)))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        resourceRef: 'picture1.jpg',
        size: {
          'min-width: 320px': 480,
          'min-width: 480px': 768,
          'min-width: 768px': 992,
          'min-width: 992px': 1200,
        },
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        resourceRef: 'picture2.jpg',
        size: {
          'min-width: 320px': 480,
          'min-width: 480px': 768,
          'min-width: 768px': 992,
          'min-width: 992px': 1200,
        },
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        resourceRef: 'picture3.jpg',
        size: {
          'min-width: 320px': 480,
          'min-width: 480px': 768,
          'min-width: 768px': 992,
          'min-width: 992px': 1200,
        },
      },
    },
    {
      ...Component.defaultContent.gallery[3],
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        resourceRef: 'picture4.jpg',
        size: {
          'min-width: 320px': 480,
          'min-width: 480px': 768,
          'min-width: 768px': 992,
          'min-width: 992px': 1200,
        },
      },
    },
    {
      ...Component.defaultContent.gallery[4],
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        resourceRef: 'picture5.jpg',
        size: {
          'min-width: 320px': 480,
          'min-width: 480px': 768,
          'min-width: 768px': 992,
          'min-width: 992px': 1200,
        },
      },
    },
    {
      ...Component.defaultContent.gallery[5],
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'picture6.jpg',
        size: {
          'min-width: 320px': 480,
          'min-width: 480px': 768,
          'min-width: 768px': 992,
          'min-width: 992px': 1200,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Gallery title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'hidden'},
  'body-text': {defaultValue: false, label: 'Image description', type: 'hidden'},
  caption: {defaultValue: false, label: 'Image caption', type: 'hidden'},
  'secondary-button': {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
