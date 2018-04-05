import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
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
    resourceRef: 'img-bg.jpg',
  },
  formBackground: {
    type: 'color',
    color: 'transparent',
  },
  title: {
    content: 'Get in Touch with Our Logistics Expert',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Complete the form below and receive a full analysis of your business within 2 days!',
    type: 'subtitle',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'Name',
        required: false,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '',
        placeholder: 'E-mail',
        required: false,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'Phone',
        required: false,
      },
      {
        type: 'textArea',
        id: 'contactForm_message',
        title: '',
        placeholder: 'Message',
        required: false,
      },
    ],
    submitButton: {
      title: 'Send',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
