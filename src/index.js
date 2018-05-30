import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-cta/src/options.json'
import options from './options.json'

const {
  enhancers: {withProps},
  hoistStatics,
} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fff',
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
        type: 'textArea',
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
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
