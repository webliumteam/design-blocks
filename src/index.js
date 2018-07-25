import $editor from 'weblium/editor'

import Component from 'wireframe-series-5-gallery_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-5-gallery_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: [
    {
      picture: {
        alt: 'Illustration for project',
        galleryId: 'projects',
        resourceRef: '1.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '2.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '3.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '4.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '5.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '6.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '7.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '8.jpg',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
        resourceRef: '9.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
