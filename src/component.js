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
            <Text bind={`numbers[${index}].body`} className={classNames(style.item__desc, 'body')} tagName="p" />
          </div>
        </div>
        <Background tagName="div" className={style['item__numbers-bg']} bind="numbersBackground">
          <Text bind={`numbers[${index}].number`} className={classNames(style.item__numbers, 'heading', 'text-center')} tagName="strong" />
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
                <Text className={classNames(style.title, 'title')} bind="title" tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text className={classNames(style.subtitle, 'subtitle')} bind="subtitle" tagName="p" />
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
          {(this.getModifierValue('button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
                    linkClassName={style.link}
                    bind="button"
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
    color: 'dark-accent-color?lighten=15',
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
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 30},
  button_additional: {defaultValue: false, label: 'Button additional', type: 'hidden', sortOrder: 30},
}


export default Block
