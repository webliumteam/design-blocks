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
        <div className={style.item__inner}>
          {this.getModifierValue('item-icon') && (
            <div className={style['item__icon-wrapper']}>
              <Icon className={style.item__icon} bind={`items[${index}].icon`} />
            </div>
          )}
          <div className={style.item__content}>
            <div className={style.item__info}>
              <Text tagName="h2" className={style.item__title} bind={`items[${index}].heading`} />
              {this.getModifierValue('employment') && (
                <Text tagName="p" className={style.item__text} bind={`items[${index}].employment`} />
              )}
              {this.getModifierValue('position') && (
                <Text tagName="p" className={style.item__text} bind={`items[${index}].location`} />
              )}
            </div>
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              className={style.item__link}
              bind={`items[${index}].link`}
            />
          </div>
        </div>
      </article>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style: css, $block} = this.props

    return (
      <section className={classNames(css.section)}>
        <div className={css.section__inner}>
          <div className={css.section__header}>
            {this.getModifierValue('top-caption') && (
              <Text bind="top-caption" className={css['caption-decorator']} tagName="div" />
            )}
            <Text tagName="h1" className={css.title} bind="title" />
            {this.getModifierValue('subtitle') && <Text tagName="p" className={css.subtitle} bind="subtitle" />}
          </div>
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
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Icon', 'Button', 'Collection'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Careers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We’re always looking for talents who want to grow personally and professionally in our company. Please check the open positions: ',
    type: 'subtitle',
  },
  items: {
    background: {
      'nth-child': [
        ['2n', {
          type: 'color',
          color: 'light-accent-color',
        }],
        ['2n+1', {
          type: 'color',
          color: 'dark-accent-color?lighten=30',
        }],
      ],
    },
    items: [
      {
        icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        heading: {
          content: 'Web Developer',
          type: 'heading',
        },
        employment: {
          content: 'Full time',
          type: 'text',
        },
        location: {
          content: 'London',
          type: 'text',
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
          type: 'link',
          textValue: 'More about vacancy',
        },
      },
      {
        icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        heading: {
          content: '3D designer',
          type: 'heading',
        },
        employment: {
          content: 'Remote work',
          type: 'text',
        },
        location: {
          content: 'Amsterdam',
          type: 'text',
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
          type: 'link',
          textValue: 'More about vacancy',
        },
      },
      {
        icon: {
          svg: "<svg viewBox='0 0 70 70' fill='currentColor'><circle cx='35' cy='35' r='35' /></svg>",
          fill: 'brand-color',
        },
        heading: {
          content: 'Office manager',
          type: 'heading',
        },
        employment: {
          content: 'Full time',
          type: 'text',
        },
        location: {
          content: 'Amsterdam',
          type: 'text',
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
          type: 'link',
          textValue: 'More about vacancy',
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
    textValue: 'Learn more',
  },
  'top-caption': {
    content: 'sapien ut libero',
    type: 'text',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Vacancy icon', type: 'checkbox'},
  employment: {defaultValue: true, label: 'Type of employment (full-time/part-time)', type: 'checkbox'},
  position: {defaultValue: true, label: 'Vacancy location', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
