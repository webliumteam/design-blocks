import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-careers/src/component'
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
  title: {
    content: 'Careers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We’re always looking for talents who want to grow personally and professionally in our company. Please check the open positions: ',
    type: 'subtitle',
  },
  items: [
    {
      icon: {
        svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
        fill: '#676767',
      },
      heading: {
        content: 'Web Developer',
        type: 'heading',
      },
      employment: {
        content: 'Full time',
        type: 'text',
      },
      location: {
        content: 'London',
        type: 'text',
      },
      link: {
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
        type: 'link',
        textValue: 'More about vacancy',
      },
    },
    {
      icon: {
        svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
        fill: '#676767',
      },
      heading: {
        content: '3D designer',
        type: 'heading',
      },
      employment: {
        content: 'Remote work',
        type: 'text',
      },
      location: {
        content: 'Amsterdam',
        type: 'text',
      },
      link: {
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
        type: 'link',
        textValue: 'More about vacancy',
      },
    },
    {
      icon: {
        svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
        fill: '#676767',
      },
      heading: {
        content: 'Office manager',
        type: 'heading',
      },
      employment: {
        content: 'Full time',
        type: 'text',
      },
      location: {
        content: 'Amsterdam',
        type: 'text',
      },
      link: {
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
        type: 'link',
        textValue: 'More about vacancy',
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
    type: 'secondary',
    size: 'md',
    textValue: 'Learn more',
  },
  'top-caption': {
    content: 'sapien ut libero',
    type: 'text',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Vacancy icon', type: 'checkbox'},
  employment: {defaultValue: true, label: 'Type of employment (full-time/part-time)', type: 'checkbox'},
  position: {defaultValue: true, label: 'Vacancy location', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default ExtendedWireframe
