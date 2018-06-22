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
        background: {
          type: 'color',
          color: '#eee',
        },
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.2)',
        },
        item_category: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item_heading: {
          type: 'heading',
          content: 'How to Increase Profits in Retail Business with Our New Product?',
        },
        item_person: {
          type: 'text',
          content: 'By Ben Moss',
        },
        item_person_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Person image',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg viewBox="0 0 32.857 32.857"><path d="M16.43 32.857C7.37 32.857 0 25.489 0 16.432 0 7.371 7.37 0 16.43 0c9.059 0 16.428 7.371 16.428 16.432-.001 9.057-7.37 16.425-16.428 16.425zM16.43 1C7.922 1 1 7.923 1 16.432c0 8.506 6.922 15.426 15.43 15.426 8.507 0 15.428-6.92 15.428-15.426C31.857 7.923 24.937 1 16.43 1z"/><path d="M21.205 22.701a.497.497 0 0 1-.385-.182l-4.775-5.77a.499.499 0 0 1-.115-.318V6.844a.5.5 0 0 1 1 0v9.408l4.66 5.631a.499.499 0 0 1-.385.818z"/></svg>',
          fill: 'brand-color',
        },
      },
      {
        background: {
          type: 'color',
          color: '#eee',
        },
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.2)',
        },
        item_category: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item_heading: {
          type: 'heading',
          content: 'How to Increase Profits in Retail Business with Our New Product?',
        },
        item_person: {
          type: 'text',
          content: 'By Ben Moss',
        },
        item_person_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Person image',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg viewBox="0 0 32.857 32.857"><path d="M16.43 32.857C7.37 32.857 0 25.489 0 16.432 0 7.371 7.37 0 16.43 0c9.059 0 16.428 7.371 16.428 16.432-.001 9.057-7.37 16.425-16.428 16.425zM16.43 1C7.922 1 1 7.923 1 16.432c0 8.506 6.922 15.426 15.43 15.426 8.507 0 15.428-6.92 15.428-15.426C31.857 7.923 24.937 1 16.43 1z"/><path d="M21.205 22.701a.497.497 0 0 1-.385-.182l-4.775-5.77a.499.499 0 0 1-.115-.318V6.844a.5.5 0 0 1 1 0v9.408l4.66 5.631a.499.499 0 0 1-.385.818z"/></svg>',
          fill: 'brand-color',
        },
      },
      {
        background: {
          type: 'color',
          color: '#eee',
        },
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.2)',
        },
        item_category: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item_heading: {
          type: 'heading',
          content: 'How to Increase Profits in Retail Business with Our New Product?',
        },
        item_person: {
          type: 'text',
          content: 'By Ben Moss',
        },
        item_person_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Person image',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg viewBox="0 0 32.857 32.857"><path d="M16.43 32.857C7.37 32.857 0 25.489 0 16.432 0 7.371 7.37 0 16.43 0c9.059 0 16.428 7.371 16.428 16.432-.001 9.057-7.37 16.425-16.428 16.425zM16.43 1C7.922 1 1 7.923 1 16.432c0 8.506 6.922 15.426 15.43 15.426 8.507 0 15.428-6.92 15.428-15.426C31.857 7.923 24.937 1 16.43 1z"/><path d="M21.205 22.701a.497.497 0 0 1-.385-.182l-4.775-5.77a.499.499 0 0 1-.115-.318V6.844a.5.5 0 0 1 1 0v9.408l4.66 5.631a.499.499 0 0 1-.385.818z"/></svg>',
          fill: 'brand-color',
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

