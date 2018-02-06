import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  awards: [
    {
      id: '8130928a-e7c6-4e26-a3ca-a820fa36380e',
      title: "America's Most Admired Corporations",
      picture: {
        resourceRef: 'awards_01.jpg',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '057c27bf-4977-4b28-bf35-f4a6db60d5aa',
      title: '100 Best Companies',
      picture: {
        resourceRef: 'awards_02.jpg',
        alt: 'Award illustration photo',
      },
    },
    {
      id: 'c8e93041-896b-4b78-b8d0-37e21a79070f',
      title: 'Best Places to Work for LGBT Equality',
      picture: {
        resourceRef: 'awards_03.jpg',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '3ea9fdda-c0e6-418e-9bfe-7bf1b06a534d',
      title: '2017 Employer Support Freedom Award',
      picture: {
        resourceRef: 'awards_04.jpg',
        alt: 'Award illustration photo',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: '- Awards -',
  subtitle:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain',
  cta: {
    type: 'primary',
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Main button',
  },
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
