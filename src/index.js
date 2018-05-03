import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {
  enhancers: {
    withProps,
  },
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '100% 20%',
    },
    resourceRef: 'coverpic.jpg',
  },
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
  subtitle: {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  'primary-button': {
    id: 'primary-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
  arrows: {
    id: 'arrows',
    type: 'checkbox',
    label: 'Navigation arrows',
    defaultValue: true,
  },
  dots: {
    id: 'dots',
    type: 'checkbox',
    label: 'Navigation indicators',
    defaultValue: true,
  },
}

export default ExtendedWireframe
