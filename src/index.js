import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'Company logo',
    },
  },
  map: {
    ...Component.defaultContent.map,
    preset: 'default',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  map: {defaultValue: true, label: 'Map', type: 'hidden'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
}

export default ExtendedWireframe
