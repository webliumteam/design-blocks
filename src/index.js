import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import options from './options.json'

const {
  enhancers: {
    withProps,
  },
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

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
      title: 'Type Something',
      subtitle: 'Type Something',
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'MAIN BUTTON (L)',
        type: 'primary',
      },
      id: 'c4e3de5f-776a-405b-a034-dc2307069714',
    },
    {
      title: 'Type Something',
      subtitle: 'Type Something',
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'MAIN BUTTON (L)',
        type: 'primary',
      },
      id: '73263c9a-8d0e-41dc-85e1-66c6db9ea9d3',
    },
    {
      title: 'Type Something',
      subtitle: 'Type Something',
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'MAIN BUTTON (L)',
        type: 'primary',
      },
      id: 'b5f64fb3-d94e-4ecf-b7ff-a4a5700a2457',
    },
  ],
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  {
    id: 'primary-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
  {
    id: 'arrows',
    type: 'checkbox',
    label: 'Navigation arrows',
    defaultValue: true,
  },
  {
    id: 'dots',
    type: 'checkbox',
    label: 'Navigation indicators',
    defaultValue: true,
  },
]

export default ExtendedWireframe
