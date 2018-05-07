import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: 'services-img1.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: 'services-img2.jpg',
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        ...Component.defaultContent.services[2].picture,
        resourceRef: 'services-img3.jpg',
      },
    },
    {
      ...Component.defaultContent.services[3],
      picture: {
        ...Component.defaultContent.services[3].picture,
        resourceRef: 'services-img4.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  link: {defaultValue: false, label: 'Link', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'hidden'},
}

export default ExtendedWireframe
