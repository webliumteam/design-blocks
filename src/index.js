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
    type: 'color',
    color: '#fff',
  },
  title: {
    ...Component.defaultContent.title,
    content: '- TEAM -',
  },
  team: [
    {
      ...Component.defaultContent.team[0],
      name: {
        ...Component.defaultContent.team[0].name,
        content: 'ANDREW SHIMMER',
      },
      position: {
        ...Component.defaultContent.team[0].position,
        content: 'CEO',
      },
      picture: {
        ...Component.defaultContent.team[0].picture,
        resourceRef: 'team_01.png',
      },
      more: {
        ...Component.defaultContent.team[0].more,
        type: 'link',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'https://instagram.com/',
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
          offset: 20,
          color: '#6A6A6A',
          sizes: [15, 25, 35, 45],
          size: '32px',
        },
      },
    },
    {
      ...Component.defaultContent.team[1],
      name: {
        ...Component.defaultContent.team[1].name,
        content: 'ANN MAISNER',
      },
      position: {
        ...Component.defaultContent.team[1].position,
        content: 'MARKETING DIRECTOR',
      },
      picture: {
        ...Component.defaultContent.team[1].picture,
        resourceRef: 'team_02.png',
      },
      more: {
        ...Component.defaultContent.team[1].more,
        type: 'link',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'https://instagram.com/',
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
          offset: 20,
          color: '#6A6A6A',
          sizes: [15, 25, 35, 45],
          size: '32px',
        },
      },
    },
    {
      ...Component.defaultContent.team[2],
      name: {
        ...Component.defaultContent.team[2].name,
        content: 'TOMAS ABBAR',
      },
      position: {
        ...Component.defaultContent.team[2].position,
        content: 'PRODUCT MANAGER',
      },
      picture: {
        ...Component.defaultContent.team[2].picture,
        resourceRef: 'team_03.png',
      },
      more: {
        ...Component.defaultContent.team[2].more,
        type: 'link',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'https://instagram.com/',
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
          offset: 20,
          color: '#6A6A6A',
          sizes: [15, 25, 35, 45],
          size: '32px',
        },
      },
    },
  ],
  cta: {
    ...Component.defaultContent.cta,
    type: 'secondary',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
