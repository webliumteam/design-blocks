import $editor from 'weblium/editor'

import Component from 'wireframe-series-7-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-accent-color',
        }],
        ['2n', {
          type: 'color',
          color: 'dark-accent-color',
        }],
      ],
    },
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
