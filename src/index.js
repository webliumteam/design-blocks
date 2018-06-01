import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-services/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: {
    ...Component.defaultContent.services,
    items: [
      {
        ...Component.defaultContent.services.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          src: 'jack-kaminski-129845-unsplash.jpg',
        },
      },
      {
        ...Component.defaultContent.services.items[1],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          src: 'julien-pianetti-230463-unsplash.jpg',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Service description', type: 'checkbox'},
  'item-desc': {defaultValue: false, label: 'Service details', type: 'hidden'},
}

export default ExtendedWireframe
