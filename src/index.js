import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  theme: 'light',
  background: {
    type: 'color',
    color: 'media-bg',
  },
  numbers: [
    {
      title: 'Increase profits by',
      label: 'for our customers',
      value: '75%',
      id: '554d7318-3c82-4dd4-87e9-b0b92299199f',
    },
    {
      title: 'Expand market reach for',
      label: 'of our clients',
      value: '30%',
      id: 'aa002eee-2755-4850-b18a-c990cfa03e37',
    },
    {
      title: 'Improve customer satisfaction for',
      label: 'of our users',
      value: '89%',
      id: '84957801-e554-42e1-ab7b-323f483e3f81',
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: 'Our Results in Numbers',
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
    textValue: 'Medium button',
  },
}

export default ExtendedWireframe
