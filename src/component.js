import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier, openLightbox}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style['item__picture-wrapper']} onClick={openLightbox}>
          <Image
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`gallery[${index}].picture`}
          />
        </div>
        {_.get('body-text')(modifier) && (
          <p className={style.item__text}>
            <Text bind={`gallery[${index}].title`} />
          </p>
        )}
      </div>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
            {this.getModifierValue('subtitle') && (
              <p className={style.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
          <Collection
            className={style['items-wrapper']}
            bind="gallery"
            galleryId="gallery"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('secondary-button') && (
            <div className={style['btns-group']}>
              <Button
                className={classNames(style.button, style['button--secondary'], style['button--size-md'])}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  gallery: [
    {
      title: 'Quantum CEO & our partners',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Digital Marketing workshop lecturer',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Quantum Company at WebSummit',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'UX workshop attendees',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'UX workshop lecturer',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Quantum team',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
  ],
  title: 'Gallery',
  subtitle:
    'Browse through our photos to see who we are, how we work, and what inspires us',
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
    textValue: 'Medium button',
  },
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Gallery description',
    defaultValue: false,
  },
  {
    id: 'body-text',
    type: 'checkbox',
    label: 'Image description',
    defaultValue: false,
  },
  {
    id: 'secondary-button',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: false,
  },
]

export default Block
