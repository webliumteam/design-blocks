import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-process/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  steps: {
    background: {
      'nth-child': [
        ['4n+1', {
          color: 'dark-accent-color?lighten=7.84&spin=19',
          type: 'color',
        }],
        ['4n+2', {
          color: 'dark-accent-color?spin=16',
          type: 'color',
        }],
        ['4n+3', {
          color: 'dark-accent-color?spin=8',
          type: 'color',
        }],
        ['4n+4', {
          color: 'dark-accent-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        title: {
          content: 'Schedule an</br>appointment',
          type: 'heading',
          color: 'light-shade-color',
        },
        description: {
          content: 'Choose the date and time that suits you.',
          type: 'text',
          color: 'light-shade-color',
        },
      },
      {
        title: {
          content: 'Request your</br>service',
          type: 'heading',
          color: 'light-shade-color',
        },
        description: {
          content: 'Specify the service you need for your project.',
          type: 'text',
          color: 'light-shade-color',
        },
      },
      {
        title: {
          content: 'Choose an</br>electrician',
          type: 'heading',
          color: 'light-shade-color',
        },
        description: {
          content: 'Select a highly trained & registered electrician.',
          type: 'text',
          color: 'light-shade-color',
        },
      },
      {
        title: {
          content: 'Request a free</br>estimate',
          type: 'heading',
          color: 'light-shade-color',
        },
        description: {
          content: 'We offer free estimates on any service.',
          type: 'text',
          color: 'light-shade-color',
        },
      },
    ],
  },
  title: {
    content: 'How to get started',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
    type: 'subtitle',
  },
  'cta-1': {
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
    textValue: 'make an order',
    type: 'secondary',
  },
  'cta-2': {
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
    type: 'link',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}


ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Process description', type: 'hidden'},
}


export default ExtendedWireframe
