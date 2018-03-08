import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        resourceRef: 'depositphotos-146804477-original.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        resourceRef: 'depositphotos-150504326-original.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        resourceRef: 'depositphotos-159638720-original.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[3],
      picture: {
        resourceRef: 'depositphotos-169507418-original.png',
        alt: 'Service illustration photo',
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
