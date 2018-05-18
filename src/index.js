import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-careers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'bg.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Careers main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Careers icon', type: 'checkbox'},
  image: {defaultValue: true, label: 'Сareers photo', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
