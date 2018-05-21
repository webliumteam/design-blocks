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
    const {components: {Text, Button, Background}, style, content} = this.props
    const showButton = this.getModifierValue('primary-button') || this.getModifierValue('secondary-button')
    const itemsLength = content.cover.items.length
    const currentItem = itemIndex < 9 ? `0${itemIndex + 1}` : `${itemIndex + 1}`
    const itemsCount = itemsLength < 10 ? `/0${itemsLength}` : `/${itemsLength}`

    return (
      <div className={style.item}>
        <div className={style.item__inner}>
          <Background bind={`cover[${index}].card`} tagName="div" className={style.item__content}>
            {this.getModifierValue('subtitle') && <Text tagName="p" className={style.item__subtitle} bind={`cover[${index}].subtitle`} />}
            {this.getModifierValue('title') && <Text tagName="h2" className={style.item__title} bind={`cover[${index}].title`} />}
            {this.getModifierValue('body') && <Text tagName="p" className={style.item__body} bind={`cover[${index}].body`} />}
            {showButton && (
              <div className={style['btns-group']}>
                {this.getModifierValue('primary-button') && (
                  <Button
                    className={style.button}
                    linkClassName={style.link}
                    bind={`cover[${index}].cta`}
                  />
                )}
                {this.getModifierValue('secondary-button') && (
                  <Button
                    className={style.button}
                    linkClassName={style.link}
                    bind={`cover[${index}].['cta-2']`}
                  />
                )}
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

  render() {
    const {components: {Slider}, style, content, $block} = this.props
    const customArrows = this.getModifierValue('arrows') && this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}

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
        item_background: {
          type: 'color',
          color: 'dark-accent-color',
        },
        item_card_background: {
          type: 'color',
          color: 'light-shade-color',
        },
        item_heading: {
          content: 'FOR WEEDING',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'Spring flowers',
          type: 'subtitle',
        },
        item_body: {
          content: 'Take a look at our best collection of beautiful flowers from all over the world',
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
        card: {
          type: 'color',
          color: 'light-shade-color',
        },
        title: {
          content: 'FOR WEDDING',
          type: 'heroTitle',
        },
        subtitle: {
          content: 'Spring flowers',
          type: 'subtitle',
        },
        body: {
          content: 'Take a look at our best collection of beautiful flowers from all over the world',
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
        'cta-2': {
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
        card: {
          type: 'color',
          color: 'light-shade-color',
        },
        title: {
          content: 'FOR WEEDING',
          type: 'heroTitle',
        },
        subtitle: {
          content: 'Spring flowers',
          type: 'subtitle',
        },
        body: {
          content: 'Take a look at our best collection of beautiful flowers from all over the world',
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
        'cta-2': {
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
  title: {defaultValue: true, label: 'Hero title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  body: {defaultValue: true, label: 'Text', type: 'checkbox'},
  arrows: {defaultValue: true, label: 'Arrow navigation', type: 'checkbox'},
  counter: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox'},
  'primary-button': {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
