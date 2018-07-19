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

  collectionItem = ({index, modifier}) => {
    const {components: {Text, Button}, style} = this.props
    return (
      <article className={style.item}>
        <div className={style.item__inner}>
          <Text tagName="h2" className={classNames(style.item__title, this.ui('ui-hero-title'), this.ui('ui-text-center'))} bind={`collection[${index}].item_heading`} />
          {_.get('subtitle')(modifier) && <Text tagName="p" className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'))} bind={`collection[${index}].item_subheading`} />}
          {(_.get('item_button')(modifier) || _.get('item_button_additional')(modifier)) && (
            <div className={classNames(style['btns-group'], this.ui('ui-btns-group'))}>
              <div className="btns-group__inner">
                {_.get('item_button')(modifier) && (
                  <Button
                    className={classNames(style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style.link}
                    bind={`collection[${index}].item_button`}
                  />
                )}
                {_.get('item_button_additional')(modifier) && (
                  <Button
                    className={classNames(style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style.link}
                    bind={`collection[${index}].item_button_additional`}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Slider}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    return (
      <section className={classNames(style.section, this.ui('ui-section'))}>
        <div className={classNames(style.section__inner, this.ui('ui-section__inner'))}>
          <Slider
            className={classNames(style['items-wrapper'], this.ui('ui-section__content'))}
            bind="collection"
            Item={this.collectionItem}
            settings={{
              dots: this.getModifierValue('dots'),
              dotsClass: classNames('slick-dots', style['slider-dots']),
              arrows: this.getModifierValue('arrows'),
              responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    arrows: false,
                  },
                },
              ],
              ...customArrows,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  collection: {
    items: [
      {
        item_heading: {
          content: 'Quantum Company',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'We implement Innovative Projects',
          type: 'subtitle',
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
        item_heading: {
          content: 'Quantum Company',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'We implement Innovative Projects',
          type: 'subtitle',
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
        item_heading: {
          content: 'Quantum Company',
          type: 'heroTitle',
        },
        item_subheading: {
          content: 'We implement Innovative Projects',
          type: 'subtitle',
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

Block.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block subtitle', type: 'checkbox', sortOrder: 10},
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox', sortOrder: 20},
  item_button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 30},
  item_button_additional: {defaultValue: false, label: 'Additional button (link) ', type: 'hidden', sortOrder: 50},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox', sortOrder: 40},
}

Block.configuration = {
  enableCoverSlider: true,
}

export default Block
