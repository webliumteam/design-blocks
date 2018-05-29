import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-projects/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg_projects.jpg',
  },
  projects: {
    background: {
      'nth-child': [
        ['n', {
          color: 'light-shade-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.projects[0],
        picture: {
          ...Component.defaultContent.projects[0].picture,
          resourceRef: 'project_1.jpg',
        },
        link: {
          ...Component.defaultContent.projects[0].link,
          iconEnabled: true,
          iconAlignment: 'right',
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#32bbcb" d="M6.7 12.6c.3-.3.3-.9 0-1.2L4.4 9.1c-.9-.9-2.4.5-1.4 1.4.3.3.2.5-.2.5H1c-.6 0-1 .4-1 1 0 .5.4 1 1 1h1.8c.4 0 .5.2.2.5-1 .9.5 2.4 1.4 1.4l2.3-2.3z"/></svg>',
          },
          iconClassName: 'link-decorator',
          type: 'link',
        },
        background: {
          color: 'light-shade-color',
          type: 'color',
        },
      },
      {
        ...Component.defaultContent.projects[1],
        picture: {
          ...Component.defaultContent.projects[1].picture,
          resourceRef: 'project_2.jpg',
        },
        link: {
          ...Component.defaultContent.projects[1].link,
          iconEnabled: true,
          iconAlignment: 'right',
          icon: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#32bbcb" d="M6.7 12.6c.3-.3.3-.9 0-1.2L4.4 9.1c-.9-.9-2.4.5-1.4 1.4.3.3.2.5-.2.5H1c-.6 0-1 .4-1 1 0 .5.4 1 1 1h1.8c.4 0 .5.2.2.5-1 .9.5 2.4 1.4 1.4l2.3-2.3z"/></svg>',
          },
          type: 'link',
        },
        background: {
          color: 'light-shade-color',
          type: 'color',
        },
      },
    ],
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.502 12.51l-.252-.024c-.457 0-.89.094-1.294.243L7.269 5.042c.15-.405.243-.838.243-1.295l-.025-.252A3.732 3.732 0 0 0 3.767.002c-.577 0-1.117.14-1.605.374L4.65 2.864c.13.131.22.286.28.45.164.442.076.958-.28 1.316a1.245 1.245 0 0 1-.883.365c-.147 0-.293-.032-.433-.085a1.242 1.242 0 0 1-.45-.282L.396 2.141a3.706 3.706 0 0 0-.374 1.606c0 1.982 1.544 3.588 3.493 3.72l.252.025c.457 0 .89-.093 1.295-.242l7.685 7.687c-.147.404-.24.837-.24 1.294l.025.252a3.73 3.73 0 0 0 3.72 3.494c.576 0 1.118-.139 1.605-.375l-2.488-2.488a1.275 1.275 0 0 1-.283-.448 1.245 1.245 0 0 1 1.166-1.683c.147 0 .292.031.434.085.164.061.32.148.448.28l2.488 2.489c.235-.49.375-1.029.375-1.606a3.736 3.736 0 0 0-3.495-3.72z"/><path d="M15.916 5.404l2.678-1.385 1.402-2.71L18.689.002l-2.71 1.403-1.387 2.675-3.257 3.261 1.321 1.323zM.549 16.8a1.872 1.872 0 1 0 2.649 2.647l6.148-6.15-2.649-2.646L.55 16.799z"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Block button', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
