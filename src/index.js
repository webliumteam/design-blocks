import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 0%',
    },
    resourceRef: 'bg.jpg',
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
      type: 'secondary',
    },
    className: 'form',
    buttonClassName: 'button form__button',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
