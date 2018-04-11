import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Manufacturing',
        type: 'heading',
      },
      text: {
        content: 'We use only high-quality materials for good manufacturing. All products are designed and manufactured in line with your preferences. Just choose the materials, send us design requirements, and we will contact with you shortly to discuss the details.',
        type: 'text',
      },
      picture: {
        resourceRef: 'joanna-kosinska-340749-unsplash.jpg',
        alt: 'Manufacturing illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Delivery and Support',
        type: 'heading',
      },
      text: {
        content: 'We provide a package of services that ensure the aftersales technical service and diagnostics. We guarantee that our goods will please you for many years, and you will enjoy decent support of our specialists.',
        type: 'text',
      },
      picture: {
        resourceRef: 'lior-mazliah-111379-unsplash.jpg',
        alt: 'Delivery and Support illustration',
      },
      cta: {
        actionConfig: {
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true},
}

export default ExtendedWireframe
