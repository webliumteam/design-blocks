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
        resourceRef: 'breather-196130.jpg',
        size: {
          'min-width: 1200px': 992,
          'min-width: 992px': 992,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
      caption: {
        ...Component.defaultContent.gallery[0].caption,
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.gallery[1],
      picture: {
        ...Component.defaultContent.gallery[1].picture,
        resourceRef: 'dane-deaner-272375.jpg',
        size: {
          'min-width: 1200px': 992,
          'min-width: 992px': 992,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
      caption: {
        ...Component.defaultContent.gallery[1].caption,
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.gallery[2],
      picture: {
        ...Component.defaultContent.gallery[2].picture,
        resourceRef: 'jaroslaw-ceborski-250955.jpg',
        size: {
          'min-width: 1200px': 992,
          'min-width: 992px': 992,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
      caption: {
        ...Component.defaultContent.gallery[2].caption,
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.gallery[3],
      picture: {
        ...Component.defaultContent.gallery[3].picture,
        resourceRef: 'elsa-noblet-341687.jpg',
        size: {
          'min-width: 1200px': 992,
          'min-width: 992px': 992,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
      caption: {
        ...Component.defaultContent.gallery[3].caption,
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.gallery[4],
      picture: {
        ...Component.defaultContent.gallery[4].picture,
        resourceRef: 'nathan-fertig-249917.jpg',
        size: {
          'min-width: 1200px': 992,
          'min-width: 992px': 992,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
      caption: {
        ...Component.defaultContent.gallery[4].caption,
        type: 'heading',
      },
    },
    {
      ...Component.defaultContent.gallery[5],
      picture: {
        ...Component.defaultContent.gallery[5].picture,
        resourceRef: 'stephen-di-donato-119064.jpg',
        size: {
          'min-width: 1200px': 992,
          'min-width: 992px': 992,
          'min-width: 768px': 992,
          'min-width: 480px': 768,
          'min-width: 320px': 480,
        },
      },
      caption: {
        ...Component.defaultContent.gallery[5].caption,
        type: 'heading',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16"><path d="M14.794 6.987c-.922.44-1.674 1.773-2.554.893-.535-.58-1.169-1.503-1.897-2.547-.788-1.122-1.793-2.088-2.975-.985C6.05 5.59 5.143 8.957 5.064 10.69l12.467.004c-.285-1.018-1.393-4.347-2.737-3.707z"/><circle cx="14.736" cy="3.499" r="1.533"/><path d="M19.408 0H3.188a.456.456 0 0 0-.456.456V2.76H.456A.456.456 0 0 0 0 3.216v11.748c0 .251.204.455.456.455h16.221a.456.456 0 0 0 .456-.455V12.66h2.276a.456.456 0 0 0 .455-.456V.456A.456.456 0 0 0 19.408 0zM15.91 14.196H1.223V3.984h1.509v7.1c-.23.884-.37 1.734-.4 2.366l12.468.004a14.34 14.34 0 0 0-.25-.794h1.36v1.536zm2.732-2.76H3.955V1.224H18.64v10.212z"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  caption: {defaultValue: true, label: 'Caption after body', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
