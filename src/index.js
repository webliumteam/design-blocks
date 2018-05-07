import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: '1.jpg',
        size: {
          'min-width: 1200px': 768,
          'min-width: 992px': 768,
          'min-width: 768px': 768,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: '2.jpg',
        size: {
          'min-width: 1200px': 768,
          'min-width: 992px': 768,
          'min-width: 768px': 768,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: '3.jpg',
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
      ...Component.defaultContent.services[3],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: '4.jpg',
        size: {
          'min-width: 1200px': 768,
          'min-width: 992px': 768,
          'min-width: 768px': 768,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Primary button', type: 'hidden'},
  'button-secondary': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Service title', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
