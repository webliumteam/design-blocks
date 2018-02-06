import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cta/src/component'

import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  theme: 'dark',
  title: 'Want to Work with Us ?',
  description:
    'We are always in search of new talents. If you have experience in the construction industry, feel free to contact us and join our team.',
  cta: {
    type: 'primary',
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
    textValue: 'Contact Us',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    src: 'block-bg.jpg',
    overlay: {
      type: 'color',
      color: 'rgba(36, 36, 36)',
      opacity: '0.9',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  picture: {defaultValue: false, label: 'Picture', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default ExtendedWireframe
