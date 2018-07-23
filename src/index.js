import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-cta/src/options.json'
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
    resourceRef: 'img-bg.jpg',
  },
  title: {
    content: 'Subscribe Now',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Enter your email and get our latest news, special offers, and useful content about our products and services.',
    type: 'subtitle',
  },
  contactForm: {
    fields: [
      {
        type: 'email',
        id: 'contactForm_email',
        placeholder: 'E-mail',
        required: false,
      },
    ],
    submitButton: {
      title: 'Subscribe',
      textValue: 'Subscribe',
      type: 'primary',
      size: 'lg',
    },
    className: 'form',
    buttonClassName: 'button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
