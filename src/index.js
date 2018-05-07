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
    color: 'light-shade-color',
  },
  centerBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  rightBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  leftWrapperBackground: {
    type: 'color',
    color: '#595959',
  },
  centerWrapperBackground: {
    type: 'color',
    color: 'brand-color',
  },
  rightWrapperBackground: {
    type: 'color',
    color: '#595959',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '70% 100%',
    },
    resourceRef: 'pricing_bg_image.jpg',
  },
  'plan-list-1': [
    ...Component.defaultContent['plan-list-1'],
    {
      text: {
        content: '100 Max Connections',
        type: 'text',
      },
    },
  ],
  'plan-list-2': [
    ...Component.defaultContent['plan-list-2'],
    ...Component.defaultContent['plan-list-2'],
  ],
  'plan-list-3': [
    ...Component.defaultContent['plan-list-3'],
    {
      text: {
        content: '150 Max Connections',
        type: 'text',
      },
    },
  ],
  'plan-cta-1': {
    ...Component.defaultContent['plan-cta-1'],
    type: 'secondary',
  },
  'plan-cta-2': {
    ...Component.defaultContent['plan-cta-2'],
    type: 'primary',
  },
  'plan-cta-3': {
    ...Component.defaultContent['plan-cta-3'],
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-btn': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  'block-title': {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'plan-additional-info': {
    defaultValue: true,
    label: 'Product additional information',
    type: 'checkbox',
  },
  'plan-button': {defaultValue: true, label: 'Package button', type: 'checkbox'},
  'plan-description': {defaultValue: true, label: 'Product description', type: 'checkbox'},
  'plan-icon': {defaultValue: false, label: 'Product icon', type: 'hidden'},
  'plan-price': {defaultValue: true, label: 'Product price', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
