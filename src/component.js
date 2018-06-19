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
            <Icon className={style.item__icon} bind={`items[${index}].icon`} />
          </div>
        )}
        <div className={style.item__info}>
          <Text tagName="h2" className={style.item__title} bind={`items[${index}].heading`} />
          <Text tagName="p" className={style.item__text} bind={`items[${index}].body`} />
          {this.getModifierValue('price') && (
            <div className={style['item__price-wrapper']}>
              <Text tagName="p" className={style.item__price} bind={`items[${index}].price`} />
              {this.getModifierValue('caption') && (<Text tagName="p" className={style.item__caption} bind={`items[${index}].caption`} />)}
            </div>
          )}
        </div>
        {this.getModifierValue('item-button') && (
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            className={style.item__link}
            bind={`items[${index}].link`}
          />
        )}
      </article>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style: css, $block} = this.props

    return (
      <section className={classNames(css.section)}>
        <div className={css.section__inner}>
          <div className={css.section__header}>
            <Text tagName="h1" className={css.title} bind="title" />
            {this.getModifierValue('subtitle') && <Text tagName="p" className={css.subtitle} bind="subtitle" />}
          </div>
          <Collection
            className={css['items-wrapper']}
            TagName="div"
            bind="items"
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
  items: {
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
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Product icon', type: 'checkbox'},
  price: {defaultValue: true, label: 'Price', type: 'checkbox'},
  caption: {defaultValue: true, label: 'Price period', type: 'checkbox'},
  'item-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Block
