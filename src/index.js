import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
}

export default ExtendedWireframe
