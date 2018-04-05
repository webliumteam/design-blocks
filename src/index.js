import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  title: {
    content: 'Projects',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Over more than 15 years of our practice, we have completed a number of projects for our clients and have helped them generate more than $15 million in revenues. Browse through our selected projects to get the idea of what we do on a daily basis.',
    type: 'subtitle',
  },
  projects: [
    {
      picture: {
        resourceRef: 'alexandra-gorn-260991-unsplash.jpg',
        alt: 'Illustration for project',
      },
    },
    {
      picture: {
        resourceRef: 'alisha-hieb-249784-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'barrett-ward-551977-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'emma-tsui-492731-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'galina-n-200668-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'ian-dooley-281897-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'jess-watters-515757-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'helena-hertz-295994-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        resourceRef: 'pierre-chatel-innocenti-490529-unsplash.jpg',
        alt: 'Picture about the company',
      },
    },
  ],
  button: {
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
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
