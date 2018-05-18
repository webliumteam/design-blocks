import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-awards/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: '- AWARDS -',
  },
  awards: [
    {
      ...Component.defaultContent.awards[0],
      title: {
        ...Component.defaultContent.awards[0].title,
        content: 'R&D LEADER IN TECH (2017)',
      },
      picture: {
        ...Component.defaultContent.awards[0].picture,
        resourceRef: 'awards_01.jpg',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      title: {
        ...Component.defaultContent.awards[1].title,
        content: 'MOST INNOVATIVE B2B SOLUTIONS (2016)',
      },
      picture: {
        ...Component.defaultContent.awards[1].picture,
        resourceRef: 'awards_02.jpg',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      title: {
        ...Component.defaultContent.awards[2].title,
        content: 'BEST SERVICE PROVIDER (2014)',
      },
      picture: {
        ...Component.defaultContent.awards[2].picture,
        resourceRef: 'awards_03.jpg',
      },
    },
    {
      ...Component.defaultContent.awards[3],
      title: {
        ...Component.defaultContent.awards[3].title,
        content: 'LEADER OF INNOVATION (2012)',
      },
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
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default ExtendedWireframe
