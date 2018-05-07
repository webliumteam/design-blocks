import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-numbers/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...ExtendedWireframe.defaultContent,
  numbers: [
    {
      ...ExtendedWireframe.defaultContent.numbers[0],
      title: {
        content: 'Increase <br>profits by',
        type: 'caption',
      },
    },
    {
      ...ExtendedWireframe.defaultContent.numbers[1],
      title: {
        content: 'Expand market <br>reach for',
        type: 'caption',
      },
    },
    {
      ...ExtendedWireframe.defaultContent.numbers[2],
      title: {
        content: 'Improve customer <br>satisfaction for',
        type: 'caption',
      },
    },
  ],
  topIcon: {
    svg: '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20"><path d="M17.513 1.667h-7.5V.833a.833.833 0 0 0-1.667 0v.834h-7.5a.833.833 0 0 0-.833.833v13.333c0 .46.373.833.834.833h3.651l-1.064 2.128a.833.833 0 1 0 1.491.745l1.437-2.873h5.636l1.436 2.873a.833.833 0 1 0 1.491-.745l-1.064-2.128h3.652c.46 0 .833-.373.833-.833V2.5a.833.833 0 0 0-.833-.833zm-2.637 5.339l-3.929 3.928a.833.833 0 0 1-1.178 0L8 9.166l-3.339 3.34a.83.83 0 0 1-1.178 0 .833.833 0 0 1 0-1.179L7.412 7.4a.833.833 0 0 1 1.179 0l1.767 1.767 3.34-3.339a.833.833 0 0 1 1.178 1.179z"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  body: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  'number-title': {
    defaultValue: true,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
