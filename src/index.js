import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        src: 'img_1.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        src: 'img_2.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        src: 'img_3.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[3],
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        src: 'img_4.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[4],
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        src: 'img_5.jpg',
      },
    },
    {
      ...Component.defaultContent.gallery[5],
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        src: 'img_6.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Gallery title', type: 'hidden'},
}

export default ExtendedWireframe
