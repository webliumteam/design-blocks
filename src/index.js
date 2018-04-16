import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-testimonials/src/component'
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
        ...Component.defaultContent.testimonials[0].image,
        resourceRef: 'cristian-newman-458458-unsplash.jpg',
      },
      socialIcons: {
        ...Component.defaultContent.testimonials[0].socialIcons,
        design: {
          ...Component.defaultContent.testimonials[0].socialIcons.design,
          color: 'dark-accent-color',
        },
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      image: {
        ...Component.defaultContent.testimonials[1].image,
        resourceRef: 'michael-dam-258165-unsplash.jpg',
      },
      socialIcons: {
        ...Component.defaultContent.testimonials[1].socialIcons,
        design: {
          ...Component.defaultContent.testimonials[1].socialIcons.design,
          color: 'dark-accent-color',
        },
      },
    },
    {
      ...Component.defaultContent.testimonials[2],
      image: {
        ...Component.defaultContent.testimonials[2].image,
        resourceRef: 'marco-w-397245-unsplash.jpg',
      },
      socialIcons: {
        ...Component.defaultContent.testimonials[2].socialIcons,
        design: {
          ...Component.defaultContent.testimonials[2].socialIcons.design,
          color: 'dark-accent-color',
        },
      },
    },
    {
      ...Component.defaultContent.testimonials[3],
      image: {
        ...Component.defaultContent.testimonials[3].image,
        resourceRef: 'cristian-newman-458458-unsplash.jpg',
      },
      socialIcons: {
        ...Component.defaultContent.testimonials[3].socialIcons,
        design: {
          ...Component.defaultContent.testimonials[3].socialIcons.design,
          color: 'dark-accent-color',
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
