import $editor from 'weblium/editor'

import Component from 'wireframe-lucario-cover/src/component'
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
    resourceRef: 'img-1-pizza.png',
  },
  cover: [
    {
      title: 'Pizza',
      subtitle: 'whith Seafood',
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
        textValue: 'Order online',
        type: 'primary',
      },
      id: 'c4e3de5f-776a-405b-a034-dc2307069714',
      background: {
        type: 'image',
        position: {
          type: 'cover',
          cover: '50% 50%',
        },
        resourceRef: 'img-1-pizza.png',
      },
    },
    {
      title: 'Meet the legend',
      subtitle: 'burger california',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
      id: '73263c9a-8d0e-41dc-85e1-66c6db9ea9d3',
    },
    {
      title: 'burger',
      subtitle: 'the Mexican',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
      id: 'b5f64fb3-d94e-4ecf-b7ff-a4a5700a2457',
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox'},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox'},
  'primary-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},

}

export default ExtendedWireframe
