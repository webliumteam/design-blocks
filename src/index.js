import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'color',
    color: '#1f1e1d',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'text-left': {defaultValue: true, label: 'Left text', type: 'checkbox'},
  'text-right': {defaultValue: true, label: 'Right text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Company name', type: 'checkbox'},
}


export default ExtendedWireframe
