import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-text/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 20"><path d="M5.935.314a1.562 1.562 0 1 0 0 3.125 1.562 1.562 0 0 0 0-3.125zM4.031 3.752c-1.127.05-2.325.605-3.33 1.377L.593 6.3c.95-.372 1.925-.368 2.217.518.711 2.155-1.717 5.925-2.383 7.9-1.804 5.36 2.526 5.979 5.616 3.77l.117-1.27c-1.681.527-2.886-.12-1.914-2.92.468-1.35 4.386-8.155 1.68-10.029-.567-.392-1.22-.548-1.895-.517z"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
