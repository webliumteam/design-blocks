import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  why: [
    {
      ...Component.defaultContent.why[0],
    },
    {
      ...Component.defaultContent.why[1],
    },
    {
      ...Component.defaultContent.why[2],
    },
    {
      ...Component.defaultContent.why[3],
    },
  ],
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: '0.85',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
