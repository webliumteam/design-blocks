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
      title: {
        content: 'R&D Leader in Tech (2017)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'awards-img-1.png',
        alt: 'R&D Leader in Tech photo',
      },
    },
    {
      title: {
        content: 'Most Innovative B2B Solutions (2016)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'awards-img-2.png',
        alt: 'Most Innovative B2B Solutions photo',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'awards-img-3.png',
        alt: 'Best Service Provider',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'awards-img-4.png',
        alt: 'Leader of Innovation photo',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'awards-img-5.png',
        alt: 'Leader of Innovation photo',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'awards-img-6.png',
        alt: 'Leader of Innovation photo',
      },
    },
  ],
  title: {
    content: 'Our Certificates',
    type: 'blockTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  heading: {defaultValue: false, label: 'Awards title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
