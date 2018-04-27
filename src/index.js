import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  contacts: [
    {
      ...Component.defaultContent.contacts[0],
      picture: {
        resourceRef: 'item-1.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      ...Component.defaultContent.contacts[0],
      picture: {
        resourceRef: 'item-2.jpg',
        alt: 'Location illustration photo',
      },
    },
    {
      ...Component.defaultContent.contacts[0],
      picture: {
        resourceRef: 'item-3.jpg',
        alt: 'Location illustration photo',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Contacts description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default ExtendedWireframe
