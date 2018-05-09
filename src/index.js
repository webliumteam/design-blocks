import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-cover/src/options.json'
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
    resourceRef: 'bg.jpg',
    overlay: {
      type: 'color',
      color: '#161619',
      opacity: 0.2,
    },
  },
  formBackground: {
    type: 'color',
    color: 'rgba(19, 33, 143, 0.78)',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Safe and Secure<br>Transportation',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'Acrozz Logistics provides trustworthy transportation, freight, warehousing, and distribution services across over 180 countries all over the world.',
  },
  formTitle: {
    ...Component.defaultContent.formTitle,
    content: 'Request a Quote',
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
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.5 97.8"><path d="M32.5 47.1l-2.7-3.2-22.1-26L0 24.3l19.5 22.8L.2 69.9l7.7 6.4 21.9-26c.1 0 2.7-3.2 2.7-3.2z"/></svg>',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'header-button': {defaultValue: true, label: 'Header button', type: 'checkbox'},
  'title-decorator': {
    defaultValue: true,
    label: 'Title decorator',
    type: 'checkbox',
    classNameOnActive: style['section--with-title-decorator'],
  },
  'form-description': {defaultValue: false, label: 'Form description', type: 'hidden'},
  'Arrange elements': {
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
