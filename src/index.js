import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-footer/src/options.json'
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
    resourceRef: 'picture.jpg',
    overlay: {
      type: 'color',
      color: '#000',
      opacity: 0.8,
    },
  },
  logo: {
    text: {
      ...Component.defaultContent.logo.text,
      color: 'brand-color',
    },
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    design: {
      ...Component.defaultContent.socialIcons.design,
      color: 'dark-accent-color',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
