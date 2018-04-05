import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  careers: [
    {
      title: {
        content: 'Trainee program for young talents with big ambitions',
        type: 'heading',
      },
      icon: {
        svg: '',
      },
    },
    {
      title: {
        content: 'Relocation and full support for experts from other cities and countries',
        type: 'heading',
      },
      icon: {
        svg: '',
      },
    },
    {
      title: {
        content: '100+ experts who work in different industry fields',
        type: 'heading',
      },
      icon: {
        svg: '',
      },
    },
  ],
  title: {
    content: 'Careers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Do you want to join our company? Check the list of open vacancies or contact our HR director to learn about open positions.',
    type: 'subtitle',
  },
  text: {
    content: 'Our company is always looking for professional and inspired people who are ready to work, according to our principles and standards. Look through the list of our advantages to see what you get by becoming a part of our team.',
    type: 'text',
  },
  picture: {
    src: 'bg.jpg',
    alt: 'Illustration',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Careers main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Careers icon', type: 'checkbox'},
  image: {defaultValue: true, label: 'Сareers photo', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
