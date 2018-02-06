import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
  },
  title: 'Our Values',
  heading: 'Our Text Heading',
  subtitle:
    'We are a professional result-focused and customer-oriented company, and our values drive us to grow and achieve more goals.',
  subheading:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  text:
    '“Our experienced and dedicated staff provides tailor made services that reflect a commitment to safety, efficiency, and the highest level of customer care. We strive to share our mutual priorities and values. We know that only those committed to their work can provide the best-quality products and services. That’s why every person that wants to join our team should undergo rigorous selection.”',
  background: {
    type: 'image',
    position: {
      type: 'tile',
    },
    resourceRef: 'main-bg-pattern.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'center',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  heading: {defaultValue: false, label: 'Title', type: 'hidden'},
  subheading: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
