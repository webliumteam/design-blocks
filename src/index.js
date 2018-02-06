import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
    },
    resourceRef: 'cover_bg.jpg',
  },
  title: 'Quantum Company',
  subtitle: 'We can execute even the most unpredictable ideas! ',
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
    textValue: 'Request a quote',
    type: 'primary',
    size: 'lg',
  },
  'cta-2': {
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
    type: 'secondary',
    size: 'lg',
  },
  topCaption: 'welcome',
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  'caption-decorator': {defaultValue: false, label: 'Pretitle', type: 'hidden'},
  'primary-btn': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-btn': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  undefined: {type: 'separator'},
}


export default ExtendedWireframe
