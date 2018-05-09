import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'About us.',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence. ',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'about.png',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'Get now',
    type: 'primary',
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    type: 'secondary',
  },
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    networks: [
      {
        ...Component.defaultContent.socialIcons.networks[0],
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        ...Component.defaultContent.socialIcons.networks[1],
      },
    ],
    design: {
      ...Component.defaultContent.socialIcons.design,
      offset: 20,
      color: 'ui-link-color',
      size: 32,
    },
  },
}
ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden', minHeight: 1200},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  socialIcons: {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  'additional-text': {defaultValue: false, label: 'Additional text', type: 'hidden'},
}

export default ExtendedWireframe
