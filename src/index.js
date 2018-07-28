import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cta_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  contentBackground: {
    type: 'color',
    color: 'rgb(19,33,143)',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Want to work with us?',
    color: 'light-shade-color',
  },
  description: {
    ...Component.defaultContent.description,
    content: 'Get a full-scale analysis of your business and recommended solutions to increase your profits.',
    color: 'light-shade-color',
  },
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'Request a quote',
    type: 'primary',
    iconEnabled: true,
    iconAlignment: 'right',
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.1 119.9"><path d="M76.3 60l-2.7-3.2-22-26-7.7 6.4L63.3 60 44 82.8l7.7 6.4 22-26 2.6-3.2z"/></svg>',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
