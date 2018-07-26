import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        resourceRef: 'gallery01.jpg',
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
        resourceRef: 'gallery02.jpg',
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
        resourceRef: 'gallery03.jpg',
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
        resourceRef: 'gallery04.jpg',
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
        resourceRef: 'gallery05.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[5],
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'gallery06.jpg',
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
  'body-text': {defaultValue: true, label: 'Image description', type: 'checkbox'},
  caption: {defaultValue: false, label: 'Caption after body', type: 'hidden'},
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
