import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

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
    ...Component.defaultContent.numbers,
    {
      title: {
        content: 'Improve customer satisfaction for',
        type: 'subtitle',
      },
      label: {
        content: 'of our users',
        type: 'text',
      },
      value: {
        content: '89%',
        type: 'blockTitle',
      },
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
