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
      logo: {
        ...Component.defaultContent.partners[0].logo,
        image: {
          resourceRef: 'andote.jpg',
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        ...Component.defaultContent.partners[1].logo,
        image: {
          resourceRef: 'cribspot.jpg',
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        ...Component.defaultContent.partners[2].logo,
        image: {
          resourceRef: 'astrohaus.jpg',
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        ...Component.defaultContent.partners[3],
        image: {
          resourceRef: 'cradled.jpg',
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
