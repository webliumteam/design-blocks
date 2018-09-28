import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
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
          wrapperClassName={classNames(
            style['item__pic-wrapper'],
            'w-picture-wrapper',
          )}
          pictureClassName={classNames(style.item__pic, 'w-picture')}
          imgClassName={classNames(style.item__img, 'w-picture__image')}
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
          'w-heading',
          'w-text-center',
        )}
        tagName="h2"
      />,
      _.get('item_category')(modifier) && (
        <Text
          bind={`collection[${index}].item_category`}
          className={classNames(
            style.item__position,
            'w-caption',
            'w-text-center',
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
        className={classNames(
          style.item__desc,
          'w-body',
          'w-text-center',
        )}
        tagName="p"
      />,
      _.get('item_date')(modifier) && (
        <Text
          bind={`collection[${index}].item_date`}
          className={classNames(
            style.item__time,
            'w-caption',
            'w-text-center',
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

  render() {
    const {
      components: {Slider, Text, Button},
      style,
      $block,
      content,
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

    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const footer = this.getModifierValue('button') || this.getModifierValue('button_additional')
    const oneItem = content.collection.items.length === 1 && style['section--one-item']

    return (
      <section className={classNames(style.section, 'w-section', oneItem)}>
        <div
          className={classNames(
            style.section__inner,
            'w-section__inner',
          )}
        >
          {header && (
            <header
              className={classNames(
                style.section__header,
                'w-section__header',
              )}
            >
              {this.getModifierValue('title') && (
                <Text
                  bind="title"
                  className={classNames(
                    style.title,
                    'w-title',
                    'w-text-center',
                  )}
                  tagName="h2"
                />
              )}
              {this.getModifierValue('subtitle') && (
                <Text
                  bind="subtitle"
                  className={classNames(
                    style.subtitle,
                    'w-subtitle',
                    'w-text-center',
                  )}
                  tagName="p"
                />
              )}
            </header>
          )}
          <Slider
            className={classNames(
              style['items-wrapper'],
              {
                [style['items-wrapper--image-none']]: !this.getModifierValue('item_image'),
              },
              'w-section__content',
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
            hideBackgroundControl
          />
          {footer && (
            <footer
              className={classNames(
                style.section__footer,
                'w-section__footer',
              )}
            >
              <div
                className={classNames(
                  style['btns-group'],
                  'w-btns-group',
                )}
              >
                <div
                  className={classNames(
                    style['btns-group__inner'],
                    'btns-group__inner',
                  )}
                >
                  {this.getModifierValue('button') && (
                    <Button
                      buttonClassName={classNames(
                        style['btns-group__item'],
                        'w-btns-group__item',
                      )}
                      bind="button"
                    />
                  )}
                  {this.getModifierValue('button_additional') && (
                    <Button
                      buttonClassName={classNames(
                        style['btns-group__item'],
                        'w-btns-group__item',
                      )}
                      bind="button_additional"
                    />
                  )}
                </div>
              </div>
            </footer>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button', 'Image', 'SocialIcons'])($editor.components)

Block.defaultContent = {
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
          content: 'Jeff Gordons',
          type: 'heading',
        },
        item_category: {
          content: 'CEO at Clear Thinking',
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
            '“Our company started to work with Quantum 4 years ago. We had only positive experience and implemented a lot of projects together. We’re totally satisfied and now we know that we can rely on Quantum experts any time.”',
          type: 'text',
        },
        item_date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Jeff Gordons photo',
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'Learn more',
  },
  button_additional: {
    textValue: 'Request a quote',
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
  button_additional: {
    defaultValue: true,
    label: 'Additional button (link)',
    type: 'checkbox',
    sortOrder: 80,
  },
}

export default Block
