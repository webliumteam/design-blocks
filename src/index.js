import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [{
    ...Component.defaultContent.gallery[0],
    image: {
      ...Component.defaultContent.gallery[0].image,
      resourceRef: 'picture1.jpg',
      height: 500,
    },
  },
  {
    ...Component.defaultContent.gallery[1],
    image: {
      ...Component.defaultContent.gallery[1].image,
      resourceRef: 'picture2.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[2],
    image: {
      ...Component.defaultContent.gallery[2].image,
      resourceRef: 'picture3.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[3],
    image: {
      ...Component.defaultContent.gallery[3].image,
      resourceRef: 'picture4.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[4],
    image: {
      ...Component.defaultContent.gallery[4].image,
      resourceRef: 'picture5.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[5],
    image: {
      ...Component.defaultContent.gallery[5].image,
      resourceRef: 'picture6.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[6],
    image: {
      ...Component.defaultContent.gallery[6].image,
      resourceRef: 'picture7.jpg',
    },
  },
  {
    ...Component.defaultContent.gallery[7],
    image: {
      ...Component.defaultContent.gallery[7].image,
      resourceRef: 'picture8.jpg',
    },
  }],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'item-heading': {defaultValue: false, label: 'Image description', type: 'hidden'},
}

export default ExtendedWireframe
