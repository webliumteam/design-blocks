import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'tile',
      cover: '50% 50%',
    },
    resourceRef: 'bg-pattern.jpg',
  },
  numbers: [
    {
      label: 'Hours of work',
      value: '7655',
      id: "'554d7318-3c82-4dd4-87e9-b0b92299199f6'",
    },
    {
      label: 'Happy clients',
      value: '1200',
      id: "'554d7318-3c82-4dd4-87e9-b0b92299199f5'",
    },
    {
      label: 'Repaired houses',
      value: '360',
      id: "'554d7318-3c82-4dd4-87e9-b0b92299199f3'",
    },
    {
      label: 'Painted walls',
      value: '4280',
      id: "'554d7318-3c82-4dd4-87e9-b0b92299199f2'",
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  'number-title': {defaultValue: false, label: 'Additional information on numbers', type: 'hidden'},
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
