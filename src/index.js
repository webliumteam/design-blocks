import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  partners: {
    items: [
      {
        ...Component.defaultContent.partners[0],
        logo: {
          ...Component.defaultContent.partners[0].logo,
          resourceRef: 'cribspot.jpg',
          alt: 'sumsung',
          width: 220,
          height: 122,
        },
      },
      {
        title: {
          content: 'Ford',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Ford.</span> This is our moving force, literally! 100% reliable and credible.',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'fresh.jpg',
            alt: 'ford',
            width: 220,
            height: 122,
          },
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
          textValue: 'Learn more',
          type: 'link',
        },
      },
      {
        title: {
          content: 'Medical Family',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Medical Family.</span> Ensuring good health and medical care for our team for 5 years.',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'leap.jpg',
            alt: 'medical',
            width: 220,
            height: 122,
          },
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
          textValue: 'Learn more',
          type: 'link',
        },
      },
      {
        title: {
          content: 'Coffee Break Now',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Coffee Break Now.</span> We love their delicious coffee and flavored cakes!',
          type: 'text',
        },
        logo: {
          image: {
            resourceRef: 'nothingmagical.jpg',
            alt: 'Coffee',
            width: 220,
            height: 122,
          },
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
          textValue: 'Learn more',
          type: 'link',
        },
      },
    ],
  },
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Here are some of our trusted partners who help us deliver the best services and solutions for clients. Want to become our partner? Contact us, and we’ll discuss the details of possible cooperation.',
    type: 'subtitle',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
}

export default ExtendedWireframe
