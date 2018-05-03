import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-projects/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: [
    {
      ...Component.defaultContent.projects[0],
      title: {
        ...Component.defaultContent.projects[0].title,
        type: 'heroTitle',
      },
      picture: {
        ...Component.defaultContent.projects[0].picture,
        resourceRef: 'bg-1.png',
        size: {
          'min-width: 1200px': 1920,
          'min-width: 992px': 1200,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
      },
    },
    {
      ...Component.defaultContent.projects[1],
      title: {
        ...Component.defaultContent.projects[1].title,
        type: 'heroTitle',
      },
      picture: {
        ...Component.defaultContent.projects[1].picture,
        resourceRef: 'bg-2.png',
        size: {
          'min-width: 1200px': 1920,
          'min-width: 992px': 1200,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Block button', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Project button', type: 'checkbox'},
  'project-category': {defaultValue: false, label: 'Project category', type: 'hidden'},
  'project-description': {defaultValue: true, label: 'Project description', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'hidden'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
