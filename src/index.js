import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
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
    resourceRef: 'about.jpg',
  },
  theme: 'dark',
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: false,
      preset: 'preset001',
      offset: 20,
      color: '#fff',
      sizes: [10, 20, 30, 40],
      size: '32px',
    },
  },
  title: {
    ...Component.defaultContent.title,
    content: 'ABOUT THE COMPANY',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'WE PROVIDE A WIDE RANGE OF SERVICES TO MEET EVEN THE MOST DARING REQUIREMENTS.',
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: false, label: 'Article picture', type: 'hidden'},
  socialIcons: {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  border: {
    defaultValue: true,
    label: 'White border',
    type: 'checkbox',
    classNameOnActive: style['section--with-border'],
  },
  'arrange-elements': {type: 'hidden'},
}

export default ExtendedWireframe
