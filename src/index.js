import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-footer_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    text: {
      ...Component.defaultContent.logo.text,
      color: 'brand-color',
      type: 'blockTitle',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
