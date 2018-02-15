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
      color: 'var(--ui-dark-shade-color)',
      opacity: 0.8,
    },
  },
  theme: 'dark',
  title: 'Gallery',
  subtitle:
    'Look through our photos to see who we are, what we do, how we work, and what inspires us.',
  gallery: [
    {
      title: 'Construction consultant',
      picture: {
        resourceRef: 'gallery-pic1.png',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
      caption: 'Design & Build',
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Construction consultant',
      picture: {
        resourceRef: 'gallery-pic2.png',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
      caption: 'Design & Build',
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Construction consultant',
      picture: {
        resourceRef: 'gallery-pic3.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
      caption: 'Design & Build',
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'Construction consultant',
      picture: {
        resourceRef: 'gallery-pic4.png',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
      caption: 'Design & Build',
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'Construction consultant',
      picture: {
        resourceRef: 'gallery-pic5.png',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
      caption: 'Design & Build',
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Construction consultant',
      picture: {
        resourceRef: 'gallery-pic6.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: 'Design & Build',
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'body-text': {defaultValue: true, label: 'Image description', type: 'checkbox'},
  caption: {defaultValue: true, label: 'Caption after body', type: 'hidden'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
