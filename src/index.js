import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [{
    image: {
      resourceRef: 'gallery-img-1.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-2.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-3.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-4.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-5.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-2.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-3.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-4.jpg',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      resourceRef: 'gallery-img-5.jpg',
      alt: 'Gallery image',
    },
  }],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
}

export default ExtendedWireframe
