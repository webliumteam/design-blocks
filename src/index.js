import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 0%',
    },
    resourceRef: 'pic.png',
    overlay: {
      type: 'color',
      color: 'var(--ui-dark-shade-color)',
      opacity: 0.25,
    },
  },
  logo: {
    text: {
      value: 'NOVA.',
      tagName: 'h2',
      fontSize: 30,
      color: 'heading-color',
    },
  },
  menu: {
    links: [
      {
        id: 'about-us',
        metadata: {
          displayName: 'About us',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'services',
        metadata: {
          displayName: 'Services',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'projects',
        metadata: {
          displayName: 'Projects',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'testimonials',
        metadata: {
          displayName: 'Testimonials',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'careers',
        metadata: {
          displayName: 'Careers',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'team',
        metadata: {
          displayName: 'Team',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'development',
        metadata: {
          displayName: 'Development',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
      {
        id: 'contact-us',
        metadata: {
          displayName: 'Contact us',
          actionConfig: {
            action: 'page',
            target: '_self',
            actions: {
              page: '',
              link: '',
              block: '',
            },
          },
        },
      },
    ],
    linkColor: {
      hover: 'currentColor',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
