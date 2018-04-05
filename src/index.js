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
      title: {
        content: 'Digital marketing workshop',
        type: 'heading',
      },
      date: {
        content: 'October 24, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events-img-1.jpg',
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
    },
    {
      title: {
        content: 'Blogging for beginners',
        type: 'heading',
      },
      date: {
        content: 'November 1, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events-img-2.jpg',
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
    },
    {
      title: {
        content: 'How to find insight',
        type: 'heading',
      },
      date: {
        content: 'November 25, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events-img-3.jpg',
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
    },
    {
      title: {
        content: 'UX workshop',
        type: 'heading',
      },
      date: {
        content: 'December 3, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events-img-4.jpg',
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
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: "Event's description", type: 'checkbox'},
}

export default ExtendedWireframe
