import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-4-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#eff1f2',
  },
  formBackground: {
    type: 'color',
    color: 'eff1f2',
  },
  title: {
    ...Component.defaultContent.title,
    type: 'blockTitle',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    type: 'subtitle',
  },
  'hours-title': {
    ...Component.defaultContent['hours-title'],
    type: 'heading',
  },
  'contacts-title': {
    ...Component.defaultContent['contacts-title'],
    type: 'heading',
  },
  'address-content': {
    ...Component.defaultContent['address-content'],
    type: 'text',
  },
  'hours-content': {
    ...Component.defaultContent['hours-content'],
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'contacts-title': {defaultValue: false, label: 'Contacts title', type: 'hidden'},
  phone: {defaultValue: false, label: 'Phone', type: 'hidden'},
  email: {defaultValue: false, label: 'E-mail', type: 'hidden'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
}

export default ExtendedWireframe
