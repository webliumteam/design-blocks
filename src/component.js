import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {}

  onResizeHeight = resizeHeight => this.setState({resizeHeight})

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)


  collectionItem = ({index, children, className}) => {
    const {components: {Text, Resizer}, style} = this.props
    const hiddenBodyClass = !this.getModifierValue('item-body') && style['item--hidden-body']

    return (
      <Resizer
        styleProp="minHeight"
        bindToModifier="resizer.collection"
        min={this.getOptionValue('min-resize')}
        max={this.getOptionValue('max-resize')}
        disable={this.getOptionValue('disable-resizer')}
        state={this.state.resizeHeight}
        changeState={this.onResizeHeight}
      >
        <div className={classNames(style.item, hiddenBodyClass, className)}>
          {children}
          <div className={style.item__inner}>
            <div className={style.item__text}>
              <Text tagName="h2" className={style.item__heading} bind={`collection[${index}].heading`} />
              {this.getModifierValue('item-body') && (
                <Text tagName="p" className={style.item__description} bind={`collection[${index}].text`} />
              )}
            </div>
          </div>
        </div>
      </Resizer>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props
    const showButtonGroups = this.getModifierValue('main-button') || this.getModifierValue('additional-button')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('title') && (
            <Text tagName="h1" className={style.title} bind="title" />
          )}
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={style.subtitle} bind="subtitle" />
          )}
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {showButtonGroups &&
            <div className={style['btns-group']}>
              {this.getModifierValue('main-button') && (
                <Button
                  buttonClassName={style['btns-group__button']}
                  linkClassName={style['btns-group__link']}
                  bind="mainButton"
                />
              )}
              {this.getModifierValue('additional-button') && (
                <Button
                  buttonClassName={style['btns-group__button']}
                  linkClassName={style['btns-group__link']}
                  bind="additionalButton"
                />
              )}
            </div>
          }
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'Collection', 'Resizer'])($editor.components)

Block.defaultContent = {
  title: {
    type: 'blockTitle',
    content: 'Why Choose Us',
  },
  subtitle: {
    type: 'subtitle',
    content: 'Still have some hesitations whether cooperation with us is worth the trouble? Check the reasons why you should choose us among other companies!',
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
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          imageColor: [216, 216, 216],
        }],
      ],
    },
    items: [
      {
        heading: {
          type: 'heading',
          content: 'Open-minded',
        },
        text: {
          type: 'text',
          content: 'We always look for new ideas, explore various spheres, and apply a positive approach',
        },
      },
      {
        heading: {
          type: 'heading',
          content: 'Long-term cooperation',
        },
        text: {
          type: 'text',
          content: 'We believe that effective cooperation should last for ages',
        },
      },
      {
        heading: {
          type: 'heading',
          content: 'Turnkey solutions',
        },
        text: {
          type: 'text',
          content: 'Every good or service we provide is empowered with the top-notch features to deliver the best result to our customers',
        },
      },
    ],
  },
  mainButton: {
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
    textValue: 'Learn more',
  },
  additionalButton: {
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
    textValue: 'Learn more',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Why us description', type: 'checkbox'},
  'item-body': {defaultValue: true, label: 'Advantage description', type: 'checkbox'},
  'main-button': {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Block
