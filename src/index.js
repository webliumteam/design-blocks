import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: [
    {
      ...Component.defaultContent.articles[0],
      title: {
        ...Component.defaultContent.articles[0].title,
        content: 'EXPERIENCE',
      },
      iconImage: {
        ...Component.defaultContent.articles[0].iconImage,
        resourceRef: 'why_01.png',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      title: {
        ...Component.defaultContent.articles[1].title,
        content: 'SUPPORT',
      },
      iconImage: {
        ...Component.defaultContent.articles[1].iconImage,
        resourceRef: 'why_02.png',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      title: {
        ...Component.defaultContent.articles[2].title,
        content: 'TECHNOLOGIES',
      },
      iconImage: {
        ...Component.defaultContent.articles[2].iconImage,
        resourceRef: 'why_03.png',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: '- WHY CHOOSE US -',
  },
  description: {
    ...Component.defaultContent.description,
    content: 'Still have some hesitations whether cooperation with us is worth the trouble? Check the reasons why you should choose us among other companies!',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    textValue: 'LEARN MORE',
    type: 'link',
  },
  'button-2': {
    ...Component.defaultContent['button-2'],
    textValue: 'REQUEST A QUOTE',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  'item-description': {defaultValue: true, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: true, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
