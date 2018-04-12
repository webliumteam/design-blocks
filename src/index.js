import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

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
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
