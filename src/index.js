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
