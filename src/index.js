import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-about_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 35%',
    },
    resourceRef: 'ddd.jpg',
    overlay: {
      type: 'color',
      color: 'light-shade-color',
      opacity: 0.65,
    },
  },
  'social-icons': {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: 'brand-color',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    textValue: 'Learn more',
    type: 'primary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: true, label: 'Company title', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Company description', type: 'hidden'},
}

export default ExtendedWireframe
