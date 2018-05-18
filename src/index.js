import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {type: 'color', color: 'dark-shade-color'},
  logo: {
    text: {
      value: 'forks',
      tagName: 'h2',
      fontSize: 30,
    },
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'primary',
    size: 'sm',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  border: {
    defaultValue: true,
    label: 'White border',
    type: 'checkbox',
    classNameOnActive: style['header--with-border'],
  },
}

export default ExtendedWireframe
