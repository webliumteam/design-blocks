import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
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
    resourceRef: 'layer-518.png',
    overlay: {
      type: 'color',
      color: '#fff',
      opacity: 0.7,
    },
  },
  title: {
    content: 'Healthcare',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Services customized for Healthcare Facilities',
    type: 'subheading',
  },
  text: {
    content: '— We work as efficiently as you do <br/>— We care about your products and processes <br />— We are flexible and able to scale our operations to match your business cycle',
    type: 'quote',
  },
  'button-1': {
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
    textValue: 'Send Us a Message',
    type: 'secondary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: false, label: 'Article picture', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}

export default ExtendedWireframe
