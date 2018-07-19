import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, itemIndex}) => {
    const {
      components: {Text, Button, Background},
      style,
      content,
    } = this.props
    const showButton =
      this.getModifierValue('primary-button') || this.getModifierValue('secondary-button')
    const itemsLength = content.cover.items.length
    const currentItem = itemIndex < 9 ? `0${itemIndex + 1}` : `${itemIndex + 1}`
    const itemsCount = itemsLength < 10 ? `/0${itemsLength}` : `/${itemsLength}`

    return (
      <div className={style.item}>
        <div className={style.item__inner}>
          <Background
            bind={`cover[${index}].item_card_background`}
            tagName="div"
            className={style.item__content}
          >
            {this.getModifierValue('subtitle') && (
              <Text
                tagName="p"
                className={classNames(style.item__subtitle, 'subtitle', 'text-center')}
                bind={`cover[${index}].item_subheading`}
              />
            )}
            {this.getModifierValue('title') && (
              <Text
                tagName="h2"
                className={classNames(style.item__title, 'hero-title', 'text-center')}
                bind={`cover[${index}].item_heading`}
              />
            )}
            {this.getModifierValue('body') && (
              <Text tagName="p" className={classNames(style.item__body, 'body', 'text-center')} bind={`cover[${index}].item_body`} />
            )}
            {showButton && (
              <div className={classNames(style['btns-group'], 'btns-group')}>
                <div className="btns-group__inner">
                  {this.getModifierValue('primary-button') && (
                    <Button
                      className={classNames(style.button, 'butttton')}
                      linkClassName={style.link}
                      bind={`cover[${index}].item_button`}
                    />
                  )}
                  {this.getModifierValue('secondary-button') && (
                    <Button
                      className={classNames(style.button, 'butttton')}
                      linkClassName={style.link}
                      bind={`cover[${index}].item_button_additional`}
                    />
                  )}
                </div>
              </div>
            )}
          </Background>
          {this.getModifierValue('counter') && (
            <div className={style.counter}>
              <span className={style.counter__current}>{currentItem}</span>
              <span className={style.counter__count}>&nbsp;{itemsCount}</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {
      components: {Slider},
      style,
      content,
      $block,
    } = this.props
    const customArrows =
      this.getModifierValue('arrows') && this.getOptionValue('custom-arrows')
        ? {
          nextArrow: (
            <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />
          ),
          prevArrow: (
            <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />
          ),
        }
        : {}

    return (
      <section className={style.section}>
        <Slider
          className={style['items-wrapper']}
          bind="cover"
          Item={this.collectionItem}
          settings={{
            arrows: this.getModifierValue('arrows'),
            ...customArrows,
          }}
          itemProps={{
            modifier: $block.modifier,
            content,
          }}
        />
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Background', 'Button', 'Slider'])($editor.components)

Wireframe.defaultContent = {
  cover: {
    items: [
      {
        background: {
          type: 'color',
          color: 'dark-accent-color',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
        },
        item_heading: {
          content: 'SPRING FLOWERS',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'For wedding',
          type: 'subtitle',
        },
        item_body: {
          content:
            'Take a look at our best collection of beautiful flowers from all over the world',
          type: 'text',
        },
        item_button: {
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
        item_button_additional: {
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
      },
      {
        background: {
          type: 'color',
          color: 'dark-accent-color',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
        },
        item_heading: {
          content: 'FOR WEDDING',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'Spring flowers',
          type: 'subtitle',
        },
        item_body: {
          content:
            'Take a look at our best collection of beautiful flowers from all over the world',
          type: 'text',
        },
        item_button: {
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
        item_button_additional: {
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
      },
      {
        background: {
          type: 'color',
          color: 'dark-accent-color',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
        },
        item_heading: {
          content: 'FOR WEDDING',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'Spring flowers',
          type: 'subtitle',
        },
        item_body: {
          content:
            'Take a look at our best collection of beautiful flowers from all over the world',
          type: 'text',
        },
        item_button: {
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
        item_button_additional: {
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
      },
    ],
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox', sortOrder: 10},
  title: {defaultValue: true, label: 'Panel title', type: 'checkbox', sortOrder: 20},
  body: {defaultValue: true, label: 'Panel text', type: 'checkbox', sortOrder: 30},
  'primary-button': {defaultValue: false, label: 'Panel button (link) ', type: 'checkbox', sortOrder: 40},
  'secondary-button': {defaultValue: false, label: 'Panel additional button (link) ', type: 'checkbox', sortOrder: 50},
  counter: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox', sortOrder: 60},
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox', sortOrder: 70},
}

export default Wireframe
