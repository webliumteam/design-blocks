import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-events/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  events: [
    {
      ...Component.defaultContent.events[0],
      picture: {
        ...Component.defaultContent.events[0].picture,
        resourceRef: 'events-img-1.jpg',
      },
    },
    {
      ...Component.defaultContent.events[1],
      picture: {
        ...Component.defaultContent.events[1].picture,
        resourceRef: 'events-img-2.jpg',
      },
    },
    {
      ...Component.defaultContent.events[2],
      picture: {
        ...Component.defaultContent.events[2].picture,
        resourceRef: 'events-img-3.jpg',
      },
    },
    {
      ...Component.defaultContent.events[3],
      picture: {
        ...Component.defaultContent.events[3].picture,
        resourceRef: 'events-img-4.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: "Event's description", type: 'checkbox'},
}

export default ExtendedWireframe
