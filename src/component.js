import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getPersonInfo = ({index, modifier}) => {
    const {
      components: {Text, Image, SocialIcons},
      style,
    } = this.props
    return [
      _.get('item_image')(modifier) && (
        <Image
          wrapperClassName={classNames(style['item__pic-wrapper'], this.ui('ui-picture-wrapper'))}
          pictureClassName={classNames(style.item__pic, this.ui('ui-picture'))}
          imgClassName={classNames(style.item__img, this.ui('ui-picture__image'))}
          bind={`collection[${index}].item_image`}
          size={{
            'min-width: 320px': 120,
          }}
          resize={{disable: true}}
        />
      ),
      <Text
        bind={`collection[${index}].item_person`}
        className={classNames(
          style.item__title,
          this.ui('ui-heading-mp'),
          this.ui('ui-text-center'),
        )}
        tagName="h2"
      />,
      _.get('item_category')(modifier) && (
        <Text
          bind={`collection[${index}].item_category`}
          className={classNames(
            style.item__position,
            this.ui('ui-caption-mp'),
            this.ui('ui-text-center'),
          )}
          tagName="p"
        />
      ),
      _.get('item_socials')(modifier) && (
        <SocialIcons className={style.item__socials} bind={`collection[${index}].item_socials`} />
      ),
    ]
  }

  getTestimonials = ({index, modifier}) => {
    const {
      components: {Text},
      style,
    } = this.props
    return [
      <Text
        bind={`collection[${index}].item_body`}
        className={classNames(style.item__desc, this.ui('ui-body-mp'), this.ui('ui-text-center'))}
        tagName="p"
      />,
      _.get('item_date')(modifier) && (
        <Text
          bind={`collection[${index}].item_date`}
          className={classNames(
            style.item__time,
            this.ui('ui-caption-mp'),
            this.ui('ui-text-center'),
          )}
          tagName="time"
        />
      ),
    ]
  }

  collectionItem = ({children, className, ...rest}) => {
    const {style} = this.props
    const isRow =
      this.getOptionValue('personal-info-wrapper') && this.getOptionValue('testimonials-wrapper')
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={classNames(style.item__inner, isRow && style['item__inner--row'])}>
          {this.getOptionValue('personal-info-wrapper') ? (
            <div className={style['item__author-wrapper']}>{this.getPersonInfo(rest)}</div>
          ) : (
            this.getPersonInfo(rest)
          )}
          {this.getOptionValue('testimonials-wrapper') ? (
            <div className={style['item__testimonials-wrapper']}>{this.getTestimonials(rest)}</div>
          ) : (
            this.getTestimonials(rest)
          )}
        </div>
      </article>
    )
  }

  ui = value => (_.get('$block.modifier.__enableThemes', this.props) ? value : null)

  render() {
    const {
      components: {Slider, Text, Button, Icon},
      style,
      $block,
    } = this.props
    const customArrows = this.getOptionValue('custom-arrows')
      ? {
        nextArrow: (
          <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />
        ),
        prevArrow: (
          <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />
        ),
      }
      : {}
    return (
      <section className={classNames(style.section, this.ui('ui-section'))}>
        <div className={classNames(style.section__inner, this.ui('ui-section__inner'))}>
          <header className={classNames(this.ui('ui-section__header'))}>
            {this.getModifierValue('icon_decorator') && (
              <Icon
                className={classNames(style['top-icon'], this.ui('ui-icon'))}
                bind="icon_decorator"
              />
            )}
            <Text
              bind="title"
              className={classNames(style.title, this.ui('ui-title-mp'), this.ui('ui-text-center'))}
              tagName="h1"
            />
            {this.getModifierValue('subtitle') && (
              <Text
                bind="subtitle"
                className={classNames(
                  style.subtitle,
                  this.ui('ui-subtitle-mp'),
                  this.ui('ui-text-center'),
                )}
                tagName="p"
              />
            )}
          </header>
          <Slider
            className={classNames(
              style['items-wrapper'],
              {
                [style['items-wrapper--image-none']]: !this.getModifierValue('item_image'),
              },
              this.ui('ui-section__content'),
            )}
            bind="collection"
            Item={this.collectionItem}
            settings={{
              arrows: true,
              ...customArrows,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <footer className={classNames(this.ui('ui-section__footer'))}>
              <div className={classNames(style['btns-group'], this.ui('ui-btns-group'))}>
                <div classNames={classNames(style['btns-group__inner'], 'btns-group__inner')}>
                  <Button
                    buttonClassName={classNames(style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style.link}
                    bind="button"
                  />
                </div>
              </div>
            </footer>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button', 'Image', 'Icon', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  icon_decorator: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'Read the success stories of our customers to find out why so many companies choose us.',
    type: 'subtitle',
  },
  collection: {
    items: [
      {
        item_person: {
          content: 'Amanda Peterson',
          type: 'heading',
        },
        item_category: {
          content: 'Marketing Director at Fresh Food Co.',
          type: 'caption',
        },
        item_socials: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'linkedin',
              name: 'LinkedIn',
              url: 'http://linkedin.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'softRect',
            innerFill: true,
            preset: 'preset001',
            offset: 11,
            color: '#979797',
            sizes: [20, 24, 40],
            size: 24,
          },
        },
        item_body: {
          content:
            '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
          type: 'text',
        },
        item_date: {
          content: 'December 15, 2017',
          type: 'caption',
        },
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Amanda Peterson photo',
        },
      },
      {
        item_person: {
          content: 'Amanda Peterson',
          type: 'heading',
        },
        item_category: {
          content: 'Marketing Director at Fresh Food Co.',
          type: 'caption',
        },
        item_body: {
          content:
            '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
          type: 'text',
        },
        item_date: {
          content: 'December 15, 2017',
          type: 'caption',
        },
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Amanda Peterson photo',
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'Learn more',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox', sortOrder: 20},
  item_image: {defaultValue: true, label: "Client's photo", type: 'checkbox', sortOrder: 30},
  item_category: {
    defaultValue: true,
    label: "Client's job position",
    type: 'checkbox',
    sortOrder: 40,
  },
  item_socials: {defaultValue: true, label: "Client's contacts", type: 'checkbox', sortOrder: 50},
  item_date: {defaultValue: true, label: 'Comment date', type: 'checkbox', sortOrder: 60},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 70},
  icon_decorator: {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
