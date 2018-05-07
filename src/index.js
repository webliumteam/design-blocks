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
        ...Component.defaultContent.partners[0].logo,
        image: {
          resourceRef: 'andote.jpg',
          width: 130,
          height: 80,
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        ...Component.defaultContent.partners[1].logo,
        image: {
          resourceRef: 'cribspot.jpg',
          width: 130,
          height: 80,
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        ...Component.defaultContent.partners[2].logo,
        image: {
          resourceRef: 'astrohaus.jpg',
          width: 130,
          height: 80,
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        ...Component.defaultContent.partners[3],
        image: {
          resourceRef: 'cradled.jpg',
          width: 130,
          height: 80,
        },
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
}

export default ExtendedWireframe
