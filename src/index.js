import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-text/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  topIcon: {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 20' width='100%' height='100%'><path d='M5.93529094,0.31409375 C5.07232219,0.31409375 4.37279094,1.01365625 4.37279094,1.87659375 C4.37279094,2.73953125 5.07232219,3.43909375 5.93529094,3.43909375 C6.79822844,3.43909375 7.49779094,2.73953125 7.49779094,1.87659375 C7.49779094,1.01365625 6.79822844,0.31409375 5.93529094,0.31409375 Z M4.03097844,3.75159375 C2.90441594,3.80217188 1.70647844,4.35714375 0.700915937,5.12854688 L0.593478437,6.30042188 C1.54354094,5.92837188 2.51838469,5.9322625 2.81029094,6.818 C3.52107219,8.97259063 1.09254094,12.7430375 0.427478437,14.7183813 C-1.37674031,20.0775375 2.95313469,20.696725 6.04272844,18.4879125 L6.15991594,17.2183813 C4.47897844,17.7447563 3.27416594,17.098225 4.24585344,14.298475 C4.71400969,12.947975 8.63182219,6.14305938 5.92554094,4.26917188 C5.35888469,3.87673438 4.70694719,3.72124688 4.03097844,3.75159375 Z' id='Shape'></path></svg>",
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
