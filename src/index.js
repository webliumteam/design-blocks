import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      title: {
        content: 'Service 1',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '1.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[1],
      title: {
        content: 'Service 2',
        type: 'heading',
      },
      description: {
        content: 'Developing marketing and business strategy to help company grow fast.',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '2.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[2],
      title: {
        content: 'Service 3',
        type: 'heading',
      },
      description: {
        content: 'Building brand awareness for micro and small businesses to increase potential reach.',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '3.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[3],
      title: {
        content: 'Service 4',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '4.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[4],
      title: {
        content: 'Service 5',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '5.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[5],
      title: {
        content: 'Service 6',
        type: 'heading',
      },
      description: {
        content: 'Building brand awareness for micro and small businesses to increase potential reach.',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '6.png',
        alt: 'Service illustration photo',
      },
    },
  ],
  title: {
    content: 'Services We Provide',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We deliver all kind of services that support small and micro businesses. Here are some of them:',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Button (link)', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Additional button (link)', type: 'checkbox', sortOrder: 50},
  link: {defaultValue: false, label: 'Service link (button)', type: 'checkbox', sortOrder: 40},
  subtitle: {defaultValue: true, label: 'Block  description', type: 'checkbox', sortOrder: 10},
}

export default ExtendedWireframe
