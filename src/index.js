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
  image: {defaultValue: true, label: 'Reviewer photo', type: 'checkbox'},
  position: {defaultValue: false, label: 'Reviewer job position', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
