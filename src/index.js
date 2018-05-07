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
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Want to Work With Us?',
  },
  description: {
    ...Component.defaultContent.description,
    content: 'Get a full-scale analysis of your business and recommended <br> solutions to increase your profits.',
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'primary',
    textValue: 'Request an analysis',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {
    ...Component.modifierScheme.subtitle,
    defaultValue: true,
    type: 'checkbox',
  },
}

export default ExtendedWireframe
