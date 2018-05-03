import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-contacts/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  heading: {
    content: 'Farm Location',
    type: 'heading',
  },
  'address-content': {
    content: '69 Halsey St, New York, NY 10002',
    type: 'text',
  },
  'phone-link': {
    content: '<a href="tel:(222) 111 11 11">(222) 111 11 11</a>',
    type: 'text',
  },
  'email-link': {
    content: '<a href="mailto:organicfarm@a.weblium.com">organicfarm@a.weblium.com</a>',
    type: 'text',
  },
  map: {
    ...Component.defaultContent.map,
    preset: 'dafault',
    zoom: 12,
    markers: [
      ...Component.defaultContent.map.markers[0],
      {
        position: {
          lat: 38.896849,
          lng: -77.030199,
        },
        address: 'Head office in New York, - 69 Halsey St.',
        id: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
