import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  testimonials: [
    {
      ...Component.defaultContent.testimonials[0],
      image: {
        src: 'item-1.png',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      image: {
        src: 'item-1.png',
        alt: 'Amanda Peterson photo',
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
}

export default ExtendedWireframe
