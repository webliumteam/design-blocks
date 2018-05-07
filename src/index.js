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
  background: {
    type: 'color',
    color: '#1F1E1D',
  },
  logo: {
    text: {
      value: 'Company Logo',
      fontSize: 30,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  border: {
    defaultValue: true,
    label: 'White border',
    type: 'checkbox',
    classNameOnActive: style['footer--with-border'],
  },
}


export default ExtendedWireframe
