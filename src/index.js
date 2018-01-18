import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  title: 'Blog',
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'The two most important questions when scoping your MVP',
      description:
        'Imagine yourself 3 months from now. You’ve poured your life savings into bringing your app to life. It’s jam packed with all of these features that you just know your users are going to love. You’ve been working on traction while your team has been building the app so you get a steady stream of […]',
      category: 'Creative Process',
      date: 'November 22, 2017',
      picture: {
        src: 'img/blog-pic-1.jpg',
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
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'The two most important questions when scoping your MVP',
      description:
        'Imagine yourself 3 months from now. You’ve poured your life savings into bringing your app to life. It’s jam packed with all of these features that you just know your users are going to love. You’ve been working on traction while your team has been building the app so you get a steady stream of […]',
      category: 'Creative Process',
      date: 'November 22, 2017',
      picture: {
        src: 'img/blog-pic-2.jpg',
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
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'The two most important questions when scoping your MVP',
      description:
        'Imagine yourself 3 months from now. You’ve poured your life savings into bringing your app to life. It’s jam packed with all of these features that you just know your users are going to love. You’ve been working on traction while your team has been building the app so you get a steady stream of […]',
      category: 'Creative Process',
      date: 'November 22, 2017',
      picture: {
        src: 'img/blog-pic-3.jpg',
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
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
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
    defaultValue: false,
  },
]

export default ExtendedWireframe
