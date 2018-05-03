import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
  },
  theme: 'dark',
  cover: [
    {
      ...Component.defaultContent.cover[0],
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      cta: {
        ...Component.defaultContent.cover[1].cta,
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      cta: {
        ...Component.defaultContent.cover[2].cta,
        size: 'lg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'hidden'},
}

export default ExtendedWireframe
