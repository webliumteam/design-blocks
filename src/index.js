import $editor from 'weblium/editor'

import Component from 'wireframe-series-9-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    background: {
      'nth-child': [
        ['1', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '1.jpg',
          imageColor: [0, 0, 0],
        }],
        ['2', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '2.jpg',
          imageColor: [0, 0, 0],
        }],
        ['3', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '3.jpg',
          imageColor: [0, 0, 0],
        }],
        ['4', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '4.jpg',
          imageColor: [0, 0, 0],
        }],
        ['5', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '5.jpg',
          imageColor: [0, 0, 0],
        }],
        ['6', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '6.jpg',
          imageColor: [0, 0, 0],
        }],
      ],
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default ExtendedWireframe
