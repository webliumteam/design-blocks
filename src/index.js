import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
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
}

export default ExtendedWireframe
