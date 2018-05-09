import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cta/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-shade-color',
  },
  title: {
    content: '404',
    type: 'heroTitle',
  },
  description: {
    content: 'Sorry, but the page you are looking for could not be found',
    type: 'headingLg',
  },
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'Go to homepage',
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
