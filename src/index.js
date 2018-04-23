import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Shortly About Me',
    type: 'headingLg',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'I am a highly trained and certified general contractor striving to deal with projects of any complexity and to meet any whimsical clients\' needs and even exceed their expectations. ',
  },
  'text-2': {
    ...Component.defaultContent['text-2'],
    content: 'I am committed to the long-term partnership with clients and to the excellence in services I can provide, delivering the work on time and meeting the budget.',
  },
  picture: {
    ...Component.defaultContent.picture,
    src: 'picture.jpg',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-text': {defaultValue: true, label: 'Additional text', type: 'checkbox'},
}

export default ExtendedWireframe
