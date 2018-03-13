import $editor from 'weblium/editor'

import Component from 'wireframe-series-1-partners/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Partners.',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Case nulla deserunt ut eos. Magna persecuti ut vis, ex legimus civibus complectitur mea. Sumo vitae definitionem in nam.',
    type: 'subtitle',
  },
  partners: [
    {
      logo: {
        image: {
          resourceRef: 'img1.png',
          width: 170,
          height: 80,
        },
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
      logo: {
        image: {
          resourceRef: 'img2.png',
          width: 170,
          height: 80,
        },
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
      logo: {
        image: {
          resourceRef: 'img3.png',
          width: 170,
          height: 80,
        },
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
      logo: {
        image: {
          resourceRef: 'img4.png',
          width: 170,
          height: 80,
        },
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
    textValue: 'All partners',
    type: 'secondary',
    size: 'lg',
  },
  topIcon: {
    svg: '<svg width="20px" height="17px" xmlns="http://www.w3.org/2000/svg"><g><path d="M18.6 3.35h-5.314v-.666c0-2.834-2.688-2.668-2.688-2.668H9.327C6.494.016 6.64 2.704 6.64 2.704v.646H1.306C-.049 3.35 0 4.684 0 4.684v2.605s5.688 2.07 9.946 2.07c4.653 0 10.028-2.09 10.028-2.09V4.684c0-1.397-1.375-1.334-1.375-1.334zM8.433 2.629c0-1.334 1.565-1.355 1.565-1.355 1.59 0 1.541 1.375 1.541 1.375v.668H8.434v-.688zm3.206 6.235l-3.304.002V7.592h3.304v1.272z"/><path d="M19.974 14.877V8.23s-4.327 1.992-10.057 1.992C4.647 10.223 0 8.168 0 8.168v6.709c0 1.354 1.285 1.334 1.285 1.334H18.62c1.438 0 1.354-1.334 1.354-1.334zm-8.334-3.514c0 .456-.37.826-.825.826H9.161a.826.826 0 0 1-.825-.826v-.853h3.304v.853z"/></g></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: false, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: false, label: 'Partner link', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
