import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-cta_old/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'subheading',
  },
  background: {
    ...Component.defaultContent.background,
    color: 'light-shade-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
