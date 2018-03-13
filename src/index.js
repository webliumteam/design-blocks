import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
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
    resourceRef: 'cover-bg.jpg',
    overlay: {
      type: 'gradient',
      gradient: {
        angle: 90,
        firstColor: 'var(--ui-dark-accent-color)',
        secondColor: 'var(--ui-light-accent-color)',
      },
      opacity: 0.76,
    },
  },
  'cta-1': {
    ...Component.defaultContent['cta-1'],
    type: 'primary',
  },
  'cta-2': {
    ...Component.defaultContent['cta-2'],
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
