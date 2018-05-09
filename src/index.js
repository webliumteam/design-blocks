import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-about/src/options.json'
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
    content: 'Acrozz Logistics Company expands targeted, complete logistics solutions that meet each client’s special set of challenges, products, systems, and vision since 1983. Companies with diversified and complicated transportation needs trust our innovative technologies to deliver comprehensive, high-value logistics strategies. We guarantee our clients their shipment delivery in time and in the most secure and optimal way. ',
  },
  'text-2': {
    ...Component.defaultContent['text-2'],
    content: 'We are committed to quality, honesty, and integrity, so you can be sure that Acrozz will take care of your supply chain and logistics needs. Regardless of the type of transportation, our main goal is to ensure the safety of your cargo during transportation and minimize all possible risks.',
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
