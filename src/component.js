import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, modifier}) => {
    const {components: {Text, Button}, style} = this.props
    return (
      <article className={style.item}>
        <div className={style.item__inner}>
          <h2 className={style.item__title}>
            <Text bind={`cover[${index}].title`} />
          </h2>
          {_.get('subtitle')(modifier) && (
            <p className={style.subtitle}>
              <Text bind={`cover[${index}].subtitle`} />
            </p>
          )}
          {_.get('primary-button')(modifier) && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
                bind={`cover[${index}].cta`}
              />
            </div>
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider}, style, $block} = this.props
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
  cover: [
    {
      title: 'Quantum Company',
      subtitle: 'We implement Innovative Projects',
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
      id: 'c4e3de5f-776a-405b-a034-dc2307069714',
    },
    {
      title: 'Quantum Company',
      subtitle: 'We implement Innovative Projects',
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
      id: '73263c9a-8d0e-41dc-85e1-66c6db9ea9d3',
    },
    {
      title: 'Quantum Company',
      subtitle: 'We implement Innovative Projects',
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
      id: 'b5f64fb3-d94e-4ecf-b7ff-a4a5700a2457',
    },
  ],
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  {
    id: 'primary-button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
  {
    id: 'arrows',
    type: 'checkbox',
    label: 'Navigation arrows',
    defaultValue: true,
  },
  {
    id: 'dots',
    type: 'checkbox',
    label: 'Navigation indicators',
    defaultValue: true,
  },
]

export default Block
