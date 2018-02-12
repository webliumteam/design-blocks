import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  testimonials: [
    {
      id: 'bf40db18-b817-4a19-bd5b-b72cfacce814',
      name: 'Julia Banks',
      position: 'CEO at Minor Thinking',
      description:
        '“They are always accountable. I have confidence when I make a decision. I know it is going to get done. If they could lose money on a project just because they are trying to make the customer happy, they probably would do that”',
      date: 'December 15, 2017',
      image: {
        src: 'item-1.png',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: 'Amanda Peterson',
      position: 'Marketing Director at Fresh Food Co.',
      description:
        '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
      date: 'December 15, 2017',
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
  title: 'Testimonials',
  subtitle:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
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
    textValue: 'Additional button (M)',
  },
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'background.png',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
