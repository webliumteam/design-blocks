import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    text: {
      ...Component.defaultContent.logo.text.value,
      tagName: 'h2',
      fontSize: 26,
    },
  },
  cta: {
    ...Component.defaultContent.cta,
    size: 'md',
  },
}

export default ExtendedWireframe
