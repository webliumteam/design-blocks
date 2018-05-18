import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-pricing/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-pricing/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
  leftBackground: {
    type: 'color',
    color: '#f7f7f7',
  },
  centerBackground: {
    type: 'color',
    color: '#f7f7f7',
  },
  rightBackground: {
    type: 'color',
    color: '#f7f7f7',
  },
  title: {
    ...Component.defaultContent.title,
    content: '- PRICING -',
  },
  'plan-title-1': {
    content: 'BASIC',
    type: 'heading',
  },
  'plan-title-2': {
    content: 'PREMIUM',
    type: 'heading',
  },
  'plan-title-3': {
    content: 'PRO',
    type: 'heading',
  },
  'plan-price-text-1': {
    content: 'FOR ALL PERIOD',
    type: 'caption',
  },
  'plan-price-text-2': {
    content: 'PER MONTH',
    type: 'caption',
  },
  'plan-price-text-3': {
    content: 'PER MONTH',
    type: 'caption',
  },
  'plan-cta-1': {
    ...Component.defaultContent['plan-cta-1'],
    type: 'primary',
    size: 'sm',
  },
  'plan-cta-2': {
    ...Component.defaultContent['plan-cta-2'],
    type: 'primary',
    size: 'sm',
  },
  'plan-cta-3': {
    ...Component.defaultContent['plan-cta-3'],
    type: 'primary',
    size: 'sm',
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-btn': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
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
