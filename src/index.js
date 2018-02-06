import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: '- Our Values -',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'center',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  heading: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
