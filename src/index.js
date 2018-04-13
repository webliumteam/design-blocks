import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      ...Component.defaultContent.articles[0],
      icon: {
        ...Component.defaultContent.articles[0].icon,
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      icon: {
        ...Component.defaultContent.articles[1].icon,
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      icon: {
        ...Component.defaultContent.articles[2].icon,
        fill: 'brand-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  'button-primary': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
