import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-footer/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'Great House',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'text-left': {defaultValue: true, label: 'Left text', type: 'checkbox'},
  'text-right': {defaultValue: true, label: 'Right text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Company name', type: 'checkbox'},
}


export default ExtendedWireframe
