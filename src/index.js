import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-team/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  team: {
    background: {
      'nth-child': [
        ['n', {
          color: 'darkShade?lighten=95.53',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        ...Component.defaultContent.team[0],
        picture: {
          ...Component.defaultContent.team[0].picture,
          resourceRef: 'photo1.png',
          size: {
            'min-width: 320px': 240,
          },
        },
        socialIcons: {
          networks: [
            {
              id: 'twitter',
              name: 'Twitter',
              url: 'https://twitter.com/',
            },
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'https://facebook.com/',
            },
            {
              id: 'linkedin',
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            color: 'brand-color',
            sizes: [15, 25, 35, 45],
            size: 25,
            offset: 5,
          },
        },
      },
      {
        ...Component.defaultContent.team[1],
        picture: {
          ...Component.defaultContent.team[1].picture,
          resourceRef: 'photo2.png',
          size: {
            'min-width: 320px': 240,
          },
        },
        socialIcons: {
          networks: [
            {
              id: 'twitter',
              name: 'Twitter',
              url: 'https://twitter.com/',
            },
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'https://facebook.com/',
            },
            {
              id: 'linkedin',
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            color: 'brand-color',
            sizes: [15, 25, 35, 45],
            size: 25,
            offset: 5,
          },
        },
      },
      {
        ...Component.defaultContent.team[2],
        picture: {
          ...Component.defaultContent.team[2].picture,
          resourceRef: 'photo3.png',
          size: {
            'min-width: 320px': 240,
          },
        },
        socialIcons: {
          networks: [
            {
              id: 'twitter',
              name: 'Twitter',
              url: 'https://twitter.com/',
            },
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'https://facebook.com/',
            },
            {
              id: 'linkedin',
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            color: 'brand-color',
            sizes: [15, 25, 35, 45],
            size: 25,
            offset: 5,
          },
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Team description', type: 'checkbox'},
}

export default ExtendedWireframe
