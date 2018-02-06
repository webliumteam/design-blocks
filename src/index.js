import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  projects: [
    {
      id: 'e9ec34d7-3cc6-49f3-a9ad-6ea69f59409c',
      title: 'Project 1',
      subtitle: 'UX DESIGN',
      text:
        'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
      picture: {
        src: 'project_1.png',
        alt: 'Project 1',
      },
      link: {
        type: 'link',
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
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'Project 2',
      subtitle: 'BRANDING',
      text:
        'Branding of legal firm. Our work on this project included creating a logo, motto, website, advertising strategy, and other details that help to build a well-known brand.',
      picture: {
        src: 'project_2.png',
        alt: 'Project 2',
      },
      link: {
        type: 'link',
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
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: 'Our Projects',
  subtitle:
    'Each month, we usefully close our projects. Here is the list of our recent ones:',
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
    textValue: 'All projects',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Block button', type: 'hidden'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: false, label: 'Project category', type: 'hidden'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
