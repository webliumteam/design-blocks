import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-header/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-header/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    image: {
      resourceRef: 'Logo.png',
      alt: 'Header logo',
      width: 171,
      height: 44,
    },
  },
  slogan: {
    content: '69 Halsey St, New York, NY 10002',
    type: 'text',
  },
  menu: [
    {
      id: 'home',
      metadata: {
        displayName: 'Home',
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
      id: 'gallery',
      metadata: {
        displayName: 'Gallery',
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
      id: 'blog',
      metadata: {
        displayName: 'Blog',
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
  email: {
    content: 'Week Days: 8:00 am - 7:30 pm',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
