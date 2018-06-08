import $editor from 'weblium/editor'

import Component from 'wireframe-series-6-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-6-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  author_picture: {
    resourceRef: 'photo.jpg',
  },
  article_date: {
    type: 'caption',
    content: 'Jun 7',
    color: 'brand-color',
  },
  article_time: {
    type: 'caption',
    content: '7 min read',
    color: 'brand-color',
  },
  picture: {
    resourceRef: '1.jpg',
    alt: 'Picture about the post',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
}

export default ExtendedWireframe
