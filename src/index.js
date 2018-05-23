import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      ...Component.defaultContent.articles[0],
      icon: {
        svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.2 59.8"><path d="M43 23.9c-1.8 0-3.6-.7-4.9-2-2.7-2.7-2.7-7.1 0-9.8 1.3-1.3 3-2 4.9-2 1.8 0 3.6.7 4.9 2s2 3 2 4.9-.7 3.6-2 4.9c-1.3 1.2-3.1 2-4.9 2zM43 13c-1 0-2 .4-2.8 1.1-1.5 1.5-1.5 4 0 5.5s4.1 1.5 5.5 0c.7-.7 1.1-1.7 1.1-2.8s-.4-2-1.1-2.8-1.7-1-2.7-1zM22.5 45.1c-3.2 3.2-4.2 3.7-10.7 6.7-1.8.9-4.2 1.9-7.1 3.3 1.4-3 2.5-5.3 3.4-7.1 3-6.5 3.5-7.5 6.7-10.7.7-.7 1.6-1.2 2.5-1.4L15 33.6c-.8.4-1.6 1-2.3 1.6-3.6 3.6-4.2 5-7.3 11.5-1.2 2.6-2.8 6.1-5.2 11-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .7-.2 4.8-2.4 8.4-4 11-5.2 6.6-3.1 8-3.7 11.5-7.3.7-.7 1.2-1.5 1.6-2.3l-2.3-2.3c-.4 1-.9 1.9-1.6 2.6zm-8.8-26.2l9.7-1.3 3.5-3.5-16.6 2.2c-.6.1-1 .5-1.2 1s0 1.1.4 1.5l6.4 6.4 2.1-2.1-4.3-4.2zM41 46.3l-4.2-4.2-2.1 2.1 6.4 6.4c.3.3.7.4 1.1.4.2 0 .3 0 .5-.1.5-.2.9-.7 1-1.2l2.2-16.6-3.5 3.5-1.4 9.7zM57.4 0L49 .6c-3.9.3-7.6 2-10.4 4.8L15.1 28.8c-.3.3-.4.7-.4 1.1 0 .4.2.8.4 1.1l14 13.9c.3.3.7.4 1.1.4s.8-.1 1.1-.4l23.5-23.5c2.8-2.8 4.5-6.5 4.8-10.4l.6-8.4c0-.7-.2-1.4-.7-1.9-.7-.5-1.4-.8-2.1-.7zm-1 10.7c-.2 3.2-1.6 6.3-3.9 8.5L30.1 41.7 18.3 29.8 40.7 7.4C43 5.1 46 3.7 49.2 3.5l7.7-.5-.5 7.7z"/></svg>',
        fill: 'brand-color',
        stroke: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      icon: {
        svg:
          '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.3 52.3"><style>.st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}</style><path class="st0" d="M10.7 19.2l10.5-8.5 10.5 8.5-10.5 8.5-10.5-8.5z"/><path class="st0" d="M9.7 25.7l12 10 12-10"/><path class="st0" d="M9.7 32.7l12 10 12-10m-2-22l7.5-7.5m-4.5-1.5h6v6m-29.9 2.8L3.1 3.3M1.7 7.8l-.2-6 6-.2m24.2 40.1l7.5 7.5m-4.5 1.5h6v-6m-29.9-2.9L3 49m-1.3-4.5l-.2 6 6 .2"/></svg>',
        fill: 'brand-color',
        stroke: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      icon: {
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.9 87.9"><path d="M78.1 87.9H9.6c-.2 0-5.6-.4-8.7-7.3C.2 79 0 75.9 0 75.3v-66C0 4.2 4.3 0 9.7 0H74c2.8.3 4.7 2.2 4.7 4.8 0 .2-.1.5-.2.7 0 0-1.1 2.5-1.1 5.4 0 2.3.3 3.8.6 4.5h.2c2.7 0 4.8 2.1 4.8 4.8v62.5c-.1 2.9-2.2 5.2-4.9 5.2zm-59.6-3.5h59.6c.8 0 1.3-.9 1.3-1.7V20.2c0-.8-.5-1.3-1.3-1.3H18.5v65.5zm-8.7 0H15V18.9H9.6c-2.3 0-4.5-.9-6.1-2.3v58.6c.1 1.1.3 3.2.7 3.9 2 4.7 5.2 5.2 5.6 5.3zM9.6 3.5c-3.4 0-6.1 2.6-6.1 5.8 0 3.3 2.9 6.1 6.1 6.1h64.7c-.3-1.1-.5-2.6-.5-4.5 0-2.9.9-5.4 1.2-6.4-.2-.7-.9-1-1.5-1H9.6zm58.4 75c-.8 0-1.6-.4-2.4-1.1l-10-10c-.2-.2-.3-.4-.4-.6l-.9-2.4-4.1-4c-2.7 1.5-5.7 2.3-9.1 2.3-5.1 0-10.1-2-13.7-5.7-3.7-3.7-5.7-8.5-5.7-13.7 0-5.2 2-10 5.7-13.7S36 24 41.1 24c5.2 0 10 2 13.7 5.7 3.7 3.7 5.7 8.5 5.7 13.7 0 3.3-.8 6.5-2.3 9.1l4 3.9 2.6.9c.2.1.5.2.7.4l9.9 9.9c1.1 1.1 1.7 3.2-1.9 6.8l-2.4 2.4c-.8.8-1.6 1.4-2.5 1.6-.1.1-.4.1-.6.1zm-9.6-13.3l9.7 9.7c.1-.1.3-.3.6-.5l2.4-2.4c1-1 1.5-1.7 1.6-2.1l-9.4-9.4-2.6-.9c-.2-.1-.5-.2-.6-.4l-4-3.9-3 3 4 4c.2.2.3.4.4.6 0-.1.9 2.3.9 2.3zM41.1 27.5c-4.2 0-8.2 1.7-11.2 4.6-3 3-4.7 7-4.6 11.2 0 4.2 1.7 8.2 4.7 11.2s7 4.6 11.2 4.6c3.2 0 6.1-.7 8.4-2.4.5-.4 4.4-4.1 5-5l.1-.1c1.6-2.2 2.3-5.2 2.3-8.3 0-4.2-1.7-8.2-4.6-11.2-3-3-7.1-4.7-11.3-4.6zm-9.6 17.4c-1 0-1.8-.8-1.8-1.8 0-6 4.8-10.8 10.8-10.8 1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8c-4 0-7.3 3.3-7.3 7.3 0 .9-.7 1.7-1.7 1.7z"/></svg>',
        fill: 'brand-color',
        stroke: 'brand-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  'button-primary': {defaultValue: false, label: 'Primary button', type: 'hidden'},
}

export default ExtendedWireframe
