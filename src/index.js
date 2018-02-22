import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  theme: 'dark',
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg-testimonials.png',
  },
  testimonials: [
    {
      id: 'bf40db18-b817-4a19-bd5b-b72cfacce814',
      name: {
        content: 'Julia Banks',
        type: 'heading',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      description: {
        content: '“They are always accountable. I have confidence when I make a decision. I know it\'s going to get done. If they could lose money on a project just because the\'re trying to make the customer happy, they probably would do that.”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        resourceRef: 'photo.png',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: {
        content: 'Julia Banks',
        type: 'heading',
      },
      position: {
        content: 'CEO at Minor Thinking',
        type: 'caption',
      },
      description: {
        content: '“They are always accountable. I have confidence when I make a decision. I know it\'s going to get done. If they could lose money on a project just because the\'re trying to make the customer happy, they probably would do that.”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        resourceRef: 'photo.png',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
  subtitle: {
    content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
    type: 'subtitle',
  },
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
    type: 'secondary-alt',
    size: 'lg',
    textValue: 'Additional button (L)',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Secondary Button', type: 'checkbox'},
  image: {defaultValue: true, label: 'Reviewer photo', type: 'checkbox'},
  position: {defaultValue: true, label: 'Reviewer job position', type: 'checkbox'},
  publishDate: {defaultValue: false, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
