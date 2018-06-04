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
    resourceRef: 'bg.png',
  },
  contactForm: {
    ...Component.defaultContent.contactForm,
    fields: [
      ...Component.defaultContent.contactForm.fields[0],
      {
        type: 'email',
        id: 'contactForm_email',
        placeholder: 'Your email',
      },
    ],
    submitButton: {
      ...Component.defaultContent.contactForm.submitButton,
      type: 'primary-alt',
      size: 'lg',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
