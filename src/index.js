import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  map: {
    ...Component.defaultContent.map,
    preset: 'dafault',
    zoom: 12,
    offset: {x: -283, y: 0},
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
