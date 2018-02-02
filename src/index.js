import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  title: 'Contacts',
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2',
    },
  },
  'address-title': 'Address',
  'phone-title': 'Phone',
  'email-title': 'E-mail',
  'address-content': '1204 Allen Drive<br> Grand Island, NE 68803',
  'phone-link': '<a href="tel:+1 084 553 24 65">+1 084 553 24 65</a>',
  'email-link': '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
  map: {
    preset: 'silver',
    height: '100%',
    center: {
      lat: 50.4589633,
      lng: 30.5247585,
    },
    zoom: 18,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: true,
    allowZoomOnScroll: false,
    markers: [
      {
        position: {
          lat: 50.4589633,
          lng: 30.5247585,
        },
        name: 'Address',
        description: 'This is marker description',
        address: 'Head office in London - 36 Regent St.',
        id: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      },
    ],
  },
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      marginRight: 15,
      color: '#9B9B9B',
      sizes: [10, 20, 30, 40],
      size: '30px',
    },
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'map',
    type: 'checkbox',
    label: 'Map',
    defaultValue: true,
  },
  {
    id: 'logo',
    type: 'checkbox',
    label: 'Logo',
    defaultValue: true,
  },
  {
    id: 'phone',
    type: 'checkbox',
    label: 'Phone text block',
    defaultValue: true,
  },
  {
    id: 'email',
    type: 'checkbox',
    label: 'E-mail text block',
    defaultValue: true,
  },
  {
    id: 'address',
    type: 'checkbox',
    label: 'Address text block',
    defaultValue: true,
  },
  {
    id: 'social',
    type: 'hidden',
    label: 'Social Media Buttons',
    defaultValue: false,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default ExtendedWireframe
