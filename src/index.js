import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-events/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'events-bg.jpg',
  },
  events: [
    {
      title: 'Digital marketing workshop',
      date: 'October 10, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'North America',
      picture: {
        resourceRef: 'event1.jpg',
        alt: 'Digital marketing workshop illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Know more',
        type: 'link',
      },
      id: 'b1de1229-0f5f-4da8-8e5f-1d875b2bdd5e',
    },
    {
      title: 'Blogging for beginners',
      date: 'October 14, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'North America',
      picture: {
        resourceRef: 'event2.jpg',
        alt: 'Blogging for beginners illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Know more',
        type: 'link',
      },
      id: 'bc24235c-0e77-42d8-8e8e-358d683da4f5',
    },
    {
      title: 'How to find insight',
      date: 'October 18, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'North America',
      picture: {
        resourceRef: 'event3.jpg',
        alt: 'How to find insight illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Know more',
        type: 'link',
      },
      id: '2a463f21-a68f-4a30-a7a7-dfbdece81edc',
    },
    {
      title: 'UX workshop',
      date: 'October 20, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'North America',
      picture: {
        resourceRef: 'event4.jpg',
        alt: 'UX workshop illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Know more',
        type: 'link',
      },
      id: 'c4480dcf-6fbd-42b0-b457-ca6a0f187b02',
    },
  ],
  title: 'Events',
  subtitle:
    'We regularly host different kinds of events to satisfy the needs of all our clients. Follow the updates and workshops rom our professionals.',
  cta: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Learn more',
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
