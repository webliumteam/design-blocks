import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-careers_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'img_pic.jpg',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'careers-bg.jpg',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  icon: {defaultValue: false, label: 'Careers icon', type: 'hidden'},
  dots: {
    defaultValue: true,
    label: 'Dots image decorator',
    type: 'checkbox',
    classNameOnActive: style['section--with-dots'],
  },
}


export default ExtendedWireframe
