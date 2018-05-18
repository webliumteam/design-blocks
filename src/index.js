import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'service-bg.jpg',
  },
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: 'pic1.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: 'pic2.jpg',
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        ...Component.defaultContent.services[2].picture,
        resourceRef: 'pic3.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Services description', type: 'hidden'},
}

export default ExtendedWireframe
