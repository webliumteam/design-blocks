import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index}) => {
    const {components: {Text, Button}, style} = this.props
    return (
      <article className={style.item}>
        <div className={style.item__inner}>
          <h2 className={style.item__title}>
            <Text bind={`cover[${index}].title`} />
          </h2>
          <p className={style.subtitle}>
            <Text bind={`cover[${index}].subtitle`} />
          </p>
          <div className={style['btns-group']}>
            <Button
              className={classNames(style.button, style['button--size-lg'], style['button--primary'])}
              bind={`cover[${index}].cta`}
            />
          </div>
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Slider
            className={style['items-wrapper']}
            bind="cover"
            Item={this.collectionItem}
            settings={{
              dots: true,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    arrows: false,
                  },
                },
              ],
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
        textValue: 'Main button (L)',
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
        textValue: 'Main button (L)',
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
        textValue: 'Main button (L)',
      },
      id: 'b5f64fb3-d94e-4ecf-b7ff-a4a5700a2457',
    },
  ],
}

Block.modifierScheme = [
  {
    id: 'text',
    type: 'checkbox',
    label: 'Company main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'About us link',
    defaultValue: false,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Contact us button',
    defaultValue: true,
  },
  {
    id: 'socialIcons',
    type: 'checkbox',
    label: 'Social media buttons',
    defaultValue: false,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
]

export default Block
