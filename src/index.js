import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'cover-bg.jpg',
  },
  'cta-1': {
    ...Component.defaultContent['cta-1'],
    type: 'primary',
    size: 'lg',
  },
  'cta-2': {
    ...Component.defaultContent['cta-2'],
    type: 'secondary',
    size: 'lg',
  },
  title: {
    ...Component.defaultContent.title,
    content: 'QUANTUM COMPANY',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'WE CAN EXECUTE EVEN THE MOST UNPREDICTABLE IDEAS!',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    ...Component.modifierScheme.align,
    defaultValue: 'center',
  },
  'caption-decorator': {defaultValue: false, label: 'Pretitle', type: 'hidden'},
  'primary-btn': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'secondary-btn': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  undefined: {type: 'separator'},
  border: {
    defaultValue: true,
    label: 'White border',
    type: 'checkbox',
    classNameOnActive: style['section--with-border'],
  },
}

export default ExtendedWireframe
