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
      name: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director at Fresh Food Co.',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        resourceRef: 'testimonials-img-1.jpg',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director at Fresh Food Co.',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        resourceRef: 'testimonials-img-2.jpg',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director at Fresh Food Co.',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        resourceRef: 'testimonials-img-3.jpg',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
}

export default ExtendedWireframe
