import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-footer/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-footer/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'darkShade?lighten=96.7',
  },
  logo: {
    image: {
      resourceRef: 'logo.png',
      alt: 'Quantum logo',
      width: 171,
      height: 38,
    },
  },
  menu: [
    {
      ...Component.defaultContent.menu[0],
      id: 'about',
      metadata: {
        ...Component.defaultContent.menu[0].metadata,
        displayName: 'About Us',
      },
    },
    {
      ...Component.defaultContent.menu[1],
      id: 'responsibility',
      metadata: {
        ...Component.defaultContent.menu[1].metadata,
        displayName: 'Responsibility',
      },
    },
    {
      ...Component.defaultContent.menu[2],
      id: 'contacts-us',
      metadata: {
        ...Component.defaultContent.menu[2].metadata,
        displayName: 'Contact Us',
      },
    },
    {
      ...Component.defaultContent.menu[3],
      id: 'projects',
      metadata: {
        ...Component.defaultContent.menu[3].metadata,
        displayName: 'Projects',
      },
    },
    {
      ...Component.defaultContent.menu[4],
      id: 'careers',
      metadata: {
        ...Component.defaultContent.menu[4].metadata,
        displayName: 'Careers',
      },
    },
    {
      ...Component.defaultContent.menu[5],
      id: 'site-map',
      metadata: {
        ...Component.defaultContent.menu[5].metadata,
        displayName: 'Sitemap',
      },
    },
    {
      ...Component.defaultContent.menu[6],
      id: 'services',
      metadata: {
        ...Component.defaultContent.menu[6].metadata,
        displayName: 'Services',
      },
    },
    {
      ...Component.defaultContent.menu[7],
      id: 'subcontractors',
      metadata: {
        ...Component.defaultContent.menu[7].metadata,
        displayName: 'Subcontractors',
      },
    },
    {
      ...Component.defaultContent.menu[8],
      id: 'privacy-policy',
      metadata: {
        ...Component.defaultContent.menu[8].metadata,
        displayName: 'Privacy Policy',
      },
    },
    {
      ...Component.defaultContent.menu[9],
      id: 'process',
      metadata: {
        ...Component.defaultContent.menu[9].metadata,
        displayName: 'Our Process',
      },
    },
    {
      ...Component.defaultContent.menu[10],
      id: 'news',
      metadata: {
        ...Component.defaultContent.menu[10].metadata,
        displayName: 'News',
      },
    },
    {
      ...Component.defaultContent.menu[11],
      id: 'terms-use',
      metadata: {
        ...Component.defaultContent.menu[11].metadata,
        displayName: 'Terms of Use',
      },
    },
  ],
  follow: {
    type: 'caption',
    content: 'Follow Us',
  },
  socialIcons: {
    networks: [
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      offset: 2,
      color: 'dark-shade-color',
      sizes: [10, 20, 30, 40],
      size: 23,
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  description: {defaultValue: false, label: 'Company main text', type: 'hidden'},
}

export default ExtendedWireframe
