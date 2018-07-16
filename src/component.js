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
          <Text tagName="h2" className={style.item__title} bind={`cover[${index}].title`} />
          {_.get('subtitle')(modifier) && <Text tagName="p" className={classNames(style.subtitle, 'wt-subtitle')} bind={`cover[${index}].subtitle`} />}
          {(_.get('primary-button')(modifier) || _.get('secondary-button')(modifier)) && (
            <div className={classNames(style['btns-group'], 'wt-btns-group')}>
              <div className="btns-group__inner">
                {_.get('primary-button')(modifier) && (
                  <Button
                    className={classNames(style.button, 'wt-btns-group__item')}
                    linkClassName={style.link}
                    bind={`cover[${index}].cta`}
                  />
                )}
                {_.get('secondary-button')(modifier) && (
                  <Button
                    className={classNames(style.button, 'wt-btns-group__item')}
                    linkClassName={style.link}
                    bind={`cover[${index}]cta-2]`}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Icon}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Slider
            className={style['items-wrapper']}
            bind="cover"
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

Block.components = _.pick(['Slider', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  cover: [
    {
      title: {
        content: 'Quantum Company',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We implement Innovative Projects',
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
      title: {
        content: 'Quantum Company',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We implement Innovative Projects',
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
      title: {
        content: 'Quantum Company',
        type: 'heroTitle',
      },
      subtitle: {
        content: 'We implement Innovative Projects',
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
}

Block.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block subtitle', type: 'checkbox', sortOrder: 10},
  arrows: {defaultValue: true, label: 'Navigation arrows', type: 'checkbox', sortOrder: 20},
  'primary-button': {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 30},
  dots: {defaultValue: true, label: 'Navigation indicators', type: 'checkbox', sortOrder: 40},
  'secondary-button': {defaultValue: false, label: 'Additional button (link) ', type: 'hidden', sortOrder: 50},
}

Block.configuration = {
  enableCoverSlider: true,
}

export default Block
