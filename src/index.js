import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  cover: [
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'QUANTUM COMPANY',
        type: 'heroTitle',
      },
      cta: {
        ...Component.defaultContent.cover[0].title.cta,
        textValue: 'Learn more',
        type: 'secondary',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0].title['cta-2'],
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      title: {
        ...Component.defaultContent.cover[1].title,
        content: 'QUANTUM COMPANY',
        type: 'heroTitle',
      },
      cta: {
        ...Component.defaultContent.cover[0].title.cta,
        textValue: 'Learn more',
        type: 'secondary',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0].title['cta-2'],
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      title: {
        ...Component.defaultContent.cover[2].title,
        content: 'QUANTUM COMPANY',
        type: 'heroTitle',
      },
      cta: {
        ...Component.defaultContent.cover[0].title.cta,
        textValue: 'Learn more',
        type: 'secondary',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0].title['cta-2'],
        textValue: 'Request a quote',
        type: 'primary',
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
      opacity: 0.6,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'hidden'},
}

export default ExtendedWireframe
