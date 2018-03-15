import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: [
    {
      name: {
        content: 'Dave Reez',
        type: 'heading',
      },
      position: {
        content: 'President',
        type: 'caption',
      },
      description: {
        content: 'Dave is a business owner and a second generation electrician. He has over 20 years of experience in the electrical industry. He strives to provide the excellent customer service where the quality comes first.',
        type: 'text',
      },
      picture: {
        src: 'image1.jpg',
        alt: 'Dave Reez photo',
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
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'John Davidson',
        type: 'heading',
      },
      position: {
        content: 'Master Electrician',
        type: 'caption',
      },
      description: {
        content: 'John is committed to delivering excellence in everything he does. He is highly trained, very knowledgeable, and experienced. John is focused on the complete customer satisfaction with the job. ',
        type: 'text',
      },
      picture: {
        src: 'image2.jpg',
        alt: 'John Davidson photo',
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
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Anthony Taylor',
        type: 'heading',
      },
      position: {
        content: 'Founder',
        type: 'caption',
      },
      description: {
        content: 'Anthony has over 28 years of experience in the electrical contracting industry. His knowledge in various aspects of the industry places him at the forefront to deliver the experience and high quality of end product.',
        type: 'text',
      },
      picture: {
        src: 'image3.jpg',
        alt: 'Anthony Taylor photo',
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
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
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
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
  ],
  title: {
    content: 'Our team',
    type: 'blockTitle',
  },
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'checkbox'},
  'member-social': {defaultValue: false, label: 'Team social buttons', type: 'checkbox'},
}

export default ExtendedWireframe
