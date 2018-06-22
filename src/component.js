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

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Icon, Button}, style} = this.props

    return (
      <article className={classNames(style.item, className)}>
        {children}
        {this.getModifierValue('item_icon') && (
          <div className={style['item__icon-wrapper']}>
            <Icon className={style.item__icon} bind={`collection[${index}].item_icon`} />
          </div>
        )}
        <div className={style.item__info}>
          <Text tagName="h2" className={style.item__title} bind={`collection[${index}].item_heading`} />
          <Text tagName="p" className={style.item__text} bind={`collection[${index}].item_body`} />
          {this.getModifierValue('item_price') && (
            <div className={style['item__price-wrapper']}>
              <Text tagName="p" className={style.item__price} bind={`collection[${index}].item_price`} />
              {this.getModifierValue('item_caption') && (<Text tagName="p" className={style.item__caption} bind={`collection[${index}].item_caption`} />)}
            </div>
          )}
        </div>
        {this.getModifierValue('item_button') && (
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            className={style.item__link}
            bind={`collection[${index}].item_button`}
          />
        )}
      </article>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style: css, $block} = this.props
    const withoutIcon = !this.getModifierValue('item_icon') ? css['section--without-icon'] : ''
    const withoutButton = !this.getModifierValue('item_button') ? css['section--without-button'] : ''
    const withoutPrice = !this.getModifierValue('item_price') ? css['section--without-price'] : ''
    const withoutPeriod = !this.getModifierValue('item_caption') ? css['section--without-period'] : ''

    return (
      <section className={classNames(css.section, withoutIcon, withoutButton, withoutPrice, withoutPeriod)}>
        <div className={css.section__inner}>
          <div className={css.section__header}>
            {this.getModifierValue('title') &&
              <Text tagName="h1" className={classNames(css.title, 'title')} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={classNames(css.subtitle, 'subtitle')} bind="subtitle" />}
          </div>
          <Collection
            className={css['items-wrapper']}
            TagName="div"
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={css['btns-group']}>
              <Button
                linkClassName={css.link}
                buttonClassName={css.button}
                bind="button"
              />
            </div>
          )}
        </div>

      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Icon', 'Button', 'Collection'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Pricing',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Choose the plan that perfectly suits your business needs or personal requirements',
    type: 'subtitle',
  },
  collection: {
    background: {
    },
    items: [
      {
        item_icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        item_heading: {
          content: 'Basic',
          type: 'heading',
        },
        item_body: {
          content: '1 Product',
          type: 'text',
        },
        item_price: {
          content: 'Free',
          type: 'headingLg',
        },
        item_caption: {
          content: 'For all period',
          type: 'caption',
        },
        item_button: {
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
          type: 'primary',
          textValue: 'Choose plan',
        },
      },
      {
        item_icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        item_heading: {
          content: 'Standard',
          type: 'heading',
        },
        item_body: {
          content: '3 products',
          type: 'text',
        },
        item_price: {
          content: '$80',
          type: 'headingLg',
        },
        item_caption: {
          content: 'monthly',
          type: 'caption',
        },
        item_button: {
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
          type: 'primary',
          textValue: 'Choose plan',
        },
      },
      {
        item_icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        item_heading: {
          content: 'Pro',
          type: 'heading',
        },
        item_body: {
          content: 'Unlimited products',
          type: 'text',
        },
        item_price: {
          content: '$180',
          type: 'headingLg',
        },
        item_caption: {
          content: 'monthly',
          type: 'caption',
        },
        item_button: {
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
          type: 'primary',
          textValue: 'Choose plan',
        },
      },
    ],
  },
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
    type: 'secondary',
    size: 'md',
    textValue: 'Additional button',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Pricing title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Pricing description', type: 'checkbox'},
  item_icon: {defaultValue: true, label: 'Pricing icon', type: 'checkbox'},
  item_price: {defaultValue: true, label: 'Price', type: 'checkbox'},
  item_caption: {defaultValue: true, label: 'Price period', type: 'checkbox'},
  item_button: {defaultValue: true, label: 'Price button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}

export default Block
