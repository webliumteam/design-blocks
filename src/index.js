import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-gallery/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.png',
    overlay: {
      type: 'color',
      color: 'dark-shade-color',
      opacity: 0.8,
    },
  },
  theme: 'dark',
  gallery: [
    {
      picture: {
        ...Component.defaultContent.gallery[0].picture,
        resourceRef: 'gallery-pic1.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        resourceRef: 'gallery-pic2.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        resourceRef: 'gallery-pic3.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        resourceRef: 'gallery-pic4.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        resourceRef: 'gallery-pic5.png',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'gallery-pic6.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: false, label: 'Image description', type: 'hidden'},
  caption: {defaultValue: false, label: 'Caption after body', type: 'hidden'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
