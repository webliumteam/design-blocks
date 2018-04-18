import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-pricing/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  products: [
    {
      ...Component.defaultContent.products[0],
      icon: {
        ...Component.defaultContent.products[0].icon,
        svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 70 70"><path d="M51.421,22.593L10,3.362V1c0-0.553-0.448-1-1-1S8,0.447,8,1v3v33v3v19c0,0.553,0.448,1,1,1s1-0.447,1-1V40.681l41.366-16.251c0.373-0.146,0.622-0.501,0.634-0.9C52.012,23.13,51.784,22.762,51.421,22.593z M10,38.533V37V5.566l38.46,17.857L10,38.533z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.products[0],
      icon: {
        ...Component.defaultContent.products[0].icon,
        svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 70 70"><path d="M51.371,3.146c-0.459-0.185-11.359-4.452-19.84,0.045C24.811,6.758,13.015,4.082,10,3.308V1c0-0.553-0.447-1-1-1S8,0.447,8,1v3c0,0.014,0.007,0.026,0.008,0.04C8.008,4.052,8,4.062,8,4.074V33v1.074V59c0,0.553,0.447,1,1,1s1-0.447,1-1V35.375c2.273,0.567,7.227,1.632,12.368,1.632c3.557,0,7.2-0.511,10.101-2.049c7.652-4.061,18.056,0.004,18.16,0.045c0.309,0.124,0.657,0.086,0.932-0.102C51.835,34.716,52,34.406,52,34.074v-30C52,3.665,51.751,3.298,51.371,3.146zM50,32.665c-3.26-1.038-11.646-3.096-18.469,0.525C24.812,36.756,13.02,34.082,10,33.308V33V5.375c3.853,0.961,15.381,3.343,22.469-0.417C39.035,1.475,47.627,3.973,50,4.777V32.665z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.products[0],
      icon: {
        ...Component.defaultContent.products[0].icon,
        svg:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 -15 70 70"><path d="M44.18,20l9.668-15.47c0.193-0.309,0.203-0.697,0.027-1.015C53.698,3.197,53.363,3,53,3H8V1c0-0.553-0.447-1-1-1S6,0.447,6,1v3v29v3v23c0,0.553,0.447,1,1,1s1-0.447,1-1V37h45c0.363,0,0.698-0.197,0.875-0.516c0.176-0.317,0.166-0.706-0.027-1.015L44.18,20z M8,35v-2V5h43.195l-9.043,14.47c-0.203,0.324-0.203,0.736,0,1.061L51.195,35H8z"/></svg>',
        fill: 'brand-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
