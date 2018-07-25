import $editor from 'weblium/editor'

import Component from 'wireframe-series-10-blog_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-10-blog_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  image: {
    ...Component.defaultContent.image,
    resourceRef: '1.jpg',
  },
  date: {
    ...Component.defaultContent.date,
    color: 'light-accent-color',
  },
  category: {
    ...Component.defaultContent.category,
    color: 'light-accent-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Blog title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Blog subtitle', type: 'hidden'},
  button_additional: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
