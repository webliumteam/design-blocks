import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg-testimonials.png',
  },
  testimonials: [
    {
      ...Component.defaultContent.testimonials[0],
      image: {
        resourceRef: 'photo.png',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      image: {
        resourceRef: 'photo.png',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
  cta: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    type: 'secondary-alt',
    size: 'lg',
    textValue: 'Learn more',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  publishDate: {defaultValue: false, label: 'Date of publishing', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
