import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  socialIcons: {
    ...Component.defaultContent.socialIcons.networks,
    design: {
      ...Component.defaultContent.socialIcons.design,
      color: 'dark-accent-color',
    },
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'picture.jpg',
    overlay: {
      type: 'color',
      color: 'light-shade-color',
      opacity: 0.6,
    },
  },
  logo: {
    text: {
      ...Component.defaultContent.logo.text,
      type: 'blockTitle',
      color: 'brand-color',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
