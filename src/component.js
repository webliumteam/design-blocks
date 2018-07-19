import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button}, style} = this.props

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__header}>
          <Text tagName="h3" className={classNames(style.item__title, 'heading', 'text-center')} bind={`collection[${index}].title`} />
          {this.getModifierValue('body') && (
            <Text tagName="p" className={classNames(style.item__desc, 'body', 'text-center')} bind={`collection[${index}].desc`} />
          )}
        </div>
        {this.getModifierValue('item-button') && (
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            className={style.item__button}
            bind={`collection[${index}].cta`}
          />
        )}
      </div>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props
    const blockHeader = this.getModifierValue('title') || this.getModifierValue('subtitle')

    return (
      <section className={classNames(style.section, blockHeader && style['section--with-header'])}>
        <div className={style.section__inner}>
          {blockHeader && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text tagName="h2" className={classNames(style.title, 'title', 'text-center')} bind="title" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text tagName="p" className={classNames(style.subtitle, 'subtitle', 'text-center')} bind="subtitle" />
              )}
            </div>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {(this.getModifierValue('cta') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('cta') && (
                  <Button
                    className={classNames(style['btns-group__button'], 'butttton')}
                    linkClassName={style.link}
                    buttonClassName={style.button}
                    bind="cta"
                  />
                )}
                {this.getModifierValue('button_additional') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
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

Wireframe.components = _.pick(['Text', 'Collection', 'Button'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  title: {
    content: 'Best Flower Delivery in Town',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'We can deliver even the most unusual ideas!',
    type: 'subtitle',
  },
  collection: {
    background: {
      'nth-child': [
        ['n', {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5ad5a3826678f100250985e4.jpeg',
          imageColor: [250, 250, 250],
        }],
      ],
    },
    items: [
      {
        title: {
          type: 'heading',
          content: 'Spring flowers',
        },
        desc: {
          type: 'text',
          content: 'Take a look at our best collection of beautiful flowers',
        },
        cta: {
          textValue: 'Order spring flowers',
          type: 'primary',
        },
      },
      {
        title: {
          type: 'heading',
          content: 'Summer flowers',
        },
        desc: {
          type: 'text',
          content: 'Take a look at our best collection of beautiful flowers',
        },
        cta: {
          textValue: 'Order summer flowers',
          type: 'primary',
        },
      },
      {
        title: {
          type: 'heading',
          content: 'Autumn flowers',
        },
        desc: {
          type: 'text',
          content: 'Take a look at our best collection of beautiful flowers',
        },
        cta: {
          textValue: 'Order autumn flowers',
          type: 'primary',
        },
      },
    ],
  },
  cta: {
    textValue: 'More about our flowers',
    type: 'secondary',
    size: 'lg',
  },
  button_additional: {
    textValue: 'More about our flowers',
    type: 'primary',
    size: 'lg',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: true, label: 'Block subtitle', type: 'checkbox', sortOrder: 20},
  body: {defaultValue: true, label: 'Title description', type: 'checkbox', sortOrder: 30},
  'item-button': {defaultValue: false, label: 'Panel button (link) ', type: 'checkbox', sortOrder: 40},
  cta: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 50},
  button_additional: {defaultValue: false, label: 'Button additional', type: 'hidden', sortOrder: 60},
}

export default Wireframe
