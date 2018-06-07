import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className, openLightbox}) => {
    const {components: {Image}, style} = this.props
    const logoSize = this.getModifierValue('logo_size')
    const itemModifierClass = style[`item--${logoSize}`]

    return (
      <div className={classNames(style.item, itemModifierClass, className)}>
        {children}
        <div className={style.item__inner}>
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`collection[${index}].picture`}
            size={
              {
                'min-width: 320px': 480,
                'min-width: 480px': 768,
                'min-width: 768px': 310,
                'min-width: 992px': 380,
              }
            }
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>
    )
  }

  render() {
    const {components: {Text, Collection}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h2" />
          {this.getModifierValue('subtitle') && (
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          )}
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            galleryId="gallery"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Collection', 'Image'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Friendship in business can be as strong as in life. We do very like our community with this guys.',
    type: 'subtitle',
  },
  collection: {
    items: [
      {
        picture: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Our partner',
          galleryId: 'gallery',
        },
      },
      {
        picture: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Our partner',
          galleryId: 'gallery',
        },
      },
      {
        picture: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Our partner',
          galleryId: 'gallery',
        },
      },
    ],
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  logo_size: {
    children: [
      {id: 'large', label: 'Large logo'},
      {id: 'medium', label: 'Medium logo'},
      {id: 'small', label: 'Small logo'},
    ],
    defaultValue: 'large',
    name: 'Logo sizes',
    type: 'radio-button-group',
  },
}

export default Wireframe
