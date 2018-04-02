import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  // background: {
  //   type: 'image',
  //   position: {
  //     type: 'cover',
  //     cover: '50% 50%',
  //   },
  //   resourceRef: 'bg.jpg',
  // },
  title: {
    content: 'RAM UAV',
    type: 'heroTitle',
  },
  'top-caption': {
    content: 'About',
    type: 'heading',
  },
  text: {
    content: 'Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. <br> <br> We are devoted to creating unique and innovative solutions along with the high-quality supporting services. ',
    type: 'text',
  },
  'button-1': {
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
    textValue: 'Learn More',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'checkbox'},
}

export default ExtendedWireframe
