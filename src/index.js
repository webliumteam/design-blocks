import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  cover: [
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'QUANTUM COMPANY',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        textValue: 'Request a quote',
        type: 'secondary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0]['cta-2'],
        textValue: 'Learn more',
        type: 'primary',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      title: {
        ...Component.defaultContent.cover[1].title,
        content: 'QUANTUM COMPANY',
      },
      cta: {
        ...Component.defaultContent.cover[1].cta,
        textValue: 'Request a quote',
        type: 'secondary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[1]['cta-2'],
        textValue: 'Learn more',
        type: 'primary',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      title: {
        ...Component.defaultContent.cover[2].title,
        content: 'QUANTUM COMPANY',
      },
      cta: {
        ...Component.defaultContent.cover[2].cta,
        textValue: 'Request a quote',
        type: 'secondary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[2]['cta-2'],
        textValue: 'Learn more',
        type: 'primary',
        size: 'lg',
      },
    },
  ],
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'cover.jpg',
    overlay: {
      type: 'color',
      color: '#072747',
      opacity: 0.4,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
