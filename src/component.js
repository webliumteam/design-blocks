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
        {this.getModifierValue('item-icon') && (
          <div className={style['item__icon-wrapper']}>
            <Icon className={style.item__icon} bind={`collection[${index}].icon`} />
          </div>
        )}
        <div className={style.item__info}>
          <Text tagName="h2" className={style.item__title} bind={`collection[${index}].heading`} />
          <Text tagName="p" className={style.item__text} bind={`collection[${index}].body`} />
          {this.getModifierValue('price') && (
            <div className={style['item__price-wrapper']}>
              <Text tagName="p" className={style.item__price} bind={`collection[${index}].price`} />
              {this.getModifierValue('caption') && (<Text tagName="p" className={style.item__caption} bind={`collection[${index}].caption`} />)}
            </div>
          )}
        </div>
        {this.getModifierValue('item-button') && (
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            className={style.item__link}
            bind={`collection[${index}].link`}
          />
        )}
      </article>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style: css, $block} = this.props
    const withoutIcon = !this.getModifierValue('item-icon') ? css['section--without-icon'] : ''
    const withoutButton = !this.getModifierValue('item-button') ? css['section--without-button'] : ''
    const withoutPrice = !this.getModifierValue('price') ? css['section--without-price'] : ''
    const withoutPeriod = !this.getModifierValue('caption') ? css['section--without-period'] : ''

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
          {this.getModifierValue('secondary-button') && (
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
        icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        heading: {
          content: 'Basic',
          type: 'heading',
        },
        body: {
          content: '1 Product',
          type: 'text',
        },
        price: {
          content: 'Free',
          type: 'headingLg',
        },
        caption: {
          content: 'For all period',
          type: 'caption',
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
          type: 'primary',
          textValue: 'Choose plan',
        },
      },
      {
        icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        heading: {
          content: 'Standard',
          type: 'heading',
        },
        body: {
          content: '3 products',
          type: 'text',
        },
        price: {
          content: '$80',
          type: 'headingLg',
        },
        caption: {
          content: 'monthly',
          type: 'caption',
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
          type: 'primary',
          textValue: 'Choose plan',
        },
      },
      {
        icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        heading: {
          content: 'Pro',
          type: 'heading',
        },
        body: {
          content: 'Unlimited products',
          type: 'text',
        },
        price: {
          content: '$180',
          type: 'headingLg',
        },
        caption: {
          content: 'monthly',
          type: 'caption',
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
  'item-icon': {defaultValue: true, label: 'Pricing icon', type: 'checkbox'},
  price: {defaultValue: true, label: 'Price', type: 'checkbox'},
  caption: {defaultValue: true, label: 'Price period', type: 'checkbox'},
  'item-button': {defaultValue: true, label: 'Price button', type: 'checkbox'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Block
