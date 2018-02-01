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
        {_.get('caption')(modifier) && (
          <p className={style.item__caption}>
            <Text bind={`gallery[${index}].caption`} />
          </p>
        )}
      </div>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
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
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon'])($editor.components)

Block.defaultContent = {
  gallery: [
    {
      title: 'Quantum CEO & our partners',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Quantum CEO & our partners',
        galleryId: 'gallery',
      },
      caption: 'Design & build',
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Digital Marketing workshop lecturer',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Digital Marketing workshop lecturer',
        galleryId: 'gallery',
      },
      caption: 'Design & build',
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Quantum Company at WebSummit',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Quantum Company at WebSummit',
        galleryId: 'gallery',
      },
      caption: 'Design & build',
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'UX workshop attendees',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'UX workshop attendees',
        galleryId: 'gallery',
      },
      caption: 'Design & build',
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'UX workshop lecturer',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'UX workshop lecturer',
        galleryId: 'gallery',
      },
      caption: 'Design & build',
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Quantum team',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Quantum team',
        galleryId: 'gallery',
      },
      caption: 'Design & build',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
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
    label: 'Button',
    defaultValue: false,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
  {
    id: 'caption',
    type: 'hidden',
    label: 'Caption after body',
    defaultValue: false,
  },
]

export default Block
