import $editor from 'weblium/editor'

import Component from 'wireframe-series-9-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    background: {
      'nth-child': [
        ['1', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '1.jpg',
          imageColor: [216, 216, 216],
        }],
        ['2', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '2.jpg',
          imageColor: [216, 216, 216],
        }],
        ['3', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '3.jpg',
          imageColor: [216, 216, 216],
        }],
        ['4', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '4.jpg',
          imageColor: [216, 216, 216],
        }],
        ['5', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '5.jpg',
          imageColor: [216, 216, 216],
        }],
        ['6', {
          ...Component.defaultContent.collection.background['nth-child'][0][1],
          src: '6.jpg',
          imageColor: [216, 216, 216],
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
