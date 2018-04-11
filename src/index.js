import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-services/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  services: [
    {
      title: {
        content: 'Quantum E-commerce',
        type: 'heading',
      },
      text: {
        content: 'Multipurpose program that will perfectly suit online stores and online retail business. You can add up to 2000 items with a detailed description, characteristics, and photos. Also, the shopping cart, clients’ feedback, rating, and related items option are available.',
        type: 'text',
      },
      picture: {
        resourceRef: 'jack-kaminski-129845-unsplash.jpg',
        alt: 'Quantum E-commerce illustration',
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
        content: 'Quantum Aftersales',
        type: 'heading',
      },
      text: {
        content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
        type: 'text',
      },
      picture: {
        resourceRef: 'julien-pianetti-230463-unsplash.jpg',
        alt: 'Quantum Aftersales illustration',
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
