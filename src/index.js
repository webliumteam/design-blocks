import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Gallery',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Learn more about our office work and all stages of production by looking at these photos',
    type: 'subtitle',
  },
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
