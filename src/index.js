import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  partners: [
    {
      picture: {
        resourceRef: 'allexa.png',
        alt: 'Samsung logo',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: {
        content: 'Samsung',
        type: 'heading',
      },
      desc: {
        content: 'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      picture: {
        resourceRef: 'brownie.png',
        alt: 'Ford logo',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: {
        content: 'Ford ',
        type: 'heading',
      },
      desc: {
        content: 'The company that has always put reliability first. We started to work with Ford in 2002, and now this is one of the partners who’ve been with us for more than 15 years! We believe that this partnership is one of the achievements we can be proud of.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      picture: {
        resourceRef: 'nord.png',
        alt: 'Medical Family logo',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: {
        content: 'Medical Family',
        type: 'heading',
      },
      desc: {
        content: 'Health of our team members is a top priority for us. Therefore, we work with the best clinics only, like Medical Family. We entrust our health to them and we entrust our business as well.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      picture: {
        resourceRef: 'johnson.png',
        alt: 'Coffee Break Now',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, starting workshops and seminars, and up to everyday meal for our team members.',
        type: 'text',
      },
      button: {
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
        textValue: 'Partner’s website',
        type: 'link',
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
