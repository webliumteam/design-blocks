import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    ...Component.defaultContent.picture,
    src: 'picture.jpg',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'secondary',
  },
  background: {
    type: 'color',
    color: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-text': {defaultValue: true, label: 'Additional text', type: 'checkbox'},
}

export default ExtendedWireframe
