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
        resourceRef: 'blog-pic-1.jpg',
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
        resourceRef: 'blog-pic-2.jpg',
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
        resourceRef: 'blog-pic-3.jpg',
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

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Block button', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-image': {defaultValue: true, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
