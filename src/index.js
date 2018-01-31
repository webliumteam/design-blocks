import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-faq/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  faq: [
    {
      title: 'How can I make the order?',
      description:
        'Browse the most common questions and answers. Didn’t find what you need? Just send us a request and we will get in touch with you shortly. ',
      id: '231733d3-fc14-4e74-8cb2-ba71a90aecdd',
    },
    {
      title: 'What open positions do you have?',
      description:
        "We are always looking for professional and inspired people who are ready to work, according to our principles and standards. Look through the list of our open positions on the careers page and become a part of our team. There you can also get to know how many advantages you'll get.",
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b60',
    },
    {
      title: 'Do you have a money back guarantee?',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b61',
    },
    {
      title: 'What payment options do you provide for clients? I can pay with a credit card, PayPal, or other payment systems?',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b62',
    },
    {
      title: 'How can I change my plan?',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b63',
    },
  ],
  title: 'FAQ',
  description:
    'Browse the most common questions and answers. Didn’t find what you need? Just send us a request and we will get in touch with you shortly.',
  cta: {
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
    textValue: 'Additional button',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'FAQ description',
    defaultValue: true,
  },
  {
    id: 'secondary-button',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
]

export default ExtendedWireframe
