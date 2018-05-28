import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-team/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

export default ExtendedWireframe

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: 'brand?lighten=31.18&spin=-7',
  },
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
          itemPicture: {
          ...Component.defaultContent.collection.items[0].picture,
          resourceRef: 'img1.jpg',
          },
          itemSocialIcons: {
            ...Component.defaultContent.collection.items[0].itemSocialIcons,
              design: {
              ...Component.defaultContent.collection.items[0].itemSocialIcons.design,
              color: 'brand-color',
            }
          }
        },
      {
        ...Component.defaultContent.collection.items[1],
        itemPicture: {
          ...Component.defaultContent.collection.items[1].picture,
          resourceRef: 'img2.jpg',
        },
        itemSocialIcons: {
          ...Component.defaultContent.collection.items[1].itemSocialIcons,
            design: {
            ...Component.defaultContent.collection.items[1].itemSocialIcons.design,
            color: 'brand-color',
          }
        }
      },
      {
        ...Component.defaultContent.collection.items[2],
        itemPicture: {
          ...Component.defaultContent.collection.items[2].picture,
          resourceRef: 'img3.jpg',
        },
        itemSocialIcons: {
          ...Component.defaultContent.collection.items[2].itemSocialIcons,
            design: {
            ...Component.defaultContent.collection.items[2].itemSocialIcons.design,
            color: 'brand-color',
          }
        }
      },
      {
        ...Component.defaultContent.collection.items[3],
        itemPicture: {
          ...Component.defaultContent.collection.items[3].picture,
          resourceRef: 'img4.jpg',
        },
        itemSocialIcons: {
          ...Component.defaultContent.collection.items[3].itemSocialIcons,
            design: {
            ...Component.defaultContent.collection.items[3].itemSocialIcons.design,
            color: 'brand-color',
          }
        }
      },
    ]
  }
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,

}
