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

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button}, style} = this.props

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__header}>
          <Text tagName="h2" className={style.item__title} bind={`collection[${index}].title`} />
          {this.getModifierValue('body') && (
            <Text tagName="p" className={style.item__desc} bind={`collection[${index}].desc`} />
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

  render() {
    const {components: {Collection, Button}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('cta') && (
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

Wireframe.components = _.pick(['Text', 'Collection', 'Button'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  title: {
    content: 'Hello world',
    type: 'blockTitle',
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
}

Wireframe.modifierScheme = {
  body: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'item-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  cta: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
