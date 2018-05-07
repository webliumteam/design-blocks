import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-footer/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'logo',
      width: 174,
      height: 34,
    },
  },
  description: {
    ...Component.defaultContent.description,
    brightness: 10,
  },
  socialIcons: {
    networks: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'null',
      innerFill: false,
      preset: 'preset001',
      offset: 15,
      color: '#b3bbc2',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
  copyright: {
    ...Component.defaultContent.copyright,
    brightness: 25,
  },
  additional: {
    ...Component.defaultContent.additional,
    brightness: 25,
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
