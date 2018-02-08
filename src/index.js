import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  awards: [
    {
      id: '8130928a-e7c6-4e26-a3ca-a820fa36380e',
      title: 'R&D Leader in Tech (2017)',
      picture: {
        resourceRef: 'awards_01.jpg',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '057c27bf-4977-4b28-bf35-f4a6db60d5aa',
      title: 'Most Innovative B2B Solutions (2016)',
      picture: {
        resourceRef: 'awards_02.jpg',
        alt: 'Award illustration photo',
      },
    },
    {
      id: 'c8e93041-896b-4b78-b8d0-37e21a79070f',
      title: 'Best Customer-Focused Approach on the World Conference (2014)',
      picture: {
        resourceRef: 'awards_03.jpg',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '3ea9fdda-c0e6-418e-9bfe-7bf1b06a534d',
      title: 'Leader of Innovation (2012)',
      picture: {
        resourceRef: 'awards_04.jpg',
        alt: 'Award illustration photo',
      },
    },
  ],
  title: '- Awards -',
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
