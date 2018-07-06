import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      title: {
        content: '24-hour emergency service',
        type: 'heading',
      },
      description: {
        content: 'From $50',
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
        content: 'Interior and exterior lighting',
        type: 'heading',
      },
      description: {
        content: 'From $30',
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
        content: 'Data network & telephone installations',
        type: 'heading',
      },
      description: {
        content: 'From $50',
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
        content: 'Power meter & electrical panel service',
        type: 'heading',
      },
      description: {
        content: 'From $25',
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
        content: 'Lightning protection system<br>installation',
        type: 'heading',
      },
      description: {
        content: 'From $30',
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
        content: 'Residential and commercial wiring',
        type: 'heading',
      },
      description: {
        content: 'From $50',
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
    content: 'Services',
    type: 'blockTitle',
  },
  subtitle: {
    content: "If you can't find the service you are looking for, feel free to contact us. We will be glad to answer any service-related questions. We look forward to meeting your electrical needs. Here are some services we offer:",
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'checkbox'},
  link: {defaultValue: false, label: 'Link', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
}

export default ExtendedWireframe
