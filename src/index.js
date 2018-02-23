import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-pricing/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  'plan-cta-1': {
    type: 'secondary',
    textValue: 'Order now',
  },
  'plan-cta-2': {
    type: 'secondary',
    textValue: 'Order now',
  },
  'plan-cta-3': {
    type: 'secondary',
    textValue: 'Order now',
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
