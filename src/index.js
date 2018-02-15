import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

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
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        resourceRef: 'gallery-pic2.png',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        resourceRef: 'gallery-pic3.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        resourceRef: 'gallery-pic4.png',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        resourceRef: 'gallery-pic5.png',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
    },
    {
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'gallery-pic6.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: true, label: 'Image description', type: 'checkbox'},
  caption: {defaultValue: true, label: 'Caption after body', type: 'checkbox'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
