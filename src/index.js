import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  team: [
    {
      name: {
        content: 'Andrew Shimmer',
        type: 'heading',
      },
      position: {
        content: 'CEO',
        type: 'caption',
      },
      description: {
        content: 'Andrew Shimmer has a 15-year experience in IT development and marketing. He has successfully run companies specializing in innovative technologies.',
        type: 'text',
      },
      picture: {
        src: 'pic1.png',
        alt: 'Andrew Shimmer photo',
      },
      more: {
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
      email: {
        content: '<a href="mailto:shimmer@gmail.com">shimmer@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 0,
          color: '#595959',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Ann Maisner',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director',
        type: 'caption',
      },
      description: {
        content: 'Ann is a high-skilled professional with over 10 years of experience in marketing. She has been rewarded by the Association of Marketing as one of the most successful directors. ',
        type: 'text',
      },
      picture: {
        src: 'pic2.png',
        alt: 'Ann Maisner photo',
      },
      more: {
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
      email: {
        content: '<a href="mailto:maisner@gmail.com">maisner@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 0,
          color: '#595959',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Tomas Abbar',
        type: 'heading',
      },
      position: {
        content: 'Product Manager',
        type: 'caption',
      },
      description: {
        content: 'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
        type: 'text',
      },
      picture: {
        src: 'pic3.png',
        alt: 'Tomas Abbar photo',
      },
      more: {
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
      email: {
        content: '<a href="mailto:abbar@gmail.com">abbar@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
        ],
        target: '_blank',
        design: {
          border: null,
          innerFill: true,
          preset: 'preset001',
          offset: 0,
          color: '#595959',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
  ],
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
    textValue: 'All Team Members',
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'member-desc': {defaultValue: true, label: 'Team member bio', type: 'checkbox'},
  'member-email': {defaultValue: true, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: true, label: 'Team member link', type: 'checkbox'},
  'member-social': {defaultValue: true, label: 'Team social buttons', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Team description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
