import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-faq/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-faq/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  cta: {
    ...Component.defaultContent.cta,
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'FAQ description', type: 'checkbox'},
}


export default ExtendedWireframe
