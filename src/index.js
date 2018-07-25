import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cta_old/src/options.json'
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
    resourceRef: 'bg.jpg',
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {
    ...Component.modifierScheme.subtitle,
    defaultValue: true,
    type: 'checkbox',
  },
}

export default ExtendedWireframe
