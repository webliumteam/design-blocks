import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: [
    {
      ...Component.defaultContent.team[0],
      picture: {
        ...Component.defaultContent.team[0].picture,
        resourceRef: 'cristian-newman-458458-unsplash.jpg',
      },
    },
    {
      ...Component.defaultContent.team[1],
      picture: {
        ...Component.defaultContent.team[1].picture,
        resourceRef: 'luis-pereira-466785-unsplash.jpg',
      },
    },
    {
      ...Component.defaultContent.team[1],
      picture: {
        ...Component.defaultContent.team[1].picture,
        resourceRef: 'matthew-kane-65194-unsplash.jpg',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
