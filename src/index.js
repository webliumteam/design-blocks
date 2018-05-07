import $editor from 'weblium/editor'

import Component from 'wireframe-series-9-events/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-9-events/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#eeeeee',
  },
  button: {
    ...Component.defaultContent.button,
    type: 'primary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
