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
    ...Component.defaultContent.background,
    color: 'light-shade-color',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Join Our Team',
  },
  description: {
    content: 'Interested in a farming career with the Organic Farm family? We are always in search of young people to join our team. Find a position you need and enjoy your new career and our friendly work environment!',
    type: 'subtitle',
  },
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'Get Started now',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
