import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
  blog: [
    {
      ...Component.defaultContent.blog[0],
      title: {
        ...Component.defaultContent.blog[0].title,
        content: 'HOW TO HIRE EMPLOYEES?',
      },
      category: {
        ...Component.defaultContent.blog[0].category,
        content: 'CREATIVE PROCESS',
      },
      date: {
        ...Component.defaultContent.blog[0].date,
        content: 'SEPTEMBER 22, 2017',
      },
      picture: {
        ...Component.defaultContent.blog[0].picture,
        resourceRef: 'img-1.jpg',
      },
    },
    {
      ...Component.defaultContent.blog[1],
      title: {
        ...Component.defaultContent.blog[1].title,
        content: 'HOW TO ACHIEVE HIGHER PROFITS IN RETAIL WITH OUR NEW PRODUCT?',
      },
      category: {
        ...Component.defaultContent.blog[1].category,
        content: 'CREATIVE PROCESS',
      },
      date: {
        ...Component.defaultContent.blog[1].date,
        content: 'SEPTEMBER 22, 2017',
      },
      picture: {
        ...Component.defaultContent.blog[1].picture,
        resourceRef: 'img-2.jpg',
      },
    },
    {
      ...Component.defaultContent.blog[2],
      title: {
        ...Component.defaultContent.blog[2].title,
        content: 'TOP 5 TIPS TO IMPROVE YOUR ENGINEERING DEPARTMENT.',
      },
      category: {
        ...Component.defaultContent.blog[2].category,
        content: 'CREATIVE PROCESS',
      },
      date: {
        ...Component.defaultContent.blog[2].date,
        content: 'SEPTEMBER 22, 2017',
      },
      picture: {
        ...Component.defaultContent.blog[2].picture,
        resourceRef: 'img-3.jpg',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: '- BLOG -',
  },
  subtitle: {
    content: 'I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
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
    textValue: 'Learn more',
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Block button', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-image': {defaultValue: true, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
