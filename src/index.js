import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-services_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-services_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      ...Component.defaultContent.services[0],
      picture: {
        ...Component.defaultContent.services[0].picture,
        resourceRef: 'joanna-kosinska-340749-unsplash.jpg',
      },
    },
    {
      ...Component.defaultContent.services[1],
      picture: {
        ...Component.defaultContent.services[1].picture,
        resourceRef: 'lior-mazliah-111379-unsplash.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
}

export default ExtendedWireframe
