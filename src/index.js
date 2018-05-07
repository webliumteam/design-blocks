import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-quote/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-quote/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    ...Component.defaultContent.background,
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
    overlay: {
      type: 'color',
      color: 'brand-color',
      opacity: 0.2,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  author: {
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
  picture: {
    type: 'hidden',
    label: 'Picture',
    defaultValue: false,
  },
}

export default ExtendedWireframe
