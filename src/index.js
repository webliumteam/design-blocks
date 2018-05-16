import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-contacts/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-contacts/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  map: {
    preset: 'color',
    height: '100%',
    center: {
      lat: 40.930413,
      lng: -98.382657,
    },
    zoom: 17,
    activeMarker: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
    disableDefaultUI: true,
    allowZoomOnScroll: true,
    markers: [
      {
        position: {
          lat: 40.930413,
          lng: -98.382657,
        },
        name: 'Address',
        description: 'This is marker description',
        address: '1204 Allen Drive Grand Island, NE 68803',
        id: '2aceeb6f-623c-41f8-b0d3-6f0f085e8e48',
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  social: {defaultValue: false, label: 'Social Media Buttons', type: 'hidden'},
}

export default ExtendedWireframe
