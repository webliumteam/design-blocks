import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#dddfe8',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'plane1.png',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: false, label: 'Company main text', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
}

export default ExtendedWireframe
