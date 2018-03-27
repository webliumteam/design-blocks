import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Ask our experts<br> about your freight',
    color: 'var(--ui-light-shade-color)',
  },
  description: {
    ...Component.defaultContent.description,
    content: 'Our experts are always ready to help. Get in touch with us and we\'ll find the right solution to meet your needs.',
    color: 'var(--ui-light-shade-color)',
  },
  cta: {
    ...Component.defaultContent.cta,
    textValue: 'Get a quote',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
