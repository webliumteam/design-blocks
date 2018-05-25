import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '100% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  team: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-shade-color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.team[0],
        picture: {
          ...Component.defaultContent.team[0].picture,
          resourceRef: 'pic1.png',
        },
        socialIcons: {
          ...Component.defaultContent.team[0].socialIcons,
          design: {
            ...Component.defaultContent.team[0].socialIcons.design,
            border: null,
            innerFill: true,
            offset: 0,
            color: '#505050',
            size: 30,
          },
        },
      },
      {
        ...Component.defaultContent.team[1],
        picture: {
          ...Component.defaultContent.team[1].picture,
          resourceRef: 'pic2.png',
        },
        socialIcons: {
          ...Component.defaultContent.team[1].socialIcons,
          design: {
            ...Component.defaultContent.team[1].socialIcons.design,
            border: null,
            innerFill: true,
            offset: 0,
            color: '#505050',
            size: 30,
          },
        },
      },
      {
        ...Component.defaultContent.team[2],
        picture: {
          ...Component.defaultContent.team[2].picture,
          resourceRef: 'pic3.png',
        },
        socialIcons: {
          ...Component.defaultContent.team[2].socialIcons,
          design: {
            ...Component.defaultContent.team[2].socialIcons.design,
            border: null,
            innerFill: true,
            offset: 0,
            color: '#505050',
            size: 30,
          },
        },
      },
    ],
  },
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary-alt',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'member-desc': {defaultValue: true, label: 'Team member bio', type: 'checkbox'},
  'member-email': {defaultValue: true, label: 'Team member email', type: 'checkbox'},
  'member-link': {defaultValue: true, label: 'Team member link', type: 'checkbox'},
  'member-social': {defaultValue: true, label: 'Team social buttons', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Team description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
