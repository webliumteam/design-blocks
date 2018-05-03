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
  testimonials: [
    {
      ...Component.defaultContent.testimonials[0],
      image: {
        ...Component.defaultContent.testimonials[0].picture,
        resourceRef: 'item-1.png',
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      image: {
        ...Component.defaultContent.testimonials[1].picture,
        resourceRef: 'item-1.png',
      },
    },
  ],
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'background.png',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
