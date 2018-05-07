import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-cta/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  formBackground: {
    type: 'color',
    color: 'transparent',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: ' ',
        placeholder: 'Name *',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: ' ',
        placeholder: 'Phone number *',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: ' ',
        placeholder: 'Email',
        required: true,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary-alt',
    },
    className: 'form',
    buttonClassName: 'button form__button',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
