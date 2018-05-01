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
        {!this.getOptionValue('image-hidden') && (
          <Image
            wrapperClassName={style['article__picture-wrapper']}
            pictureClassName={style.article__picture}
            imgClassName={style.article__image}
            bind={`services[${index}].picture`}
            size={{
              'min-width: 992px': 600,
              'min-width: 768px': 1000,
              'min-width: 480px': 800,
            }}
            resize={{disable: true}}
          />
        )}
        <div className={style.article__content}>
          <Text bind={`services[${index}].title`} className={style.article__title} tagName="h3" />
          {_.get('item-desc')(modifier) && (
            <Text bind={`services[${index}].subtitle`} className={style.article__subtitle} tagName="p" />
          )}
          {_.get('body-text')(modifier) && (
            <Text bind={`services[${index}].text`} className={style.article__text} tagName="p" />
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

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            {this.getModifierValue('top-caption') && (
              <Text bind="top-caption" className={style['caption-decorator']} tagName="div" />
            )}
            <Text bind="title" className={style.title} tagName="h2" />
            {this.getModifierValue('subtitle') && <Text bind="subtitle" className={style.subtitle} tagName="p" />}
          </header>
          <Collection
            className={style['articles-wrapper']}
            bind="services"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={style['btns-group__button']}
                linkClassName={style.link}
                buttonClassName={style.button}
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
  services: {
    background: {},
    items: [
      {
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
        picture: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Quantum E-commerce illustration',
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
        picture: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Quantum Aftersales illustration',
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
  'top-caption': {
    content: 'metus et hendrerit aliquet',
    type: 'text',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Service description', type: 'checkbox'},
  'item-desc': {defaultValue: false, label: 'Service details', type: 'checkbox'},
  'body-text': {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'service-button': {defaultValue: true, label: 'Service button', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
