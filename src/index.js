import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-testimonials/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-testimonials/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  testimonials: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-shade-color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.testimonials.items[0],
        picture: {
          alt: 'Jack Godson review',
        },
      },
      {
        ...Component.defaultContent.testimonials.items[1],
        picture: {
          alt: 'Robert Doe review',
        },
      },
      {
        ...Component.defaultContent.testimonials.items[2],
        picture: {
          alt: 'Julia Banks review',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'checkbox'},
}

export default ExtendedWireframe
