import $editor from 'weblium/editor'

import Component from 'wireframe-series-5-header/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    ...Component.defaultContent.logo,
    text: {
      ...Component.defaultContent.logo.text,
      color: 'brand-color',
    },
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    design: {
      ...Component.defaultContent.socialIcons.design,
      color: 'brand-color',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
