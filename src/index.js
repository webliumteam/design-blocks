import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  projects: [
    {
      title: {
        content: 'Project 1',
        type: 'heading',
      },
      subtitle: {
        content: 'UX design',
        type: 'caption',
      },
      text: {
        content: 'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        type: 'text',
      },
      picture: {
        resourceRef: 'nicolas-ukrman-592561-unsplash.jpg',
        alt: 'Project 1',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
      },
      link: {
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
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: {
        content: 'Project 2',
        type: 'heading',
      },
      subtitle: {
        content: 'Branding',
        type: 'caption',
      },
      text: {
        content: 'Branding of legal firm. Our work on this project included creating a logo, motto, website, advertising strategy, and other details that help to build a well-known brand.',
        type: 'text',
      },
      picture: {
        resourceRef: 'noe-araujo-721-unsplash.jpg',
        alt: 'Project 2',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
      },
      link: {
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
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Our Projects',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Each month, we usefully close our projects. Here is the list of our recent ones:',
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
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
