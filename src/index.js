import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-projects/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    content: 'Organic Farm Education',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'The word “organic” is very significant nowadays. We understand the importance and effectiveness of the organic lifestyle and its impact on the environment. We welcome you to learn more about raising organic products and methods of organic farming.',
    type: 'subtitle',
  },
  projects: [
    {
      ...Component.defaultContent.projects[0],
      title: {
        content: 'Internship Program',
        type: 'heading',
      },
      subtitle: {
        content: '01',
        type: 'caption',
      },
      text: {
        content: 'We are proud to offer an internship program to all future farmers during all our farm existence. We are devoted to providing our interns with a comprehensive farm experience which consists of a diverse variety of farming aspects.<br> Our Farm Internship Program also aims to offer interns all the means to understand how to implement the principles and theories of organic farming in action.<br>We provide the excellent opportunity to actively experience the hard work in the fields daily and be a part of our working team and farm environment. We train future farmers in successfully creating a versatile commercial farm.',
        type: 'text',
      },
      picture: {
        src: 'img-1.jpg',
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
      title: {
        content: 'Program Overview',
        type: 'heading',
      },
      subtitle: {
        content: '02',
        type: 'caption',
      },
      text: {
        content: 'We are proud to offer the Organic Farmer Training Program. This program includes a combination of a course of lectures, written tasks, in-the-field practical lessons, farm tours to understand and learn how to realize organic farming principles.<br> The program concentrates on the technical skills and knowledge whereas providing practical training. We offer great opportunities for those who strive to run their own farm business, successfully manage farm operations, or work with others on their way to organic food production.<br>The program is created to give all the participants a strong experience of farm production and management.',
        type: 'text',
      },
      picture: {
        src: 'img-2.jpg',
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
        src: 'img-3.jpg',
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
        src: 'img-4.jpg',
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
