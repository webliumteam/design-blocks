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
    resourceRef: 'bg.jpg',
    overlay: {
      type: 'color',
      color: 'brand-color',
      opacity: 0.2,
    },
  },
  blockquote: {
    content: 'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.',
    type: 'quote',
  },
  author: {
    content: 'Ray Goforth',
    type: 'text',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  author: {
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
  picture: {
    type: 'hidden',
    label: 'Picture',
    defaultValue: false,
  },
}

export default ExtendedWireframe
