import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'About Us',
  },
  text: {
    ...Component.defaultContent.text,
    content: 'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.',
  },
  'text-2': {
    ...Component.defaultContent['text-2'],
    content: ' We create unique and innovative solutions for our customers along with the high-quality support services and personal approach to any case. Feel free to entrust your business to our experts, and you’ll see the difference!',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'picture.jpg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-text': {defaultValue: true, label: 'Additional text', type: 'checkbox'},
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  button: {defaultValue: false, label: 'Button', type: 'hidden'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
