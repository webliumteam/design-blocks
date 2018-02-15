import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'Company logo',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
}

export default ExtendedWireframe
