import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'picture.jpg',
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
        placeholder: 'Email',
        required: false,
      },
    ],
    submitButton: {
      title: 'subscribe',
      textValue: 'subscribe',
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
