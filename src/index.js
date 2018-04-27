import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  map: {
    ...Component.defaultContent.map,
    preset: 'default',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  heading: {defaultValue: false, label: 'Location title', type: 'hidden'},
  address: {defaultValue: false, label: 'Location address', type: 'hidden'},
  email: {defaultValue: false, label: 'E-mail', type: 'hidden'},
  phone: {defaultValue: false, label: 'Phone', type: 'hidden'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
