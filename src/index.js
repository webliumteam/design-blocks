import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  copyright: {
    ...Component.defaultContent.copyright,
    type: 'small',
  },
  additional: {
    ...Component.defaultContent.additional,
    type: 'small',
  },
}

export default ExtendedWireframe
