import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-awards/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  awards: [
    {
      ...Component.defaultContent.awards[0],
      picture: {
        ...Component.defaultContent.awards[0].picture,
        resourceRef: 'award1.png',
      },
    },
    {
      ...Component.defaultContent.awards[1],
      picture: {
        ...Component.defaultContent.awards[1].picture,
        resourceRef: 'award2.png',
      },
    },
    {
      ...Component.defaultContent.awards[2],
      picture: {
        ...Component.defaultContent.awards[2].picture,
        resourceRef: 'award3.png',
      },
    },
    {
      ...Component.defaultContent.awards[3],
      picture: {
        ...Component.defaultContent.awards[3].picture,
        resourceRef: 'award4.png',
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
  topIcon: {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 17'><path d='M15.9941935,1.00258065 C16.0070968,0.390967742 15.983871,0.00451612903 15.983871,0.00451612903 L10.0070968,0 L10.0070968,0 L9.97677419,0 L9.94645161,0 L9.94645161,0 L3.96903226,0.00451612903 C3.96903226,0.00451612903 3.94645161,0.390967742 3.95935484,1.00258065 L0,1.00258065 L0,1.65548387 C0,1.80451613 0.0251612903,5.32 2.19483871,7.24580645 C3.1,8.04903226 4.22903226,8.45290323 5.56,8.45354839 C5.76129032,8.45354839 5.9683871,8.44 6.17806452,8.42193548 C6.93419355,9.45741935 7.80774194,10.1825806 8.79032258,10.543871 L8.79032258,13.4116129 L5.90580645,13.4116129 L5.90580645,15.2077419 L4.95290323,15.2077419 L4.95290323,16.2148387 L9.94645161,16.2148387 L10.0070968,16.2148387 L15.0006452,16.2148387 L15.0006452,15.2083871 L14.0470968,15.2083871 L14.0470968,13.4122581 L11.1625806,13.4122581 L11.1625806,10.5445161 C12.1445161,10.1832258 13.0187097,9.45806452 13.7748387,8.42258065 C13.9858065,8.44064516 14.1929032,8.45354839 14.3941935,8.45354839 C15.7245161,8.45225806 16.8535484,8.04903226 17.7587097,7.24516129 C19.9283871,5.31935484 19.9535484,1.80387097 19.9535484,1.65483871 L19.9535484,1.00258065 L15.9941935,1.00258065 Z M3.06580645,6.27225806 C1.82645161,5.17548387 1.46,3.29806452 1.3516129,2.3083871 L4.03419355,2.3083871 C4.14774194,3.54129032 4.41483871,5.07741935 5.03096774,6.42774194 C5.14387097,6.67548387 5.26258065,6.91032258 5.38387097,7.14 C4.45935484,7.10451613 3.68129032,6.81612903 3.06580645,6.27225806 Z M16.8877419,6.27225806 C16.2729032,6.81677419 15.4941935,7.10451613 14.5703226,7.14 C14.6916129,6.91096774 14.8103226,6.67548387 14.9232258,6.42774194 C15.5393548,5.07741935 15.8064516,3.54129032 15.9193548,2.3083871 L18.6019355,2.3083871 C18.4935484,3.29741935 18.1277419,5.17483871 16.8877419,6.27225806 Z' id='Shape'></path></svg>",
    fill: 'brand-color',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}


export default ExtendedWireframe
