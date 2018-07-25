import $editor from 'weblium/editor'

import Component from 'wireframe-series-5-cover_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-5-cover_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'sasha-dasha-bakani-427546-unsplash.jpg',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: 0.3,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,

  'item-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  cta: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
