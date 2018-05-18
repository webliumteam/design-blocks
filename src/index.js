import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-testimonials/src/options.json'
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
    resourceRef: 'bg_testimonials.jpg',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 20"><path d="M19.936 7.24c-.071-.22-.288-.359-.647-.414l-6.022-.876L10.568.492C10.4.164 10.204 0 9.98 0c-.232 0-.428.164-.587.492l-2.7 5.458-6.022.876c-.36.056-.575.193-.647.413-.072.22.02.458.276.714L4.666 12.2l-1.032 5.998c-.04.264-.016.47.073.617a.441.441 0 0 0 .407.222c.136 0 .296-.048.48-.144l5.387-2.831 5.386 2.831c.184.096.344.144.48.144.184 0 .32-.074.408-.222.087-.148.111-.353.071-.617L15.295 12.2l4.354-4.247c.264-.256.36-.494.287-.714zm-5.71 3.856l-.587.564.144.792.72 4.258-3.815-2.015-.708-.372V2.771l1.908 3.863.36.72.791.12 4.27.623-3.082 3z"/></svg>',
    fill: 'brand-color',
  },
  testimonials: [
    {
      ...Component.defaultContent.testimonials[0],
      position: {
        ...Component.defaultContent.testimonials[0].position,
        content: 'MARKETING DIRECTOR AT FRESH FOOD CO.',
      },
      image: {
        ...Component.defaultContent.testimonials[0].image,
        resourceRef: 'tanja-heffner-196114.jpg',
      },
    },
    {
      ...Component.defaultContent.testimonials[1],
      position: {
        ...Component.defaultContent.testimonials[1].position,
        content: 'MARKETING DIRECTOR AT FRESH FOOD CO.',
      },
      image: {
        ...Component.defaultContent.testimonials[1].image,
        resourceRef: 'tanja-heffner-196114.jpg',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  publishDate: {defaultValue: false, label: 'Date of publishing', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
