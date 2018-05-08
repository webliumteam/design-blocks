import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'color',
    color: 'dark-shade-color',
  },
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'Logo',
    },
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Primary Button', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Company name', type: 'checkbox'},
}


export default ExtendedWireframe
