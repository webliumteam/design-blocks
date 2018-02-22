import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    src: 'mountains.png',
  },
}

ExtendedWireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'primary-btn': {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
