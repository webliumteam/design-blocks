import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Get in Touch',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content:
      'We are available 24/7 by fax, e-mail, or by phone. You can also use our quick contact form to ask a question about our services and products. We would be happy to answer your questions or offer any help.',
  },
  contactForm: {
    ...Component.defaultContent.contactForm,
    fields: [
      {
        ...Component.defaultContent.contactForm.fields[0],
        id: 'contactForm_firstName',
        title: 'First Name',
        required: false,
      },
      {
        ...Component.defaultContent.contactForm.fields[1],
        type: 'text',
        id: 'contactForm_lastName',
        title: 'Last Name',
        placeholder: '',
        required: false,
      },
      {
        ...Component.defaultContent.contactForm.fields[2],
        title: 'E-mail',
        required: false,
      },
      {
        type: 'text',
        id: 'contactForm_message',
        title: 'Message',
        placeholder: '',
        required: false,
      },
    ],
    submitButton: {
      ...Component.defaultContent.submitButton,
      title: 'Send',
      size: 'sm',
    },
    submitButtonClassName: 'button button--size-sm button--primary form__button',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
