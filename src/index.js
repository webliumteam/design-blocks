import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-process/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  topIcon: {
    svg:
      '<svg viewBox="0 0 15 20" width="15" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.83 14.989c1.077.369 2.029.604 3.396 1.024-.525 6.637-6.802 4.001-3.397-1.024zm5.603-6.097c-.071-1.993-.422-4.607-3.218-4.198-1.31.343-2.279 1.782-2.734 4.265-.25 1.366-.105 3.282.19 4.431.27.81.178.76.467.914 1.121.253 2.23.532 3.36.817 1.148-.81 2.091-5.114 1.935-6.23zm-8.629-.153c.295-1.15.44-3.066.19-4.431C5.54 1.824 4.572.385 3.26.043.464-.367.113 2.247.042 4.24-.114 5.355.83 9.66 1.977 10.47c1.13-.286 2.24-.565 3.36-.818.29-.153.198-.103.467-.913zM2.25 11.362c.525 6.637 6.801 4 3.397-1.025-1.078.37-2.03.605-3.397 1.025z" fill-rule="nonzero"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Step main text', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  heading: {defaultValue: true, label: 'Step title', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Step icon', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Process description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
