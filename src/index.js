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
  headerButton: {
    ...Component.defaultContent.headerButton,
    type: 'primary-alt',
    iconEnabled: true,
    iconAlignment: 'right',
    icon: {
      svg: '<svg viewBox="0 0 100 125" fill="currentColor"><path d="M50 66.14l3.2-2.7 26-22-6.4-7.7L50 53.14l-22.8-19.3-6.4 7.7 26 22 3.2 2.6z"/></svg>',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'header-button': {defaultValue: true, label: 'Header button', type: 'checkbox'},
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
