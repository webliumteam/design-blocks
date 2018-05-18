import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      ...Component.defaultContent.gallery[0],
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        resourceRef: 'pic1@2x.png',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        resourceRef: 'pic2@2x.png',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        resourceRef: 'pic3@2x.png',
      },
    },
    {
      ...Component.defaultContent.gallery[3],
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        resourceRef: 'pic4@2x.png',
      },
    },
    {
      ...Component.defaultContent.gallery[4],
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        resourceRef: 'pic5@2x.png',
      },
    },
    {
      ...Component.defaultContent.gallery[5],
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'pic6@2x.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Gallery title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'hidden'},
  'body-text': {defaultValue: false, label: 'Image description', type: 'hidden'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
}

export default ExtendedWireframe
