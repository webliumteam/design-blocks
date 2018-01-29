import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  services: [
    {
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: 'Service 1',
      description:
        'Multipurpose assistance for online stores and offline retail businesses.',
      picture: {
        resourceRef: 'depositphotos-146804477-original.png',
        alt: 'Service illustration photo',
      },
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: 'Service 2',
      description:
        'Developing marketing and business strategy to help company grow fast.',
      picture: {
        resourceRef: 'depositphotos-150504326-original.png',
        alt: 'Service illustration photo',
      },
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: 'Service 3',
      description:
        'Building brand awareness for micro and small businesses. ',
      picture: {
        resourceRef: 'depositphotos-159638720-original.png',
        alt: 'Service illustration photo',
      },
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Service 4',
      description:
        'Aftersales support in marketing, sales, and staff training.',
      picture: {
        resourceRef: 'depositphotos-169507418-original.png',
        alt: 'Service illustration photo',
      },
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
        textValue: 'Learn more',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: 'Services We Provide',
  description:
    'We deliver all kind of services that support small and micro businesses. Here are some of them:',
  'button-1': {
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
    textValue: 'Book a service',
  },
  'button-2': {
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
    textValue: 'All services',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Services description',
    defaultValue: false,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Service title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Service main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'hidden',
    label: 'Link',
    defaultValue: false,
  },
  {
    id: 'button-primary',
    type: 'checkbox',
    label: 'Primary button',
    defaultValue: false,
  },
  {
    id: 'button-secondary',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default ExtendedWireframe
