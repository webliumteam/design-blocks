import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '0% -50%',
    },
    resourceRef: 'bg-header.jpg',
    overlay: {
      type: 'color',
      color: 'dark-accent-color',
      opacity: 0.76,
    },
  },
  logo: {
    image: {
      resourceRef: 'asam.png',
      alt: 'asam.',
      width: 118,
      height: 23,
    },
  },
  theme: 'dark',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
