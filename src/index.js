import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-awards/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  awards: [
    {
      ...Component.defaultContent.awards[0],
      picture: {
        ...Component.defaultContent.awards[0].picture,
        resourceRef: '1.png',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      picture: {
        ...Component.defaultContent.awards[1].picture,
        resourceRef: '2.png',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      picture: {
        ...Component.defaultContent.awards[2].picture,
        resourceRef: '3.png',
      },
    },
    {
      ...Component.defaultContent.awards[3],
      picture: {
        ...Component.defaultContent.awards[3].picture,
        resourceRef: '4.png',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary-alt',
  },
  background: {
    type: 'image',
    position: {
      type: 'tile',
    },
    resourceRef: 'bg.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Awards title', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
