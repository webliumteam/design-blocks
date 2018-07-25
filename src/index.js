import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cover_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    resourceRef: 'mountains.png',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-btn': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
