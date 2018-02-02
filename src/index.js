import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: 'Pick a Plan',
      description:
        'You will get complete information about each program we offer. There are a few options to meet your needs.',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: 'Make a Payment',
      description:
        'We guarantee the security of all payments. You may choose the most suitable payment method.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: 'Enjoy Our Products',
      description:
        'You will get access to all available features immediately.',
    },
  ],
  title: 'Our process',
  description:
    'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'block-bg.jpg',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Process description',
    defaultValue: true,
  },
  {
    id: 'icon',
    type: 'checkbox',
    label: 'Step icon',
    defaultValue: true,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Step title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Step main text',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
]

export default ExtendedWireframe
