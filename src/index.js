import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-header/src/component'
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
      cover: '50% 0%',
    },
    resourceRef: 'pic.png',
    overlay: {
      type: 'color',
      color: 'var(--ui-dark-shade-color)',
      opacity: 0.25,
    },
  },
  logo: {
    text: {
      value: 'NOVA.',
      tagName: 'h2',
      fontSize: 30,
    },
  },
  slogan: {
    content: 'We work for your happiness',
    type: 'text',
  },
  email: {
    content: '<a href="mailto:nova@a.weblium.com">nova@a.weblium.com</a>',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
