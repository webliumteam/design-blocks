import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  articles: {
    background: {
      'nth-child': [
        ['5n+1', {
          color: 'brand-color?lighten=10',
          type: 'color',
        }],
        ['5n+2', {
          color: 'brand-color?lighten=5',
          type: 'color',
        }],
        ['5n+3', {
          color: 'brand-color',
          type: 'color',
        }],
        ['5n+4', {
          color: 'brand-color?darken=4.9',
          type: 'color',
        }],
        ['5n+5', {
          color: 'brand-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.articles[0],
        icon: {
          svg:
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path fill="currentColor" d="M400.388,175.787c-1.707-3.413-4.267-5.12-7.68-5.12H292.015L391.855,12.8c1.707-2.56,1.707-5.973,0-8.533 S387.588,0,384.175,0H247.642c-3.413,0-5.973,1.707-7.68,4.267l-128,256c-1.707,2.56-1.707,5.973,0,8.533 c1.707,2.56,5.12,4.267,7.68,4.267h87.893l-95.573,227.84c-1.707,3.413,0,7.68,3.413,10.24c0.853,0.853,2.56,0.853,4.267,0.853 c2.56,0,5.12-0.853,6.827-2.56l273.067-324.267C401.242,182.613,402.095,179.2,400.388,175.787z M149.508,454.827l78.507-187.733 c0.853-2.56,0.853-5.12-0.853-7.68c-1.707-1.707-4.267-3.413-6.827-3.413h-87.04L252.762,17.067h116.053L268.122,174.933 c-1.707,2.56-1.707,5.973,0,8.533s4.267,4.267,7.68,4.267h98.987L149.508,454.827z"/></g></g></svg>',
          fill: 'light-shade-color',
        },
        description: {
          ...Component.defaultContent.articles[0].description,
          color: 'light-shade-color',
        },
        title: {
          ...Component.defaultContent.articles[0].title,
          color: 'light-shade-color',
        },
      },
      {
        ...Component.defaultContent.articles[1],
        icon: {
          svg:
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g transform="translate(1 1)"><g><path fill="currentColor" d="M424.813,154.307C416.28,73.24,351.427,8.387,271.213-0.147C266.093-0.147,260.973-1,255-1 c-5.973,0-11.093,0.853-16.213,0.853C158.573,9.24,93.72,74.093,85.187,154.307c-5.973,54.613,13.653,108.373,52.907,145.92 c21.333,20.48,34.987,44.373,40.107,67.413v100.693c0,5.12,3.413,8.533,8.533,8.533h12.8l15.36,20.48 C221.72,505.88,231.107,511,242.2,511h25.6c11.093,0,21.333-5.12,27.307-13.653l15.36-20.48h12.8c5.12,0,8.533-3.413,8.533-8.533 V367.64c4.267-23.04,18.773-46.933,40.107-67.413C411.16,261.827,430.787,208.92,424.813,154.307z M220.867,212.333H203.8 c-9.387,0-17.067-7.68-17.067-17.067s7.68-17.067,17.067-17.067s17.067,7.68,17.067,17.067V212.333z M272.067,357.4h-34.133v-128 h34.133V357.4z M314.733,374.467v17.067h-25.6c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h25.6v17.067h-51.2 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h51.2V459.8H306.2H203.8h-8.533v-17.067h25.6 c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-25.6V408.6h51.2c5.12,0,8.533-3.413,8.533-8.533 c0-5.12-3.413-8.533-8.533-8.533h-51.2v-17.067H314.733z M281.453,487.107c-3.413,4.267-8.533,6.827-13.653,6.827h-25.6 c-5.12,0-10.24-2.56-13.653-6.827l-7.68-10.24h68.267L281.453,487.107z M359.96,287.427 c-21.333,21.333-36.693,45.227-43.52,69.973h-27.307v-128H306.2c18.773,0,34.133-15.36,34.133-34.133 c0-18.773-15.36-34.133-34.133-34.133c-18.773,0-34.133,15.36-34.133,34.133v17.067h-34.133v-17.067 c0-18.773-15.36-34.133-34.133-34.133s-34.133,15.36-34.133,34.133c0,18.773,15.36,34.133,34.133,34.133h17.067v128H193.56 c-6.827-24.747-22.187-48.64-43.52-69.973c-35.84-34.133-52.907-81.92-47.787-131.413c8.533-72.533,66.56-130.56,139.093-139.093 c4.267,0,8.533-0.853,13.653-0.853c5.12,0,9.387,0.853,13.653,0.853c72.533,8.533,131.413,66.56,139.093,139.093 C412.867,205.507,395.8,253.293,359.96,287.427z M289.133,212.333v-17.067c0-9.387,7.68-17.067,17.067-17.067 c9.387,0,17.067,7.68,17.067,17.067s-7.68,17.067-17.067,17.067H289.133z"/></g></g></svg>',
          fill: 'light-shade-color',
        },
        description: {
          ...Component.defaultContent.articles[0].description,
          color: 'light-shade-color',
        },
        title: {
          ...Component.defaultContent.articles[0].title,
          color: 'light-shade-color',
        },
      },
      {
        ...Component.defaultContent.articles[2],
        icon: {
          svg:
            '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55.867 55.867" style="enable-background:new 0 0 55.867 55.867;" xml:space="preserve"><path fill="currentColor" d="M11.287,54.548c-0.207,0-0.414-0.064-0.588-0.191c-0.308-0.224-0.462-0.603-0.397-0.978l3.091-18.018L0.302,22.602 c-0.272-0.266-0.37-0.663-0.253-1.024c0.118-0.362,0.431-0.626,0.808-0.681l18.09-2.629l8.091-16.393 c0.168-0.342,0.516-0.558,0.896-0.558l0,0c0.381,0,0.729,0.216,0.896,0.558l8.09,16.393l18.091,2.629 c0.377,0.055,0.689,0.318,0.808,0.681c0.117,0.361,0.02,0.759-0.253,1.024L42.475,35.363l3.09,18.017 c0.064,0.375-0.09,0.754-0.397,0.978c-0.308,0.226-0.717,0.255-1.054,0.076l-16.18-8.506l-16.182,8.506 C11.606,54.51,11.446,54.548,11.287,54.548z M3.149,22.584l12.016,11.713c0.235,0.229,0.343,0.561,0.287,0.885L12.615,51.72 l14.854-7.808c0.291-0.154,0.638-0.154,0.931,0l14.852,7.808l-2.836-16.538c-0.056-0.324,0.052-0.655,0.287-0.885l12.016-11.713 l-16.605-2.413c-0.326-0.047-0.607-0.252-0.753-0.547L27.934,4.578l-7.427,15.047c-0.146,0.295-0.427,0.5-0.753,0.547L3.149,22.584z "/></svg>',
          fill: 'light-shade-color',
        },
        description: {
          ...Component.defaultContent.articles[0].description,
          color: 'light-shade-color',
        },
        title: {
          ...Component.defaultContent.articles[0].title,
          color: 'light-shade-color',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'button-primary': {defaultValue: false, label: 'Button', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'item-description': {defaultValue: true, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: true, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'hidden'},
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
