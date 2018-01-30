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
  },
}

ExtendedWireframe.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  {
    id: 'picture',
    type: 'hidden',
    label: 'Picture',
    defaultValue: false,
  },
]

export default ExtendedWireframe
