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
      title: {
        content: 'Quantum CEO & our partners',
        type: 'text',
      },
      picture: {
        src: 'img_1.jpg',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'Digital Marketing workshop lecturer',
        type: 'text',
      },
      picture: {
        src: 'img_2.jpg',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'Quantum Company at WebSummit',
        type: 'text',
      },
      picture: {
        src: 'img_3.jpg',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'UX workshop attendees',
        type: 'text',
      },
      picture: {
        src: 'img_4.jpg',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'UX workshop lecturer',
        type: 'text',
      },
      picture: {
        src: 'img_5.jpg',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
    {
      title: {
        content: 'Quantum team',
        type: 'text',
      },
      picture: {
        src: 'img_6.jpg',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: {
        content: 'Design & build',
        type: 'caption',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false},
}

export default ExtendedWireframe
