import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  cover: [
    {
      ...Component.defaultContent.cover[0],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'General Contractor',
      },
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: 'Driven by Passion for Craft and Design',
        color: 'dark-shade-color',
        brightness: 50,
      },
      cta: {
        ...Component.defaultContent.cta,
        textValue: 'View projects',
      },
    },
    {
      ...Component.defaultContent.cover[1],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'General Contractor',
      },
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: 'Driven by Passion for Craft and Design',
        color: 'dark-shade-color',
        brightness: 50,
      },
      cta: {
        ...Component.defaultContent.cta,
        textValue: 'View projects',
      },
    },
    {
      ...Component.defaultContent.cover[2],
      title: {
        ...Component.defaultContent.cover[0].title,
        content: 'General Contractor',
      },
      subtitle: {
        ...Component.defaultContent.cover[0].subtitle,
        content: 'Driven by Passion for Craft and Design',
        color: 'dark-shade-color',
        brightness: 50,
      },
      cta: {
        ...Component.defaultContent.cta,
        textValue: 'View projects',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
