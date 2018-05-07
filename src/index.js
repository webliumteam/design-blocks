import $editor from 'weblium/editor'

import Component from 'wireframe-series-4-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-4-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#eff1f2',
  },
  formBackground: {
    type: 'color',
    color: 'eff1f2',
  },
  title: {
    content: 'Contacts Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email. Choose what suits you the most.',
    type: 'subtitle',
  },
  'hours-title': {
    content: 'Contacts',
    type: 'heading',
  },
  'contacts-title': {
    content: 'Contacts',
    type: 'heading',
  },
  'address-content': {
    content: 'SFTE “SpetsTechnoExport” <br>7, Stepan Bandera Avenue, <br>Kyiv, 04073, Ukraine ',
    type: 'text',
  },
  'hours-content': {
    content: 'tel:<a href="tel:+38044-568-50-70">+38044-568-50-70</a><br>fax: <a href="tel:+38044-568-50-68">+38044-568-50-68</a> <br><a href="mailto:office@ste.kiev.ua">office@ste.kiev.ua</a><br><a href="www.spetstechnoexport.com">www.spetstechnoexport.com</a>',
    type: 'text',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: '',
        placeholder: 'Enter your full name *',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: '',
        placeholder: 'Enter your phone number *',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: '',
        placeholder: 'Enter your e-mail *',
        required: true,
      },
      {
        type: 'textArea',
        id: 'contactForm_textarea',
        title: '',
        placeholder: 'Enter your full message',
        required: false,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
    },
    className: 'form',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'contacts-title': {defaultValue: false, label: 'Contacts title', type: 'hidden'},
  phone: {defaultValue: false, label: 'Phone', type: 'hidden'},
  email: {defaultValue: false, label: 'E-mail', type: 'hidden'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
}

export default ExtendedWireframe
