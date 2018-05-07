import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-1-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: [
    {
      ...Component.defaultContent.partners[0],
      logo: {
        image: {
          resourceRef: 'allexa.png',
          width: 130,
          height: 62,
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        image: {
          resourceRef: 'brownie.png',
          width: 130,
          height: 62,
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        image: {
          resourceRef: 'nord.png',
          width: 130,
          height: 62,
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        image: {
          resourceRef: 'johnson.png',
          width: 130,
          height: 62,
        },
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
