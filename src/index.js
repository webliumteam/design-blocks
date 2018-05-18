import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-events/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-events/src/options.json'
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
    resourceRef: 'events-bg.jpg',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: 0.95,
    },
  },
  events: [
    {
      ...Component.defaultContent.events[0],
      picture: {
        ...Component.defaultContent.events[0].picture,
        resourceRef: 'event1.jpg',
      },
      cta: {
        ...Component.defaultContent.events[0].cta,
        textValue: 'Know more',
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.events[1],
      picture: {
        ...Component.defaultContent.events[1].picture,
        resourceRef: 'event2.jpg',
      },
      cta: {
        ...Component.defaultContent.events[1].cta,
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.events[2],
      picture: {
        ...Component.defaultContent.events[2].picture,
        resourceRef: 'event3.jpg',
      },
      cta: {
        ...Component.defaultContent.events[2].cta,
        type: 'link',
      },
    },
    {
      ...Component.defaultContent.events[3],
      picture: {
        ...Component.defaultContent.events[3].picture,
        resourceRef: 'event4.jpg',
      },
      cta: {
        ...Component.defaultContent.events[3].cta,
        type: 'link',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  badge: {defaultValue: true, label: "Event's type", type: 'checkbox'},
  link: {defaultValue: true, label: "Event's link", type: 'checkbox'},
  location: {defaultValue: true, label: "Event's location", type: 'checkbox'},
  subtitle: {defaultValue: true, label: "Event's description", type: 'checkbox'},
}

export default ExtendedWireframe
