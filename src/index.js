import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    type: 'blockTitle',
    content: 'Blog',
  },
  collection: {
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          image: {
            src: 'image-1.jpg',
          },
        },
        item_panel: {
          type: 'color',
          color: 'dark-shade-color',
          opacity: '0.85',
        },
        item_person_image: {
          src: 'mark.jpg',
          alt: 'Person image',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          image: {
            src: 'image-2.jpg',
          },
        },
        item_panel: {
          type: 'color',
          color: 'dark-shade-color',
          opacity: '0.85',
        },
        item_person_image: {
          src: 'mark.jpg',
          alt: 'Person image',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          image: {
            src: 'image-3.jpg',
          },
        },
        item_panel: {
          type: 'color',
          color: 'dark-shade-color',
          opacity: '0.85',
        },
        item_person_image: {
          src: 'mark.jpg',
          alt: 'Person image',
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'Medium button',
  },
}

ExtendedWireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  item_category: {defaultValue: true, label: 'Blog category', type: 'checkbox'},
  item_person_image: {defaultValue: true, label: 'Author picture', type: 'checkbox'},
  item_person: {defaultValue: true, label: 'Author name', type: 'checkbox'},
  item_date_icon: {defaultValue: true, label: 'Blog date icon', type: 'checkbox'},
  item_date: {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  button: {defaultValue: true, label: 'Block button', type: 'checkbox'},
}

export default ExtendedWireframe

