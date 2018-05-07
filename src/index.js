import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    design: {
      ...Component.defaultContent.socialIcons.design,
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      padding: 20,
      color: 'brand-color',
      sizes: [10, 20, 30, 40],
      size: '40px',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
