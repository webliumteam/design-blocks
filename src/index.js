import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-follow-us/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-follow-us/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    resourceRef: 'bg.jpg',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: 0.3,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
