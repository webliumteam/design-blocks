import $editor from 'weblium/editor'

import Component from 'wireframe-series-10-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    items: [{
      ...Component.defaultContent.collection.items[0],
      item_image: {
        resourceRef: 'andote.jpg',
      },
    },
    {
      ...Component.defaultContent.collection.items[0],
      item_image: {
        resourceRef: 'cradled.jpg',
      },
    },
    {
      ...Component.defaultContent.collection.items[0],
      item_image: {
        resourceRef: 'cribspot.jpg',
      },
    },
    {
      ...Component.defaultContent.collection.items[0],
      item_image: {
        resourceRef: 'fresh.jpg',
      },
    },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partners description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
