import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: {
    background: {
      'nth-child': [
        ['n', {
          color: 'dark-shade-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        logo: {
          image: {
            resourceRef: '02.png',
            width: 153,
            height: 107,
          },
        },
      },
      {
        logo: {
          image: {
            resourceRef: '01.png',
            width: 157,
            height: 97,
          },
        },
      },
      {
        logo: {
          image: {
            resourceRef: '03.png',
            width: 189,
            height: 49,
          },
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {
    ...Component.modifierScheme.subtitle,
    defaultValue: false,
    type: 'hidden',
  },
  heading: {
    ...Component.modifierScheme.heading,
    defaultValue: false,
    type: 'hidden',
  },
  body: {
    ...Component.modifierScheme.body,
    defaultValue: false,
    type: 'hidden',
  },
  link: {
    ...Component.modifierScheme.link,
    defaultValue: false,
    type: 'hidden',
  },
  button: {
    ...Component.modifierScheme.button,
    defaultValue: false,
    type: 'hidden',
  },
}

export default ExtendedWireframe
