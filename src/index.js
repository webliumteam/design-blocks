import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-projects/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: {
    items: [
      {
        ...Component.defaultContent.projects[0],
        picture: {
          ...Component.defaultContent.projects[0].picture,
          resourceRef: 'project_1.png',
        },
        link: {
          ...Component.defaultContent.projects[0].link,
          type: 'link',
        },
        background: {
          type: 'color',
          color: 'dark-shade-color',
        },
      },
      {
        ...Component.defaultContent.projects[1],
        picture: {
          ...Component.defaultContent.projects[1].picture,
          resourceRef: 'project_2.png',
        },
        link: {
          ...Component.defaultContent.projects[1].link,
          type: 'link',
        },
        background: {
          type: 'color',
          color: 'light-shade-color',
        },
      },
    ],
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
