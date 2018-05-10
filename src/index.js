import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    ...Component.defaultContent.logo,
    image: {
      resourceRef: 'Logo.png',
      alt: '',
      width: 118,
      height: 23,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
