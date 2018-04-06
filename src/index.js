import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'color',
    color: 'inherit',
  },
  contentBackground: {
    type: 'color',
    color: 'inherit',
  },
  title: {
    content: 'Want to work with us?',
    type: 'blockTitle',
  },
  description: {
    content: 'Get a full-scale analysis of your business and recommended solutions to increase your profits.',
    type: 'text',
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
    textValue: 'Request a quote',
    type: 'primary-alt',
    size: 'lg',
  },
  picture: {
    resourceRef: 'picture.jpg',
    alt: 'Illustration photo',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'checkbox'},
  picture: {defaultValue: true, label: 'Picture', type: 'hidden'},
}

export default ExtendedWireframe
