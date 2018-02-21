import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  blog: [
    {
      title: {
        content: 'Interserve\'s £200m Haymarket Edinburgh scheme hit by delays',
        type: 'heading',
      },
      description: {
        content: 'Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 21, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img1.jpg',
        alt: 'Article illustration photo',
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
      title: {
        content: 'How to install or repair drywall for a kitchen backsplash ?',
        type: 'heading',
      },
      description: {
        content: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 22, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img2.jpg',
        alt: 'Article illustration photo',
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
      title: {
        content: 'Spurs reveal rival plans for Lendlease\'s High Road West site',
        type: 'heading',
      },
      description: {
        content: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 23, 2017',
        type: 'caption',
      },
      picture: {
        src: 'img3.jpg',
        alt: 'Article illustration photo',
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
  'block-button': {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
