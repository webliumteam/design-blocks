import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-testimonials/src/component'
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
    resourceRef: 'bg_testimonials.jpg',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 20"><path d="M19.936 7.24c-.071-.22-.288-.359-.647-.414l-6.022-.876L10.568.492C10.4.164 10.204 0 9.98 0c-.232 0-.428.164-.587.492l-2.7 5.458-6.022.876c-.36.056-.575.193-.647.413-.072.22.02.458.276.714L4.666 12.2l-1.032 5.998c-.04.264-.016.47.073.617a.441.441 0 0 0 .407.222c.136 0 .296-.048.48-.144l5.387-2.831 5.386 2.831c.184.096.344.144.48.144.184 0 .32-.074.408-.222.087-.148.111-.353.071-.617L15.295 12.2l4.354-4.247c.264-.256.36-.494.287-.714zm-5.71 3.856l-.587.564.144.792.72 4.258-3.815-2.015-.708-.372V2.771l1.908 3.863.36.72.791.12 4.27.623-3.082 3z"/></svg>',
    fill: 'brand-color',
  },
  testimonials: [
    {
      id: 'bf40db18-b817-4a19-bd5b-b72cfacce814',
      name: {
        content: 'Bryan Adkins',
        type: 'heading',
      },
      position: {
        content: 'Happy Client',
        type: 'caption',
      },
      description: {
        content: 'If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        src: 'tanja-heffner-196114.jpg',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director at Fresh Food Co.',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
  subtitle: {
    content: 'Case nulla deserunt ut eos. Magna persecuti ut vis, ex legimus civibus complectitur mea. Sumo vitae definitionem in nam.',
    type: 'subtitle',
  },
  cta: {
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
    textValue: 'All Testimonials',
  },

}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Secondary Button', type: 'checkbox'},
  image: {defaultValue: true, label: 'Reviewer photo', type: 'checkbox'},
  position: {defaultValue: true, label: 'Reviewer job position', type: 'checkbox'},
  publishDate: {defaultValue: false, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Testimonials description', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'hidden'},
}

export default ExtendedWireframe
