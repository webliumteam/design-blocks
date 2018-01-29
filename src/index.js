import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#ffffff',
  },
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'How to Hire Only Professional and Dedicated Employees? Useful Tips from Our HR Director.',
      description:
        'Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business. ',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'img-1.jpg',
        alt: 'Article illustration photo',
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
        textValue: 'Read more',
      },
    },
    {
      id: '41db0c4f-46b3-4835-8e77-062de63d018a',
      title: 'How to Achieve Higher Profits in Retail with Our New Product?',
      description:
        'Do you want to achieve higher profits this year? Our new product will help you get what you want. In this article, you will find out how to use it to get more benefits.',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'img-2.jpg',
        alt: 'Article illustration photo',
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
        textValue: 'Read more',
      },
    },
    {
      id: 'fff4b459-6e4f-4645-901e-4c1b1aa94e51',
      title: 'Top 5 Tips to Improve Your Engineering Department.',
      description:
        'You engineers can bring you better results! Get to know how to improve engineering department to make a new step for your company growth. ',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'img-3.jpg',
        alt: 'Article illustration photo',
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
        textValue: 'Read more',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: '- Blog -',
  subtitle: 'Subtitle here',
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
    textValue: 'All blog posts',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'post-publish-date',
    type: 'checkbox',
    label: 'Date of publishing',
    defaultValue: true,
  },
  {
    id: 'post-image',
    type: 'checkbox',
    label: 'Post image',
    defaultValue: true,
  },
  {
    id: 'post-description',
    type: 'checkbox',
    label: 'Post main text',
    defaultValue: true,
  },
  {
    id: 'post-link',
    type: 'checkbox',
    label: 'Post link',
    defaultValue: true,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Block button',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
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
