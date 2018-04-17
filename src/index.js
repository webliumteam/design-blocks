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
        ...Component.defaultContent.services[0].picture,
        resourceRef: 'img_1.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: 'img_2.jpg',
      },
    },
    {
      ...Component.defaultContent.services[2],
      picture: {
        ...Component.defaultContent.services[2].picture,
        resourceRef: 'img_3.jpg',
      },
    },
    {
      ...Component.defaultContent.services[3],
      picture: {
        ...Component.defaultContent.services[3].picture,
        resourceRef: 'img_4.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Service description', type: 'checkbox'},
}

export default ExtendedWireframe
