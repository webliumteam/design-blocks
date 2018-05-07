import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-pricing/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-pricing/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  leftBackground: {
    type: 'color',
    color: 'dark-shade-color',
  },
  centerBackground: {
    type: 'color',
    color: 'light-accent-color?darken=7',
  },
  rightBackground: {
    type: 'color',
    color: 'dark-accent-color',
  },
  'plan-cta-1': {
    ...Component.defaultContent['plan-cta-1'],
    type: 'secondary',
  },
  'plan-cta-2': {
    ...Component.defaultContent['plan-cta-2'],
    type: 'primary-alt',
  },
  'plan-cta-3': {
    ...Component.defaultContent['plan-cta-3'],
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-btn': {defaultValue: false, label: 'Button', type: 'hidden'},
  'plan-additional-info': {
    defaultValue: false,
    label: 'Product additional information',
    type: 'hidden',
  },
  'plan-icon': {defaultValue: false, label: 'Product icon', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
