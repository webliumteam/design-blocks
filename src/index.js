import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-process/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  steps: [
    {
      heading: {
        content: 'Step 1. Choose a plan',
        type: 'heading',
      },
      description: {
        content: 'We provide you with full information about each plan. There are a few available options to choose from.',
        type: 'text',
      },
      picture: {
        resourceRef: 'process01.jpg',
        alt: 'Illustraion for step 1',
      },
    },
    {
      heading: {
        content: 'Step 2. Proceed with the payment',
        type: 'heading',
      },
      description: {
        content: 'We guarantee the security of all payments.',
        type: 'text',
      },
      picture: {
        resourceRef: 'process02.jpg',
        alt: 'Illustraion for step 2',
      },
    },
    {
      heading: {
        content: 'Step 3. Enjoy our products',
        type: 'heading',
      },
      description: {
        content: 'You will get access to all options immediately.',
        type: 'text',
      },
      picture: {
        resourceRef: 'process03.jpg',
        alt: 'Illustraion for step 3',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Process description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
