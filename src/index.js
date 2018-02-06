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
      title: "America's Most Admired Corporations",
      picture: {
        resourceRef: '1.png',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '057c27bf-4977-4b28-bf35-f4a6db60d5aa',
      title: '100 Best Companies',
      picture: {
        resourceRef: '2.png',
        alt: 'Award illustration photo',
      },
    },
    {
      id: 'c8e93041-896b-4b78-b8d0-37e21a79070f',
      title: 'Best Places to Work for LGBT Equality',
      picture: {
        resourceRef: '3.png',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '3ea9fdda-c0e6-418e-9bfe-7bf1b06a534d',
      title: '2017 Employer Support Freedom Award',
      picture: {
        resourceRef: '4.png',
        alt: 'Award illustration photo',
      },
    },
  ],
  cta: {
    type: 'secondary-alt',
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
    textValue: 'Show More',
  },
  background: {
    type: 'image',
    position: {
      type: 'tile',
    },
    src: 'bg.jpg',
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
