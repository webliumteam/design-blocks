import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-process_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-process_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      ...Component.defaultContent.steps[0],
      background: {
        type: 'color',
        color: 'dark-shade-color?lighten=15',
      },
    },
    {
      ...Component.defaultContent.steps[0],
      background: {
        type: 'color',
        color: 'dark-shade-color?lighten=30',
      },
    },
    {
      ...Component.defaultContent.steps[0],
      background: {
        type: 'color',
        color: 'dark-shade-color?lighten=45',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
