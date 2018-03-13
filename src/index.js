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
        content: 'Improve Your Business Cards<br> And Enhance Your Sales',
        type: 'heading',
      },
      date: {
        content: 'October 14, 2017',
        type: 'text',
        color: 'var(--ui-brand-color)',
      },
      badge: {
        content: 'members only',
        type: 'caption',
        color: 'var(--ui-light-shade-color)',
      },
      time: {
        content: '10:30 am - 1:30 pm',
        type: 'text',
      },
      location: {
        content: 'Lectorium 2',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events1.png',
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
        content: 'Effective Advertising Pointers',
        type: 'heading',
      },
      date: {
        content: 'October 14, 2017',
        type: 'text',
        color: 'var(--ui-brand-color)',
      },
      badge: {
        content: 'members only',
        type: 'caption',
        color: 'var(--ui-light-shade-color)',
      },
      time: {
        content: '10:30 am - 1:30 pm',
        type: 'text',
      },
      location: {
        content: 'Lectorium 2',
        type: 'caption',
      },
      picture: {
        resourceRef: 'events2.png',
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
  ],
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'Case nulla deserunt ut eos. Magna persecuti ut vis, ex legimus civibus complectitur mea. Sumo vitae definitionem in nam.',
  },
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'All Events',
    size: 'lg',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M7.693 12.857l-.306 1.82a.665.665 0 0 0 .962.699l1.636-.854 1.636.854a.67.67 0 0 0 .698-.051.664.664 0 0 0 .264-.648l-.306-1.82 1.318-1.292a.665.665 0 0 0-.368-1.132l-1.826-.27-.822-1.653a.664.664 0 0 0-1.19 0l-.82 1.653-1.826.27a.663.663 0 0 0-.368 1.131l1.318 1.293z"/><path d="M17.83 2.123h-2.09V.963A.964.964 0 0 0 14.777 0h-.153a.963.963 0 0 0-.963.964v1.159H6.285V.963A.963.963 0 0 0 5.322 0h-.153a.963.963 0 0 0-.964.964v1.159H2.14c-1.093 0-1.983.89-1.983 1.983v13.881c0 1.093.89 1.983 1.983 1.983h15.692c1.093 0 1.983-.89 1.983-1.983V4.107c0-1.095-.89-1.984-1.983-1.984zm-.258 15.605H2.398V6.923h15.174v10.805z"/></svg>',
    fill: 'brand-color',
  },
  background: {
    type: 'color',
    color: '#fafbfc',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: "Event's description", type: 'checkbox'},
  link: {defaultValue: false, label: "Event's link", type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
