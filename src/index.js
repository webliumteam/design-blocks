import $editor from 'weblium/editor'

import Component from 'wireframe-series-10-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-10-blog/src/options.json'
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
}

export default ExtendedWireframe
