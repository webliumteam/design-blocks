import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-gallery/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  gallery: [
    {
      image: {
        ...Component.defaultContent.gallery[0].image,
        resourceRef: 'benjamin-wong-388833-unsplash.jpg',
      },
    },
    {
      image: {
        ...Component.defaultContent.gallery[1].image,
        resourceRef: 'bookblock-363195-unsplash.jpg',
      },
    },
    {
      image: {
        ...Component.defaultContent.gallery[2].image,
        resourceRef: 'emma-tsui-492731-unsplash.jpg',
      },
    },
    {
      image: {
        ...Component.defaultContent.gallery[3].image,
        resourceRef: 'freddy-castro-133326-unsplash.jpg',
      },
    },
    {
      image: {
        ...Component.defaultContent.gallery[4].image,
        resourceRef: 'heather-schwartz-512780-unsplash.jpg',
      },
    },
    {
      image: {
        ...Component.defaultContent.gallery[5].image,
        resourceRef: 'joanna-kosinska-254405-unsplash.jpg',
      },
    },
    {
      image: {
        ...Component.defaultContent.gallery[6].image,
        resourceRef: 'nordwood-themes-452444-unsplash.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Gallery description', type: 'checkbox'},
}

export default ExtendedWireframe
