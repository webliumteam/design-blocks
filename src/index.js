import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Testimonials',
  },
  team: [
    {
      ...Component.defaultContent.team[0],
      name: {
        ...Component.defaultContent.team[0].name,
        content: '&mdash; Amanda Peterson',
      },
      description: {
        ...Component.defaultContent.team[0].description,
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
      },
      picture: {
        ...Component.defaultContent.team[0].picture,
        resourceRef: 'pic1.png',
      },
    },
    {
      ...Component.defaultContent.team[1],
      name: {
        ...Component.defaultContent.team[1].name,
        content: '&mdash; Amanda Peterson',
      },
      description: {
        ...Component.defaultContent.team[1].description,
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
      },
      picture: {
        ...Component.defaultContent.team[1].picture,
        resourceRef: 'pic2.png',
      },
    },
    {
      ...Component.defaultContent.team[2],
      name: {
        ...Component.defaultContent.team[2].name,
        content: '&mdash; Amanda Peterson',
      },
      description: {
        ...Component.defaultContent.team[2].description,
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
      },
      picture: {
        ...Component.defaultContent.team[2].picture,
        resourceRef: 'pic3.png',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: false, label: 'Team description', type: 'hidden'},
  'member-link': {defaultValue: false, label: 'Link', type: 'hidden'},
  'member-email': {defaultValue: false, label: 'Team member contacts', type: 'hidden'},
  'member-social': {defaultValue: false, label: 'Social buttons', type: 'hidden'},
  'block-button': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
}

export default ExtendedWireframe
