import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-testimonials/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'bg.jpg',
  },
  testimonials: [
    {
      title: {
        content: 'Jack Godson',
        type: 'heading',
      },
      date: {
        content: 'October 20, 2017',
        type: 'caption',
      },
      description: {
        content: '“ Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerar vestibas is non, nunc. ”',
        type: 'text',
      },
      position: {
        content: 'CEO at Miror Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Jack Godson review',
      },
    },
    {
      title: {
        content: 'Robert Doe',
        type: 'heading',
      },
      date: {
        content: 'October 24, 2017',
        type: 'caption',
      },
      description: {
        content: '“ Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purusnas vestibuiam. ”',
        type: 'text',
      },
      position: {
        content: 'Client',
        type: 'caption',
      },
      picture: {
        alt: 'Robert Doe review',
      },
    },
    {
      title: {
        content: 'Julia Banks',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“ Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justosque auctor neque nec urna. Proin sapien audut, mi. ”',
        type: 'text',
      },
      position: {
        content: 'SEO at Feplium',
        type: 'caption',
      },
      picture: {
        alt: 'Julia Banks review',
      },
    },
  ],
  title: {
    content: 'What People Sayd About Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.',
    type: 'subtitle',
  },
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
  'top-caption': {
    content: 'justo pellentesque facilisis',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'checkbox'},
}

export default ExtendedWireframe
