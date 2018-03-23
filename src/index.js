import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  // background: {
  //   type: 'color',
  //   color: '#d8d8d8',
  // },

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
      title: {
        content: 'Think In Motion',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We create. We Develop. We Inspire.',
        type: 'subtitle',
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
        textValue: 'Get in Touch',
        type: 'primary',
      },
      'cta-2': {
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
        textValue: 'Who We Are',
        type: 'secondary',
      },
    },
    {
      title: {
        content: 'Think In Motion',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We create. We Develop. We Inspire.',
        type: 'subtitle',
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
        textValue: 'Get in Touch',
        type: 'primary',
      },
      'cta-2': {
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
        textValue: 'Who We Are',
        type: 'secondary',
      },
    },
    {
      title: {
        content: 'Think In Motion',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We create. We Develop. We Inspire.',
        type: 'subtitle',
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
        textValue: 'Get in Touch',
        type: 'primary',
      },
      'cta-2': {
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
        textValue: 'Who We Are',
        type: 'secondary',
      },
    },
  ],
}


ExtendedWireframe.modifierScheme = {
  arrows: {defaultValue: false, label: 'Navigation arrows', type: 'checkbox'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox'},
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
