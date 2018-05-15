import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image, Background}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__inner}>
          {_.get('image')(modifier) && (
            <Image
              wrapperClassName={style['picture-wrapper']}
              pictureClassName={style.item__pic}
              imgClassName={style.item__img}
              bind={`numbers[${index}].picture`}
              size={
                {
                  'min-width: 992px': 320,
                  'min-width: 768px': 420,
                  'min-width: 480px': 710,
                  'min-width: 320px': 420,
                }
              }
              resize={{disable: true}}
            />
          )}
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

    const withoutImage = !this.getModifierValue('image')

    return (
      <section className={classNames(style.section, {[style['section--state-4']]: withoutImage})}>
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
    color: 'dark-shade-color',
  },
  numbers: [
    {
      body: {
        content: 'increase in profits of our customers',
        type: 'text',
      },
      number: {
        content: '128%',
        type: 'heading',
      },
      picture: {
        alt: 'Illustration for number',
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
      picture: {
        alt: 'Illustration for number',
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
      picture: {
        alt: 'Illustration for number',
      },
    },
  ],
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
  image: {defaultValue: true, label: 'Image', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
}


export default Block
