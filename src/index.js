import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: [
    {
      ...Component.defaultContent.partners[0],
      picture: {
        ...Component.defaultContent.partners[0].picture,
        resourceRef: 'allexa.png',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
    },
    {
      ...Component.defaultContent.partners[1],
      picture: {
        ...Component.defaultContent.partners[1].picture,
        resourceRef: 'brownie.png',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
    },
    {
      ...Component.defaultContent.partners[2],
      picture: {
        ...Component.defaultContent.partners[2].picture,
        resourceRef: 'nord.png',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
    },
    {
      ...Component.defaultContent.partners[3],
      picture: {
        ...Component.defaultContent.partners[3].picture,
        resourceRef: 'johnson.png',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'hidden'},
}

export default ExtendedWireframe
