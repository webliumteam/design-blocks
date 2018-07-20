import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {
      components: {Image},
      style,
    } = this.props

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <Image bind={`collection[${index}].image`} />
      </div>
    )
  }

  render() {
    const {
      components: {Text, Button, Collection},
      style,
    } = this.props

    return (
      <section className={classNames(style.section, 'section')}>
        <div className={classNames(style.section__inner, 'section__inner')}>
          <header className={classNames(style.section__header, 'section__header')}>
            <Text
              bind="title"
              className={classNames(style.title, 'title', 'text-center')}
              tagName="h2"
            />
            {this.getModifierValue('subtitle') && (
              <Text
                bind="subtitle"
                className={classNames(style.subtitle, 'subtitle', 'text-center')}
                tagName="p"
              />
            )}
          </header>
          <div className={classNames('section__content')}>
            <Slider
              className={style['preview-slider']}
              bind="gallery"
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
            <Slider
              className={style['items-wrapper']}
              bind="gallery"
              Item={this.collectionItem}
              setRef={this.setSliderRef('nav2')}
              settings={{
                dots: false,
                arrows: true,
                focusOnSelect: true,
                slidesToScroll: 1,
                slidesToShow: 5,
                asNavFor: this.state.nav1,
                responsive: [
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 4,
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
          <footer className={classNames(style.section__footer, 'section__footer')}>
            <div className="btns-group">
              <div className="btns-group__inner">
                <Button className="btns-group__item" bind="button" />
                <Button className="btns-group__item" bind="button_additional" />
              </div>
            </div>
          </footer>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'Collection', 'Image'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Hello world',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Type here something',
    type: 'subtitle',
  },
  button: {
    textValue: 'Request a quote',
  },
  button_additional: {
    type: 'secondary',
    textValue: 'Learn More',
  },
  collection: {
    items: [
      {
        image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        },
      },
    ],
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default Wireframe
