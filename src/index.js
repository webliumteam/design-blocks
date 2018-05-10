import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-footer/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    image: {
      resourceRef: 'logo.png',
      width: 229,
      height: 50,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
