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
          ...Component.defaultContent.partners[0].logo.image,
          resourceRef: 'img1.png',
          width: 170,
          height: 80,
        },
      },
    },
    {
      ...Component.defaultContent.partners[1],
      logo: {
        ...Component.defaultContent.partners[1].logo,
        image: {
          ...Component.defaultContent.partners[1].logo.image,
          resourceRef: 'img2.png',
          width: 170,
          height: 80,
        },
      },
    },
    {
      ...Component.defaultContent.partners[2],
      logo: {
        ...Component.defaultContent.partners[2].logo,
        image: {
          ...Component.defaultContent.partners[2].logo.image,
          resourceRef: 'img3.png',
          width: 170,
          height: 80,
        },
      },
    },
    {
      ...Component.defaultContent.partners[3],
      logo: {
        ...Component.defaultContent.partners[3].logo,
        image: {
          ...Component.defaultContent.partners[3].logo.image,
          resourceRef: 'img4.png',
          width: 170,
          height: 80,
        },
      },
    },
  ],
  button: {
    ...Component.defaultContent.button,
    type: 'secondary',
    size: 'lg',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17"><path d="M18.6 3.35h-5.314v-.666c0-2.834-2.688-2.668-2.688-2.668H9.327C6.494.016 6.64 2.704 6.64 2.704v.646H1.306C-.049 3.35 0 4.684 0 4.684v2.605s5.688 2.07 9.946 2.07c4.653 0 10.028-2.09 10.028-2.09V4.684c0-1.397-1.375-1.334-1.375-1.334zM8.433 2.629c0-1.334 1.565-1.355 1.565-1.355 1.59 0 1.541 1.375 1.541 1.375v.668H8.434v-.688zm3.206 6.235l-3.304.002V7.592h3.304v1.272z"/><path d="M19.974 14.877V8.23s-4.327 1.992-10.057 1.992C4.647 10.223 0 8.168 0 8.168v6.709c0 1.354 1.285 1.334 1.285 1.334H18.62c1.438 0 1.354-1.334 1.354-1.334zm-8.334-3.514c0 .456-.37.826-.825.826H9.161a.826.826 0 0 1-.825-.826v-.853h3.304v.853z"/></svg>',
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Partner title', type: 'hidden'},
  body: {defaultValue: false, label: 'About partner', type: 'hidden'},
  link: {defaultValue: false, label: 'Partner link', type: 'hidden'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
