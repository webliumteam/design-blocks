import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Web Presence Made Easy',
    type: 'blockTitle',
  },
  text: {
    content: 'Our website designs are created by professional web design specialists who are passionate about state of the art and unique craft of web design. We help our customers make professional presentations of their businesses and grow their client base with ease.',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Description', type: 'hidden'},
  heading: {defaultValue: false, label: 'Title', type: 'hidden'},
  subheading: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
