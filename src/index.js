import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'Logo',
      width: 171,
      height: 44,
    },
  },
  menu: [
    {
      id: 'home',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Home',
      },
    },
    {
      id: 'careers',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Careers',
      },
    },
    {
      id: 'blog',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Blog',
      },
    },
    {
      id: 'about',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'About Us',
      },
    },
    {
      id: 'testimonials',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Testimonials',
      },
    },
    {
      id: 'contact',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Contact Us',
      },
    },
    {
      id: 'services',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Services',
      },
    },
    {
      id: 'gallery',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'Gallery',
      },
    },
  ],
  socialIcons: {
    ...Component.defaultContent.socialIcons,
    networks: [
      {
        ...Component.defaultContent.socialIcons.networks[1],
      },
      {
        ...Component.defaultContent.socialIcons.networks[0],
      },
      {
        ...Component.defaultContent.socialIcons.networks[3],
      },
    ],
    design: {
      ...Component.defaultContent.socialIcons.design,
      border: 'circle',
      color: 'dark-shade-color',
      size: 40,
      offset: 10,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
