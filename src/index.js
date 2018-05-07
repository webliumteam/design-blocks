import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2',
      fontSize: 25,
    },
  },
  map: {
    ...Component.defaultContent.map,
    preset: 'default',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  address: {defaultValue: true, label: 'Address text block', type: 'checkbox'},
  email: {defaultValue: true, label: 'E-mail text block', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Logo', type: 'checkbox'},
  map: {defaultValue: true, label: 'Map', type: 'checkbox'},
  phone: {defaultValue: true, label: 'Phone text block', type: 'checkbox'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
