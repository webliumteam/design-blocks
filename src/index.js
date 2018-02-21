import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: '- Our process -',
    type: 'blockTitle',
  },
  'cta-1': {
    ...Component.defaultContent['cta-1'],
    type: 'primary',
  },
  'cta-2': {
    ...Component.defaultContent['cta-2'],
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
