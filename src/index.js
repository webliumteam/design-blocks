import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about_old/src/component'

import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'about_img.png',
    sizes: {
      'min-width: 320px': 480,
      'min-width: 480px': 768,
      'min-width: 768px': 744,
      'min-width: 992px': 900,
      'min-width: 1200px': 1200,
    },
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
}


export default ExtendedWireframe
