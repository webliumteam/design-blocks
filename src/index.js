import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  title: 'About The Company',
  'text-1': 'Follow us:',
  subtitle: 'We provide a wide range of services to meet even the most daring requirements. ',
  text:
    'Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services. ',
  picture: {
    resourceRef: 'company-foto.png',
    alt: 'Picture about the company',
  },
  button: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Contact us',
    type: 'primary',
    size: 'md',
  },
  link: '<a href="/">More about us</a>',
  socialIcons: {
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
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      marginRight: 20,
      color: '',
      sizes: [10, 20, 30, 40],
      size: '40px',
    },
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: true, label: 'Contact us button', type: 'checkbox'},
  link: {defaultValue: false, label: 'About us link', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
