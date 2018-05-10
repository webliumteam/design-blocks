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

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image}, style: css} = this.props
    const showBody = _.get('body-text')(modifier) || _.get('service-button')(modifier)
    const contentModifierClass = _.get('content-arrangement')(modifier) && css['item__content--reverse']

    return (
      <div className={classNames(css.item, className)}>
        {children}
        <Image
          wrapperClassName={css['item__picture-wrapper']}
          pictureClassName={css.item__picture}
          imgClassName={css.item__image}
          bind={`services[${index}].picture`}
          size={{
            'min-width: 992px': 600,
            'min-width: 768px': 1000,
            'min-width: 480px': 800,
          }}
          resize={{disable: true}}
        />
        <div className={classNames(css.item__content, contentModifierClass)}>
          <Text bind={`services[${index}].title`} className={css.item__title} tagName="h2" />
          {showBody && (
            <div className={css.item__body}>
              {_.get('body-text')(modifier) && (
                <Text bind={`services[${index}].text`} className={css.item__text} tagName="p" />
              )}
              {_.get('service-button')(modifier) && (
                <Button
                  linkClassName={css.link}
                  buttonClassName={css.button}
                  className={css.item__button}
                  bind={`services[${index}].cta`}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h1" />
            {this.getModifierValue('subtitle') && <Text bind="subtitle" className={style.subtitle} tagName="p" />}
          </header>
          <Collection
            className={style['items-wrapper']}
            bind="services"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={style.button}
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  services: [
    {
      title: {
        content: 'Manufacturing',
        type: 'heading',
      },
      text: {
        content: 'We use only high-quality materials for good manufacturing. All products are designed and manufactured in line with your preferences. Just choose the materials, send us design requirements, and we will contact with you shortly to discuss the details.',
        type: 'text',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Manufacturing illustration',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
    {
      title: {
        content: 'Delivery and Support',
        type: 'heading',
      },
      text: {
        content: 'We provide a package of services that ensure the aftersales technical service and diagnostics. We guarantee that our goods will please you for many years, and you will enjoy decent support of our specialists.',
        type: 'text',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Delivery and Support illustration',
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
        textValue: 'Request a quote',
        type: 'primary',
      },
    },
  ],
  title: {
    content: 'Services',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Do you want to sell and promote your business? Here are best of Quantum services for you: ',
    type: 'subtitle',
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
    type: 'secondary',
  },
}

Block.modifierScheme = {
  'content-arrangement': {
    defaultValue: false,
    name: 'Arrange elements',
    type: 'swap',
  },
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
  'body-text': {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'service-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Block
