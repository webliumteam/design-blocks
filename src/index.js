import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-projects_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: [
    {
      ...Component.defaultContent.projects[0],
      picture: {
        ...Component.defaultContent.projects[0].picture,
        resourceRef: 'nicolas-ukrman-592561-unsplash.jpg',
        size: {
          'min-width: 992px': 1200,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
    },
    {
      ...Component.defaultContent.projects[1],
      picture: {
        ...Component.defaultContent.projects[1].picture,
        resourceRef: 'noe-araujo-721-unsplash.jpg',
        size: {
          'min-width: 992px': 1200,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  'project-button-2': {defaultValue: false, label: 'Project button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
