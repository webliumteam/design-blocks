import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-text/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

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
    style: 'buttons',
  },
  heading: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
