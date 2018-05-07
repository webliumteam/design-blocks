import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#ffffff',
  },
  blog: [
    {
      ...Component.defaultContent.blog[0],
      title: {
        ...Component.defaultContent.blog[0].title,
        content: 'Brand image',
      },
      description: {
        ...Component.defaultContent.blog[0].description,
        content: 'We guard your brand, help draw new workers, and build positive working conditions by preserving your facility clean with the ShinyHouse services.',
      },
      category: {
        ...Component.defaultContent.blog[0].category,
        content: 'Positive working conditions',
      },
      picture: {
        ...Component.defaultContent.blog[0].picture,
        resourceRef: '1.png',
      },
    },
    {
      ...Component.defaultContent.blog[1],
      title: {
        ...Component.defaultContent.blog[1].title,
        content: 'Safety guarantee',
      },
      description: {
        ...Component.defaultContent.blog[1].description,
        content: 'A clean working place means it is a safe one. Greasy, sticky, and dirty floors may result in slips and falls. We can proudly guarantee you properly cleaned facility’s floors.',
      },
      category: {
        ...Component.defaultContent.blog[1].category,
        content: 'Safe working place',
      },
      picture: {
        ...Component.defaultContent.blog[1].picture,
        resourceRef: '2.png',
      },
    },
    {
      ...Component.defaultContent.blog[2],
      title: {
        ...Component.defaultContent.blog[2].title,
        content: 'Productivity',
      },
      description: {
        ...Component.defaultContent.blog[2].description,
        content: 'Clean work environment supports good mental and physical health. The facility serviced by a ShinyHouse not only seems nice but can also play a positive role in growing productivity.',
      },
      category: {
        ...Component.defaultContent.blog[2].category,
        content: 'Helping in productivity growth',
      },
      picture: {
        ...Component.defaultContent.blog[2].picture,
        resourceRef: '3.png',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: 'Advantages',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  'post-link': {defaultValue: false, label: 'Post link', type: 'hidden'},
}

export default ExtendedWireframe
