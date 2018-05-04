import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

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
          content: 'Dave Reez',
        },
        position: {
          ...Component.defaultContent.team[0].position,
          content: 'President',
        },
        description: {
          ...Component.defaultContent.team[0].description,
          content: 'Dave is a business owner and a second generation electrician. He has over 20 years of experience in the electrical industry. He strives to provide the excellent customer service where the quality comes first.',
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
          content: 'John Davidson',
        },
        position: {
          ...Component.defaultContent.team[0].position,
          content: 'Master Electrician',
        },
        description: {
          ...Component.defaultContent.team[0].description,
          content: 'John is committed to delivering excellence in everything he does. He is highly trained, very knowledgeable, and experienced. John is focused on the complete customer satisfaction with the job. ',
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
          content: 'Anthony Taylor',
        },
        position: {
          ...Component.defaultContent.team[0].position,
          content: 'Founder',
        },
        description: {
          ...Component.defaultContent.team[0].description,
          content: 'Anthony has over 28 years of experience in the electrical contracting industry. His knowledge in various aspects of the industry places him at the forefront to deliver the experience and high quality of end product.',
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
