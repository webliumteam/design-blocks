import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-header_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-header_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    text: {
      value: 'Quantum Company',
      tagName: 'h1',
      fontSize: 32,
      color: 'brand-color',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
