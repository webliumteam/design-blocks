import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-partners/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: {
    ...Component.defaultContent.partners,
    items: [
      {
        ...Component.defaultContent.partners.items[0],
        logo: {
          ...Component.defaultContent.partners.items[0].logo,
          image: {
            resourceRef: 'cribspot.jpg',
            alt: 'sumsung',
            width: 220,
            height: 122,
          },
        },
      },
      {
        ...Component.defaultContent.partners.items[1],
        logo: {
          ...Component.defaultContent.partners.items[1].logo,
          image: {
            resourceRef: 'fresh.jpg',
            alt: 'ford',
            width: 220,
            height: 122,
          },
        },
      },
      {
        ...Component.defaultContent.partners.items[2],
        logo: {
          ...Component.defaultContent.partners.items[2].logo,
          image: {
            resourceRef: 'leap.jpg',
            alt: 'medical',
            width: 220,
            height: 122,
          },
        },
      },
      {
        ...Component.defaultContent.partners.items[3],
        logo: {
          ...Component.defaultContent.partners.items[3].logo,
          image: {
            resourceRef: 'nothingmagical.jpg',
            alt: 'Coffee',
            width: 220,
            height: 122,
          },
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
}

export default ExtendedWireframe
