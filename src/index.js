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
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Products and services of the highest quality',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
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
