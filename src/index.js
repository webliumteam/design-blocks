import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg_header.jpeg',
  },
  logo: {
    text: {
      value: 'Company Name',
      tagName: 'h2',
    },
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
}

export default ExtendedWireframe
