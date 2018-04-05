import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Service 1',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'text',
      },
      picture: {
        src: 'jamie-street-94242-unsplash.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Service 2',
        type: 'heading',
      },
      description: {
        content: 'Developing marketing and business strategy to help company grow fast.',
        type: 'text',
      },
      picture: {
        src: 'sora-sagano-582926-unsplash.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Service 3',
        type: 'heading',
      },
      description: {
        content: 'Building brand awareness for micro and small businesses to increase potential reach.',
        type: 'text',
      },
      picture: {
        src: 'marc-fulgar-59958-unsplash.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Service 4',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
      picture: {
        src: 'maarten-deckers-295105-unsplash.jpg',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true},
}

export default ExtendedWireframe
