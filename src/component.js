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
    const {components: {Text, Button, Image}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}
        <div className={style.article__content}>
          <Text bind={`services[${index}].title`} className={classNames(style.article__title, this.ui('ui-heading'), this.ui('ui-text-center'))} tagName="h3" />
          {_.get('item-desc')(modifier) && (
            <Text bind={`services[${index}].subtitle`} className={classNames(style.article__subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'))} tagName="p" />
          )}
          {_.get('body-text')(modifier) && (
            <Text bind={`services[${index}].text`} className={classNames(style.article__text, this.ui('ui-body'))} tagName="p" />
          )}
          {_.get('service-button')(modifier) && (
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              className={style.article__button}
              bind={`services[${index}].cta`}
            />
          )}
        </div>
      </article>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            {this.getModifierValue('top-caption') && (
              <Text bind="top-caption" className={style['caption-decorator']} tagName="div" />
            )}
            <Text bind="title" className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'))} tagName="h2" />
            {this.getModifierValue('subtitle') && <Text bind="subtitle" className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'))} tagName="p" />}
          </header>
          <Collection
            className={style['articles-wrapper']}
            bind="services"
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
                    bind="cta"
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Services',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Do you want to sell and promote your business? Here are best of Quantum services for you: ',
    type: 'subtitle',
  },
  services: {
    items: [
      {
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        },
        title: {
          content: 'Quantum E-commerce',
          type: 'heading',
        },
        subtitle: {
          content: 'Most popular service',
          type: 'subtitle',
        },
        text: {
          content: 'Multipurpose program that will perfectly suit online stores and online retail business. You can add up to 2000 items with a detailed description, characteristics, and photos. Also, the shopping cart, clients’ feedback, rating, and related items option are available.',
          type: 'text',
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
        background: {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        },
        title: {
          content: 'Quantum Aftersales',
          type: 'heading',
        },
        subtitle: {
          content: 'Most popular service',
          type: 'subtitle',
        },
        text: {
          content: 'Aftersales assistance that includes marketing campaigns, additional digital solutions, and educational courses. Our specialists will help to find out what will work for your business and decide on the steps that are to be taken immediately. ',
          type: 'text',
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
  'top-caption': {
    content: 'metus et hendrerit aliquet',
    type: 'text',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 10},
  'item-desc': {defaultValue: false, label: 'Service subtitle', type: 'checkbox', sortOrder: 20},
  'body-text': {defaultValue: true, label: 'Service description', type: 'checkbox', sortOrder: 30},
  'service-button': {defaultValue: true, label: 'Service link (button)', type: 'checkbox', sortOrder: 40},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 50},
  button_additional: {defaultValue: false, label: 'Additional button (link)', type: 'hidden', sortOrder: 60},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
