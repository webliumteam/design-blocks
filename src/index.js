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
      cover: '25% 50%',
    },
    resourceRef: 'img-1-pizza.png',
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'QUANTUM COMPANY',
      },
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: 'WE IMPLEMENT INNOVATIVE PROJECTS',
        color: 'light-accent-color',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'QUANTUM COMPANY',
      },
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: 'WE IMPLEMENT INNOVATIVE PROJECTS',
        color: 'light-accent-color',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'QUANTUM COMPANY',
      },
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: 'WE IMPLEMENT INNOVATIVE PROJECTS',
        color: 'light-accent-color',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        size: 'lg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
