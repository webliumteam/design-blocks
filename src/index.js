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
    {
      ...Component.defaultContent.services[6],
      title: {
        content: 'Underfloor heating and thermostat<br>installation',
        type: 'heading',
      },
      description: {
        content: 'From $35',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '7.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[7],
      title: {
        content: 'Air conditioning and heating systems',
        type: 'heading',
      },
      description: {
        content: 'From $30',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '8.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[8],
      title: {
        content: 'Fuse box installation and replacement',
        type: 'heading',
      },
      description: {
        content: 'From $50',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '9.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[9],
      title: {
        content: 'Voltage regulators installation<br>service',
        type: 'heading',
      },
      description: {
        content: 'From $45',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '10.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[10],
      title: {
        content: 'Data network and service facilities for<br>businesses',
        type: 'heading',
      },
      description: {
        content: 'From $30',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '11.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[11],
      title: {
        content: 'Security surveillance system<br>installation',
        type: 'heading',
      },
      description: {
        content: 'From $50',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '12.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[12],
      title: {
        content: 'Video intercom systems installation',
        type: 'heading',
      },
      description: {
        content: 'From $25',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '13.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[13],
      title: {
        content: 'Satellite TV installations',
        type: 'heading',
      },
      description: {
        content: 'From $30',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '14.png',
        alt: 'Service illustration photo',
      },
    },
    {
      ...Component.defaultContent.services[14],
      title: {
        content: 'Emergency & backup generator<br> Instllation',
        type: 'heading',
      },
      description: {
        content: 'From $30',
        type: 'subheading',
        color: 'brand-color',
      },
      picture: {
        resourceRef: '15.png',
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
  'button-primary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Button', type: 'hidden'},
  link: {defaultValue: false, label: 'Link', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
}

export default ExtendedWireframe
