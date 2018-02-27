import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: '- Awards -',
    type: 'blockTitle',
  },
  awards: [
    {
      ...Component.defaultContent.awards[0],
      picture: {
        ...Component.defaultContent.awards[0].picture,
        resourceRef: 'awards_01.jpg',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      picture: {
        ...Component.defaultContent.awards[1].picture,
        resourceRef: 'awards_02.jpg',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      picture: {
        ...Component.defaultContent.awards[2].picture,
        resourceRef: 'awards_03.jpg',
      },
    },
    {
      ...Component.defaultContent.awards[3],
      picture: {
        ...Component.defaultContent.awards[3].picture,
        resourceRef: 'awards_04.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Awards title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
