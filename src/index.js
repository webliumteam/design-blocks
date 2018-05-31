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
  collection: {
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_title: {
          ...Component.defaultContent.collection.items[0].item_title,
          content: 'Brand image',
        },
        item_body: {
          ...Component.defaultContent.collection.items[0].item_body,
          content: 'We guard your brand, help draw new workers, and build positive working conditions by preserving your facility clean with the ShinyHouse services.',
        },
        item_category: {
          ...Component.defaultContent.collection.items[0].item_category,
          content: 'Positive working conditions',
        },
        item_image: {
          ...Component.defaultContent.collection.items[0].item_image,
          resourceRef: '1.png',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_title: {
          ...Component.defaultContent.collection.items[1].item_title,
          content: 'Safety guarantee',
        },
        item_body: {
          ...Component.defaultContent.collection.items[1].item_body,
          content: 'A clean working place means it is a safe one. Greasy, sticky, and dirty floors may result in slips and falls. We can proudly guarantee you properly cleaned facility’s floors.',
        },
        item_category: {
          ...Component.defaultContent.collection.items[1].item_category,
          content: 'Safe working place',
        },
        item_image: {
          ...Component.defaultContent.collection.items[1].item_image,
          resourceRef: '2.png',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_title: {
          ...Component.defaultContent.collection.items[2].item_title,
          content: 'Productivity',
        },
        item_body: {
          ...Component.defaultContent.collection.items[2].item_body,
          content: 'Clean work environment supports good mental and physical health. The facility serviced by a ShinyHouse not only seems nice but can also play a positive role in growing productivity.',
        },
        item_category: {
          ...Component.defaultContent.collection.items[2].item_category,
          content: 'Helping in productivity growth',
        },
        item_image: {
          ...Component.defaultContent.collection.items[2].item_image,
          resourceRef: '3.png',
        },
      },
    ],
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Advantages',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  item_button: {defaultValue: false, label: 'Post link', type: 'hidden'},
}

export default ExtendedWireframe
