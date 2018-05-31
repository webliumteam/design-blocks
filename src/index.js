import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-testimonials/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg-testimonials.png',
  },
  testimonials: [
    {
      ...Component.defaultContent.testimonials[0],
      image: {
        ...Component.defaultContent.testimonials[0].image,
        resourceRef: 'photo.png',
        size: {
          'min-width: 1200px': 211,
          'min-width: 992px': 211,
          'min-width: 768px': 211,
          'min-width: 480px': 211,
          'min-width: 320px': 211,
        },
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      image: {
        ...Component.defaultContent.testimonials[1].image,
        resourceRef: 'photo.png',
        size: {
          'min-width: 1200px': 211,
          'min-width: 992px': 211,
          'min-width: 768px': 211,
          'min-width: 480px': 211,
          'min-width: 320px': 211,
        },
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary-alt',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  publishDate: {defaultValue: false, label: 'Date of publishing', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
