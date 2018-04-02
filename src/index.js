import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-shade-color',
  },
  logo: {
    image: {
      resourceRef: 'cdet-logo.png',
      alt: 'CDET',
      width: 131,
      height: 59,
    },
  },
  menu: {
    linkColor: {
      hover: 'brand-color',
    },
    links: [
      {
        id: 'about',
        metadata: {
          displayName: 'About',
        },
      },
      {
        id: 'advantages',
        metadata: {
          displayName: 'Advantages',
        },
      },
      {
        id: 'numbers',
        metadata: {
          displayName: 'Numbers',
        },
      },
      {
        id: 'partners',
        metadata: {
          displayName: 'Partners',
        },
      },
      {
        id: 'contacts',
        metadata: {
          displayName: 'Contact us',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {
    ...Component.modifierScheme.button,
    defaultValue: false,
    type: 'hidden',
  },
}

export default ExtendedWireframe
