import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  projects: [
    {
      ...Component.defaultContent.projects[0],
      picture: {
        resourceRef: 'img-1.jpg',
        alt: 'Project 1',
        size: {
          'min-width: 992px': 960,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
      },
      link: {
        ...Component.defaultContent.projects[0].link,
      },
    },
    {
      ...Component.defaultContent.projects[1],
      picture: {
        resourceRef: 'img-2.jpg',
        alt: 'Project 2',
        size: {
          'min-width: 992px': 960,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
      },
      link: {
        ...Component.defaultContent.projects[1].link,
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: {
        content: 'Should I Become a Farmer?',
        type: 'heading',
      },
      subtitle: {
        content: '03',
        type: 'caption',
      },
      text: {
        content: 'Organic Farming means growing produce and raising grass-fed livestock without using harmful chemicals and fertilizers.<br>This specialty supposes a deep knowledge of the soil and the life cycles of plants and insects. To get ready for the organic farming profession, a would-be farmer has to get acquainted with the working environment. He has to spend a great deal of time outdoors, and his work requires a lot of physical efforts.<br>If you want to be a good farmer, you must take into account that you are to sacrifice all your time (even spare time) to a hard work, all the year round, seven days a week. So, it\'s up to you to decide but your decision should be thoroughly thought out.',
        type: 'text',
      },
      picture: {
        resourceRef: 'img-3.jpg',
        alt: 'Project 3',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc53',
      title: {
        content: 'Get Farming Experience',
        type: 'heading',
      },
      subtitle: {
        content: '04',
        type: 'caption',
      },
      text: {
        content: 'A life on the farm is rather diverse and even wonderful. It allows you to be more self-confident and to create an ecosystem not only to support you financially but to be in touch with nature and with the whole environment. Being a farmer is the job and at the same time a healthy lifestyle.<br>This kind of career is a perfect choice for men as well as women. But it is not an easy task to get a good farming experience.<br>So, we are proud toe offer you an educational program where you can learn all the aspects of farming and also apply them into practice, to face all the difficulties working in the field. We offer education and internships at our sustainable farm.',
        type: 'text',
      },
      picture: {
        resourceRef: 'img-4.jpg',
        alt: 'Project 4',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
        textValue: 'Learn more',
        type: 'link',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'project-button': {defaultValue: false, label: 'Project button', type: 'hidden'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'block-button': {defaultValue: false, label: 'Button', type: 'hidden'},
}

export default ExtendedWireframe
