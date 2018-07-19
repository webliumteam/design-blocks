import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getOptionValue = (path, defaultValue = false) => _.getOr(defaultValue, ['options', path], this.props.$block)

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Logo}, style} = this.props

    const onlyLogo = !_.get('link')(modifier) && !_.get('body')(modifier)

    return (
      <article className={classNames(style.item, {[style['item--only-logo']]: onlyLogo}, className)}>
        {children}

        <div className={style.item__container}>
          {_.get('logo')(modifier) && (
            <Logo
              bind={`partners[${index}].logo`}
              className={style.logo}
              textClassName={style.logo__title}
              maxWidth={this.getOptionValue('logo-max-width')}
              maxHeight={this.getOptionValue('logo-max-height')}
            />
          )}
          {_.get('body')(modifier) && (
            <Text className={classNames(style.item__desc, this.ui('ui-body'), this.ui('ui-text-center'))} bind={`partners[${index}].desc`} tagName="p" />
          )}
          {_.get('link')(modifier) && (
            <div className={style['item__link-wrapper']}>
              <Button
                linkClassName={style.link}
                buttonClassName={style.button}
                bind={`partners[${index}].cta`}
              />
            </div>
          )}
        </div>
      </article>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-caption') && (
            <Text bind="top-caption" className={classNames(style['caption-decorator'], this.ui('ui-body'), this.ui('ui-text-center'))} tagName="div" />
          )}
          {header && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'))} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'))} tagName="p" />
              )}
            </header>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="partners"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {(this.getModifierValue('button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], this.ui('ui-btns-group'))}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    className={classNames(style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style.link}
                    bind="button"
                  />
                )}
                {this.getModifierValue('button_additional') && (
                  <Button
                    className={classNames(style.button, this.ui('ui-btns-group__item'))}
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Logo'])($editor.components)

Block.defaultContent = {
  partners: {
    background: {
      'nth-child': [
        ['n', {
          color: 'light-shade-color',
          type: 'color',
        }],
      ],
    },
    items: [
      {
        title: {
          content: 'Samsung',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Samsung.</span> It doesn’t need a lot of words. High-quality tech products with superior design.',
          type: 'text',
        },
        logo: {
          text: {
            value: 'Samsung',
            tagName: 'h2',
            fontSize: 24,
          },
        },
        picture: {
          alt: 'Samsung logo',
        },
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
          type: 'link',
        },
      },
      {
        title: {
          content: 'Ford',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Ford.</span> This is our moving force, literally! 100% reliable and credible.',
          type: 'text',
        },
        logo: {
          text: {
            value: 'Ford',
            tagName: 'h2',
            fontSize: 24,
          },
        },
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
          type: 'link',
        },
      },
      {
        title: {
          content: 'Medical Family',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Medical Family.</span> Ensuring good health and medical care for our team for 5 years.',
          type: 'text',
        },
        logo: {
          text: {
            value: 'Medical Family',
            tagName: 'h2',
            fontSize: 24,
          },
        },
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
          type: 'link',
        },
      },
      {
        title: {
          content: 'Coffee Break Now',
          type: 'heading',
        },
        desc: {
          content: '<span style="font-weight: bold">Coffee Break Now.</span> We love their delicious coffee and flavored cakes!',
          type: 'text',
        },
        logo: {
          text: {
            value: 'Coffee Break Now',
            tagName: 'h2',
            fontSize: 24,
          },
        },
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
          type: 'link',
        },
      },
    ],
  },
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Here are some of our trusted partners who help us deliver the best services and solutions for clients. Want to become our partner? Contact us, and we’ll discuss the details of possible cooperation.',
    type: 'subtitle',
  },
  button: {
    textValue: 'Show more',
    type: 'secondary',
  },
  button_additional: {
    textValue: 'Show more',
    type: 'primary',
  },
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  logo: {
    defaultValue: true,
    label: 'Partner name / logo',
    type: 'checkbox',
    sortOrder: 30,
  },
  body: {defaultValue: true, label: 'Partner description', type: 'checkbox', sortOrder: 40},
  link: {defaultValue: true, label: 'Partner  link (button)', type: 'checkbox', sortOrder: 50},
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 60},
  button_additional: {defaultValue: false, label: 'Button (link)', type: 'hidden', sortOrder: 60},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
