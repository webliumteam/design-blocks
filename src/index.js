import $editor from 'weblium/editor'

import Component from 'wireframe-series-6-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-6-cta/src/options.json'
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
    resourceRef: 'image.jpg',
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
