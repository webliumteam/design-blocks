import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-cover/src/component'
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
    resourceRef: 'bg.jpg',
    overlay: {
      type: 'color',
      color: '#161619',
      opacity: 0.2,
    },
  },
  formBackground: {
    type: 'color',
    color: 'rgb(19, 33, 143, 0.78)',
  },
  title: {
    content: 'Safe and Secure<br>Transportation',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'Acrozz Logistics provides trustworthy transportation, freight, warehousing, and distribution services across over 180 countries all over the world.',
    type: 'subtitle',
  },
  formTitle: {
    content: 'Request a Quote',
    type: 'headingLg',
  },
  contactForm: {
    ...Component.defaultContent.contactForm,
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'NAME',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '',
        placeholder: 'E-MAIL',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'PHONE',
        required: true,
      },
      {
        type: 'textArea',
        id: 'contactForm_message',
        title: '',
        placeholder: 'MESSAGE',
        required: false,
      },
    ],
    submitButton: {
      title: 'send',
      type: 'primary',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'form-description': {defaultValue: false, label: 'Form description', type: 'checkbox'},
  'header-alignment': {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'right',
    name: 'Header alignment',
    type: 'radio-button-group',
    style: 'buttons',
  },
}

export default ExtendedWireframe
