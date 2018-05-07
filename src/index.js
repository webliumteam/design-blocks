import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-faq/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-faq/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
  title: {
    ...Component.defaultContent.title,
    content: '- FAQ -',
  },
  faq: [
    {
      ...Component.defaultContent.faq[0],
      title: {
        ...Component.defaultContent.faq[0].title,
        content: 'How can I make the order?',
      },
    },
    {
      ...Component.defaultContent.faq[1],
      title: {
        ...Component.defaultContent.faq[1].title,
        content: 'What if I don’t know what plan I need?',
      },
    },
    {
      ...Component.defaultContent.faq[2],
      title: {
        ...Component.defaultContent.faq[2].title,
        content: 'What payment options do you provide for clients? I can pay with a credit card, PayPal, or other payment systems?',
      },
    },
    {
      ...Component.defaultContent.faq[3],
      title: {
        ...Component.defaultContent.faq[3].title,
        content: 'Do you have a money back guarantee?',
      },
    },
    {
      ...Component.defaultContent.faq[4],
      title: {
        ...Component.defaultContent.faq[4].title,
        content: 'How can I change my plan?',
      },
    },
    {
      ...Component.defaultContent.faq[5],
      title: {
        ...Component.defaultContent.faq[5].title,
        content: 'Can I get video consultation with your specialist?',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'FAQ description', type: 'checkbox'},
}

export default ExtendedWireframe
