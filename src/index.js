import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  blog: [
    {
      ...Component.defaultContent.blog[0],
      picture: {
        resourceRef: 'img1.jpg',
        alt: 'Article illustration photo',
      },
    },
    {
      ...Component.defaultContent.blog[1],
      picture: {
        resourceRef: 'img2.jpg',
        alt: 'Article illustration photo',
      },
    },
    {
      ...Component.defaultContent.blog[2],
      picture: {
        resourceRef: 'img3.jpg',
        alt: 'Article illustration photo',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
