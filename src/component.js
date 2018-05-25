import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image, Background}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__inner}>
          <div className={style['item__desc-wrapper']}>
            <Text bind={`numbers[${index}].body`} className={style.item__desc} tagName="p" />
          </div>
        </div>
        <Background tagName="div" className={style['item__numbers-bg']} bind="numbersBackground">
          <Text bind={`numbers[${index}].number`} className={style.item__numbers} tagName="strong" />
        </Background>
      </div>
    )
  }

  render() {
    const {components: {Text, Button, Collection}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {(this.getModifierValue('title') || this.getModifierValue('subtitle')) && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text className={style.title} bind="title" tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text className={style.subtitle} bind="subtitle" tagName="p" />
              )}
            </header>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="numbers"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'Collection', 'Background'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Our Results in Numbers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We work to create new opportunities for our clients and help them to conquer the market. We’re proud of our achievements and want to share our results with you?',
    type: 'subtitle',
  },
  numbersBackground: {
    type: 'color',
    color: 'dark-accent-color',
  },
  numbers: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-accent-color',
        }],
      ],
    },
    items: [
      {
        body: {
          content: 'increase in profits of our customers',
          type: 'text',
        },
        number: {
          content: '128%',
          type: 'heading',
        },
      },
      {
        body: {
          content: 'higher customer satisfaction',
          type: 'text',
        },
        number: {
          content: '527%',
          type: 'heading',
        },
      },
      {
        body: {
          content: 'of clients found new sales markets',
          type: 'text',
        },
        number: {
          content: '92%',
          type: 'heading',
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
    textValue: 'Learn more',
    type: 'secondary',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}


export default Block
