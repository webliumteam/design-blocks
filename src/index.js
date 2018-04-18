import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
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
    },
    resourceRef: 'cover_bg.jpg',
  },
  'cta-1': {
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
    textValue: 'Learn more',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'caption-decorator': {defaultValue: false, label: 'Pretitle', type: 'hidden'},
  'primary-btn': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-btn': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  undefined: {type: 'separator'},
}


export default ExtendedWireframe
