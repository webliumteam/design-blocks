import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-awards/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  awards: [
    {
      title: {
        content: 'R&D Leader in Tech (2017)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-1.jpg',
        alt: 'R&D Leader in Tech photo',
      },
    },
    {
      title: {
        content: 'Most Innovative B2B Solutions (2016)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-2.jpg',
        alt: 'Most Innovative B2B Solutions photo',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-3.jpg',
        alt: 'Best Service Provider',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        resourceRef: 'img-4.jpg',
        alt: 'Leader of Innovation photo',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Awards',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'The excellence of our services has been proved by the following awards:',
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
    textValue: 'Learn more',
    type: 'primary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Awards title', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
