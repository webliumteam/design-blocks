import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  numbers: [
    {
      body: {
        content: 'increase in profits of our customers',
        type: 'text',
      },
      number: {
        content: '128%',
        type: 'headingLg',
      },
      picture: {
        resourceRef: 'pic1.jpg',
        alt: 'Illustration for number',
      },
    },
    {
      body: {
        content: 'higher customer satisfaction',
        type: 'text',
      },
      number: {
        content: '527%',
        type: 'headingLg',
      },
      picture: {
        resourceRef: 'pic2.jpg',
        alt: 'Illustration for number',
      },
    },
    {
      body: {
        content: 'of clients found new sales markets',
        type: 'text',
      },
      number: {
        content: '92%',
        type: 'headingLg',
      },
      picture: {
        resourceRef: 'pic3.jpg',
        alt: 'Illustration for number',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
