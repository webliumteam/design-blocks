import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      ...Component.defaultContent.steps[0],
      picture: {
        ...Component.defaultContent.steps[0].picture,
        resourceRef: 'process01.jpg',
      },
    },
    {
      ...Component.defaultContent.steps[1],
      picture: {
        ...Component.defaultContent.steps[1].picture,
        resourceRef: 'process02.jpg',
      },
    },
    {
      ...Component.defaultContent.steps[2],
      picture: {
        ...Component.defaultContent.steps[2].picture,
        resourceRef: 'process03.jpg',

      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Process description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
