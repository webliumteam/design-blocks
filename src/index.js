import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-projects/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-projects/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: [
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[0],
        resourceRef: 'alexandra-gorn-260991-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[1],
        resourceRef: 'alisha-hieb-249784-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[2],
        resourceRef: 'barrett-ward-551977-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[3],
        resourceRef: 'emma-tsui-492731-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[4],
        resourceRef: 'galina-n-200668-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[5],
        resourceRef: 'ian-dooley-281897-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[6],
        resourceRef: 'jess-watters-515757-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[7],
        resourceRef: 'helena-hertz-295994-unsplash.jpg',
      },
    },
    {
      picture: {
        ...Component.defaultContent.projects[0].picture[8],
        resourceRef: 'pierre-chatel-innocenti-490529-unsplash.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
