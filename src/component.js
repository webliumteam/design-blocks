import $editor from 'weblium/editor'

class Block extends React.Component {
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
    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__inner}>
          <Image
            wrapperClassName={classNames(style['item__picture-wrapper'], 'picture-wrapper')}
            pictureClassName={classNames(style.item__picture, 'picture')}
            imgClassName={classNames(style.item__image, 'picture__image')}
            bind={`projects[${index}].picture`}
            resize={{disable: true}}
            onOpenLightbox={openLightbox}
          />
        </div>
      </div>
    )
  }


  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Text, Button, Collection}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <Text tagName="h1" className={classNames(style.title, 'title')} bind="title" />
            {this.getModifierValue('subtitle') && (
              <Text tagName="p" className={classNames(style.subtitle, 'subtitle')} bind="subtitle" />
            )}
          </header>
          <Collection
            className={style['items-wrapper']}
            bind="projects"
            Item={this.collectionItem}
            galleryId="projects"
          />
          {(this.getModifierValue('button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    className={style.butttton}
                    buttonClassName={style.button}
                    linkClassName={style.link}
                    bind="button"
                  />
                )}
                {this.getModifierValue('button_additional') && (
                  <Button
                    className={style.butttton}
                    buttonClassName={style.button}
                    linkClassName={style.link}
                    bind="button_additional"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'Collection'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Gallery',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Browse through our photos to see who we are, how we work, and what inspires us',
    type: 'subtitle',
  },
  projects: [
    {
      picture: {
        alt: 'Illustration for project',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
        galleryId: 'projects',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  button_additional: {
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
    type: 'primary',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block  description', type: 'checkbox', sortOrder: 10},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 20},
  button_additional: {defaultValue: false, label: 'Button additional', type: 'hidden', sortOrder: 30},
}


export default Block
