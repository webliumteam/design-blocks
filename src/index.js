import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  articles: [
    {
      title: {
        content: 'R&D Leader in Tech (2017)',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 11"><path d="M11.7 11h-10C.8 11 0 10.2 0 9.3V1.8C0 .8.8 0 1.8 0h10c1 0 1.8.8 1.8 1.8v7.5c-.1.9-.9 1.7-1.9 1.7zM1.8 1c-.5 0-.8.3-.8.8v7.5c0 .4.3.7.8.7h10c.4 0 .8-.3.8-.8V1.8c0-.4-.3-.8-.8-.8h-10z"/><path d="M7.8 9c-2 0-3.5-1.6-3.5-3.5 0-2 1.5-3.5 3.5-3.5 1.9 0 3.5 1.6 3.5 3.5S9.7 9 7.8 9zm0-6C6.4 3 5.3 4.1 5.3 5.5S6.4 8 7.8 8s2.5-1.1 2.5-2.5S9.2 3 7.8 3zm-4.9.5h-.5c-.3 0-.5-.2-.5-.5v-.5c0-.3.2-.5.5-.5h.5c.3 0 .5.2.5.5V3c0 .3-.3.5-.5.5z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        content: 'Most Innovative B2B Solutions (2016)',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.4 79.1"><path d="M56.6 65.4l-8.5-16.2C53.6 44 57 36.7 57 28.5 57 12.8 44.2 0 28.5 0S0 12.8 0 28.5c0 8.7 4 16.6 10.2 21.8L2.3 65.4c-.8 1.6-.9 2.9-.3 4 .6.9 1.7 1.5 3 1.5h.6L14 69l3 7.3c.9 2.3 2.3 2.8 3.2 2.8 1.8 0 2.9-1.7 3.4-2.5v-.1l6-11.4 6 11.4v.1c.4.8 1.5 2.5 3.3 2.5.9 0 2.3-.5 3.2-2.8l3-7.3 8.4 1.9h.6c1.3 0 2.4-.5 3-1.5.5-1.1.4-2.4-.5-4zM3.8 28.5c0-13.7 11.1-24.8 24.8-24.8s24.8 11.1 24.8 24.8c0 7.5-3.4 14.3-8.7 18.9-3.4 2.9-7.4 4.8-11.7 5.6h-.5c-.7.1-1.4.2-2 .3-.6 0-1.2.1-1.9.1-.4 0-.9 0-1.3-.1-.2 0-.5 0-.7-.1h-.2c-.6-.1-1.2-.1-1.7-.2h-.2c-.6-.1-1.1-.2-1.7-.3h-.2c-.6-.2-1.2-.3-1.8-.5h-.1c-2.5-.8-4.8-2.1-7-3.7 0 0-.1 0-.1-.1-6-4.6-9.8-11.8-9.8-19.9zM29.5 57zm-9.2 17.6l-3.5-8.5c-.3-.7-1-1.1-1.7-1.1h-.4l-9 2 7.6-14.4c2.2 1.4 4.6 2.5 7.2 3.3.1 0 .2.1.3.1.5.1 1 .3 1.5.4.1 0 .2.1.3.1l1.8.3c.1 0 .3 0 .4.1.1 0 .3 0 .4.1l2.2 4.2-7.1 13.4zm24-9.6c-.9-.2-1.8.3-2.1 1.1l-3.5 8.5L31.6 61l2.3-4.5c4.1-.8 8-2.5 11.3-4.9l8 15.4-8.9-2zM28.6 42.9c7.9 0 14.3-6.4 14.3-14.3s-6.4-14.3-14.3-14.3-14.3 6.4-14.3 14.3c-.1 7.8 6.4 14.3 14.3 14.3zm0-25c5.9 0 10.6 4.8 10.6 10.6 0 5.9-4.8 10.6-10.6 10.6-5.9 0-10.6-4.8-10.6-10.6-.1-5.8 4.7-10.6 10.6-10.6z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 15.4"><path d="M18.3 15.4c.8 0 1.4-.6 1.4-1.4V3.1c0-.8-.6-1.4-1.4-1.4H1.4C.6 1.7 0 2.3 0 3.1v10.8c0 .8.6 1.4 1.4 1.4h16.9zm.3-1.5c0 .1-.1.3-.3.3H1.4c-.2 0-.3-.1-.3-.3V3.1c0-.2.1-.3.3-.3h16.9c.1 0 .3.1.3.3v10.8z"/><path d="M13.1 4.7c-2 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7 3.7-1.7 3.7-3.7-1.7-3.7-3.7-3.7zm0 6.2c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.2 2.5-2.5 2.5zM2.1 0c-.3 0-.5.3-.5.6s.3.6.6.6h3.1c.3 0 .6-.3.6-.6S5.5 0 5.2 0H2.1z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.6 60.3"><path d="M19.3 42.5l1.8-.8-8.3 17.7c-.3.5-.8.9-1.4.9h-.3c-.7-.1-1.2-.7-1.2-1.4l-.4-9.1-7.2 5.4c-.6.4-1.3.4-1.8 0s-.7-1.2-.4-1.8L7.8 37l.8 1.6c.3.6.7 1 1.2 1.3l-4.4 9.2 4.7-3.5c.3-.2.6-.3.9-.3.2 0 .4 0 .6.1.5.2.8.7.9 1.3l.3 5.8 4.6-9.9c.2 0 .4.1.6.1.4.1.8 0 1.3-.2zm23.1 10.8l-7.7-16.4-.8 1.6c-.3.5-.7 1-1.2 1.3l4.4 9.2-4.7-3.5c-.4-.3-1-.4-1.5-.2s-.8.7-.9 1.3l-.3 5.8-4.6-9.9c-.2 0-.4.1-.6.1-.5 0-1-.1-1.4-.3l-1.8-.8 8.3 17.7c.3.5.8.9 1.4.9h.3c.7-.1 1.2-.7 1.2-1.4l.4-9.1 7.2 5.5c.6.4 1.3.4 1.8 0 .6-.4.8-1.2.5-1.8zM23.9 40.6l-2.7-1.2-2.7 1.2c-.2.1-.4.1-.6.1-.4 0-.8-.1-1-.4l-2.1-2-3 .2c-.6 0-1.2-.3-1.4-.8L9.1 35l-2.9-.8c-.6-.2-1-.7-1.1-1.3L4.8 30l-2.4-1.8c-.5-.4-.7-1-.6-1.6l.7-2.9-1.6-2.5c-.3-.5-.3-1.2 0-1.7L2.5 17l-.7-2.9c-.1-.6.1-1.2.6-1.6l2.4-1.8.3-2.9c.1-.6.5-1.1 1.1-1.3L9 5.7 10.3 3c.3-.5.8-.9 1.4-.8l3 .2 2.1-2c.4-.4 1.1-.5 1.6-.3l2.7 1.2L23.8.1c.6-.2 1.2-.1 1.6.3l2.1 2 3-.2c.6 0 1.2.3 1.4.8l1.3 2.7 2.8.8c.6.2 1 .7 1.1 1.3l.3 2.9 2.4 1.8c.5.4.7 1 .6 1.6l-.5 3.1 1.6 2.5c.3.5.3 1.2 0 1.7l-1.6 2.5.7 2.9c.1.6-.1 1.2-.6 1.6l-2.4 1.8-.3 2.9c-.1.4-.5.9-1.1 1.1l-2.8.8-1.3 2.7c-.3.5-.8.9-1.4.8l-3-.2-2.1 2c-.5.5-1.1.6-1.7.3zm-2.1-4.2l2.4 1.1 1.9-1.8c.3-.3.7-.4 1.1-.4l2.6.2 1.2-2.3c.2-.4.5-.7.9-.8l2.5-.7.3-2.6c0-.4.3-.8.6-1l2.1-1.5-.6-2.5c-.1-.4 0-.8.2-1.2l1.4-2.2-1.4-2.2c-.2-.3-.3-.8-.2-1.2l.6-2.5-2.1-1.5c-.3-.2-.6-.6-.6-1l-.3-2.6-2.5-.7c-.4-.1-.7-.4-.9-.8l-1.2-2.3-2.6-.2c-.4 0-.8-.1-1.1-.4l-1.9-1.8-2.4 1.1c-.4.2-.8.2-1.2 0l-2.4-1.1-1.9 1.8c-.3.3-.7.4-1.1.4l-2.6-.2-1.2 2.3c-.2.4-.5.7-.9.8L8 9.3l-.3 2.6c0 .4-.3.8-.6 1L5 14.4l.6 2.5c.1.4 0 .8-.2 1.2L4 20.3l1.4 2.2c.2.3.3.8.2 1.2L5 26.2l2.1 1.5c.3.2.6.6.6 1l.3 2.6 2.5.7c.4.1.7.4.9.8l1.2 2.3 2.6-.2h.1c.4 0 .8.1 1 .4l1.9 1.8 2.4-1.1c.4.3.8.3 1.2.4z"/></svg>',
        fill: 'brand-color',
      },
    },
  ],
  title: {
    content: 'Awards',
    type: 'blockTitle',
  },
  description: {
    content: 'The excellence of our services has been proved by the following awards:',
    type: 'subtitle',
  },
  'button-2': {
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
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'item-description': {defaultValue: false, label: 'Advantages description', type: 'hidden'},
  'button-primary': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}


export default ExtendedWireframe
