import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    nav1: null,
    nav2: null,
  }

  setSliderRef = key => ref => this.setState({[key]: ref})

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, modifier}) => {
    const {
      components: {Text, Button},
      style,
    } = this.props
    return (
      <div className={style.item}>
        {this.getModifierValue('item_body') && (
          <Text tagName="p" bind={`collection[${index}].item_body`} className={style.item__body} />
        )}
        {this.getModifierValue('item_person') && (
          <Text
            tagName="p"
            bind={`collection[${index}].item_person`}
            className={style.item__person}
          />
        )}
        {this.getModifierValue('item_category') && (
          <Text
            tagName="p"
            bind={`collection[${index}].item_category`}
            className={style.item__category}
          />
        )}
        {this.getModifierValue('item_category_additional') && (
          <Text
            tagName="p"
            bind={`collection[${index}].item_category_additional`}
            className={style.item__category_additional}
          />
        )}
        {this.getModifierValue('item_button') && (
          <div className={style['item__btns-group']}>
            <Button bind={`collection[${index}].item_button`} className={style.item__button} />
          </div>
        )}
      </div>
    )
  }

  collectionItemPreview = ({index, modifier}) => {
    const {
      components: {Image},
      style,
    } = this.props

    return (
      <Image
        wrapperClassName={style['article__picture-wrapper']}
        pictureClassName={style.article__picture}
        imgClassName={style.article__image}
        bind={`collection[${index}].item_image`}
        size={{
          'min-width: 992px': 1200,
          'min-width: 768px': 1000,
          'min-width: 480px': 800,
        }}
        // resize={{disable: true}}
      />
    )
  }

  render() {
    const {
      components: {Text, Slider, Background},
      style,
      $block,
    } = this.props

    const arrange = this.getModifierValue('arrange-elements')
    const noCompany = this.getModifierValue('item_category_additional')

    return (
      <section className={classNames(style.section, 'section')}>
        <div className={classNames(style.section__inner, 'section__inner')}>
          <div className={classNames('section__content')}>
            <Background bind="article_background" className={classNames(style.article, arrange && style['article--reverse'])}>
              <Text
                bind="title"
                className={classNames(style.title, 'title', 'text-center')}
                tagName="h2"
              />
              <Slider
                className={style.article__preview}
                bind="collection"
                Item={this.collectionItemPreview}
                setRef={this.setSliderRef('nav1')}
                settings={{
                  dots: false,
                  arrows: false,
                  asNavFor: this.state.nav2,
                }}
                itemProps={{
                  modifier: $block.modifier,
                }}
                disableControls
              />
              <div className={style.article__content}>
                <Text
                  bind="title"
                  className={classNames(style.title, 'title', 'text-center')}
                  tagName="h2"
                />
                <Slider
                  className={style['items-wrapper']}
                  bind="collection"
                  Item={this.collectionItem}
                  setRef={this.setSliderRef('nav2')}
                  settings={{
                    dots: true,
                    arrows: false,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    asNavFor: this.state.nav1,
                  }}
                  itemProps={{
                    modifier: $block.modifier,
                  }}
                />
              </div>
            </Background>
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'Slider', 'Image', 'Background'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Our customers say',
    type: 'blockTitle',
  },
  button: {
    textValue: 'Request a quote',
  },
  button_additional: {
    type: 'secondary',
    textValue: 'Learn More',
  },
  article_background: {
    type: 'color',
    color: 'rgba(216, 216, 216, 0.3)',
  },
  collection: {
    items: [
      {
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        },
        item_body: {
          type: 'subtitle',
          content:
            'I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services.',
        },
        item_person: {
          type: 'heading',
          content: 'Kate Holmes',
        },
        item_category: {
          type: 'caption',
          content: 'Freelance artist',
        },
        item_category_additional: {
          type: 'text',
          content: 'Kate Holmes Performance Art',
        },
        item_button: {
          type: 'link',
          textValue: 'kateholms.com',
        },
      },
      {
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        },
        item_body: {
          type: 'subtitle',
          content:
            'I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services.',
        },
        item_person: {
          type: 'heading',
          content: '2 Kate Holmes',
        },
        item_category: {
          type: 'caption',
          content: 'Freelance artist',
        },
        item_category_additional: {
          type: 'text',
          content: 'Kate Holmes Performance Art',
        },
        item_button: {
          type: 'link',
          textValue: 'kateholms.com',
        },
      },
      {
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        },
        item_body: {
          type: 'subtitle',
          content:
            'I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services.',
        },
        item_person: {
          type: 'heading',
          content: '3 Kate Holmes',
        },
        item_category: {
          type: 'caption',
          content: 'Freelance artist',
        },
        item_category_additional: {
          type: 'text',
          content: 'Kate Holmes Performance Art',
        },
        item_button: {
          type: 'link',
          textValue: 'kateholms.com',
        },
      },
    ],
  },
}

Wireframe.modifierScheme = {
  'arrange-elements': {
    defaultValue: false,
    name: 'Arrange elements',
    type: 'swap',
  },
  item_image: {defaultValue: true, label: 'Testimonial image', type: 'checkbox'},
  item_body: {defaultValue: true, label: 'Testimonial body', type: 'checkbox'},
  item_person: {defaultValue: true, label: 'Person', type: 'checkbox'},
  item_category: {defaultValue: true, label: 'Person position', type: 'checkbox'},
  item_category_additional: {defaultValue: true, label: 'Person company', type: 'checkbox'},
  item_button: {defaultValue: true, label: 'Person website', type: 'checkbox'},
}

export default Wireframe
