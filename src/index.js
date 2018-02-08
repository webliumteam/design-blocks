import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-quote/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',

    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'quote_bg.jpg',
  },
  blockquote:
    'We must let go of the life we have planned, so as to accept the one that is waiting for us.',
  author: 'Joseph Campbell',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  author: {
    id: 'author',
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
}

export default ExtendedWireframe
