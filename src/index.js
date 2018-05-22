import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-careers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  // background: {
  //   type: 'image',
  //   position: {
  //     type: 'cover',
  //     cover: '50% 50%',
  //   },
  //   resourceRef: 'careers-bg.jpg',
  // },
  image: {
    ...Component.defaultContent.image,
    resourceRef: 'img_pic.jpg',
  },
  button: {
    ...Component.defaultContent.button,
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  icon: {defaultValue: false, label: 'Careers icon', type: 'hidden'},
}

export default ExtendedWireframe
