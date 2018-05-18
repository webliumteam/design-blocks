import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-lucario-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'slide.jpg',
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: '<span style="font-weight: bold;">WE IMPLEMENT INNOVATIVE PROJECTS</span>',
      },
      cta: {
        ...Component.defaultContent.cover[0].cta,
        type: 'secondary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[0]['cta-2'],
        type: 'primary-alt',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      subtitle: {
        ...Component.defaultContent.cover[1].subtitle,
        content: '<span style="font-weight: bold;">WE IMPLEMENT INNOVATIVE PROJECTS</span>',
      },
      cta: {
        ...Component.defaultContent.cover[1].cta,
        type: 'secondary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[1]['cta-2'],
        type: 'primary-alt',
        size: 'lg',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      subtitle: {
        ...Component.defaultContent.cover[2].subtitle,
        content: '<span style="font-weight: bold;">WE IMPLEMENT INNOVATIVE PROJECTS</span>',
      },
      cta: {
        ...Component.defaultContent.cover[2].cta,
        type: 'secondary',
        size: 'lg',
      },
      'cta-2': {
        ...Component.defaultContent.cover[2]['cta-2'],
        type: 'primary-alt',
        size: 'lg',
      },
    },
  ],
}


ExtendedWireframe.modifierScheme = {
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'hidden'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'hidden'},
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
