import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: {
    background: {
      'nth-child': [
        ['n', {
          color: 'light-accent-color?lighten=4.71',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.team[0],
        name: {
          ...Component.defaultContent.team[0].name,
          content: 'Andrew Shimmer',
        },
        position: {
          ...Component.defaultContent.team[0].position,
          content: 'CEO',
        },
        description: {
          ...Component.defaultContent.team[0].description,
          content: 'Andrew Shimmer has more than 15 years of experience in IT development and marketing. He has successfully run companies specializing in innovative technologies.',
        },
        picture: {
          ...Component.defaultContent.team[0].picture,
          resourceRef: 'image1.jpg',
        },
      },
      {
        ...Component.defaultContent.team[1],
        name: {
          ...Component.defaultContent.team[0].name,
          content: 'Tomas Abbar',
        },
        position: {
          ...Component.defaultContent.team[0].position,
          content: 'Product Manager',
        },
        description: {
          ...Component.defaultContent.team[0].description,
          content: 'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
        },
        picture: {
          ...Component.defaultContent.team[0].picture,
          resourceRef: 'image2.jpg',
        },
      },
      {
        ...Component.defaultContent.team[2],
        name: {
          ...Component.defaultContent.team[0].name,
          content: 'Jeff Bin',
        },
        position: {
          ...Component.defaultContent.team[0].position,
          content: 'Marketing Director',
        },
        description: {
          ...Component.defaultContent.team[0].description,
          content: 'Jeff is a highly skilled professional with over 10 years of experience in marketing. He has been rewarded by the Association of Marketing as one of the most successful directors.',
        },
        picture: {
          ...Component.defaultContent.team[0].picture,
          resourceRef: 'image3.jpg',
        },
      },
    ],
  },
  title: {
    ...Component.defaultContent.title,
    content: 'Our team',
  },
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  'member-email': {defaultValue: false, label: 'Team member email', type: 'hidden'},
  'member-link': {defaultValue: false, label: 'Team member link', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Team description', type: 'hidden'},
  'member-social': {defaultValue: false, label: 'Team social buttons', type: 'hidden'},
}

export default ExtendedWireframe
