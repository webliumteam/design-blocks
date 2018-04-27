import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    nav1: null,
    nav2: null,
  }

  /* eslint-disable */
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  /* eslint-enable */

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, modifier}) => {
    const {components: {Image}, style} = this.props
    return (
      <div className={style.item}>
        <Image
          wrapperClassName={style['item__picture-wrapper']}
          pictureClassName={style.item__picture}
          imgClassName={style.item__image}
          bind={`gallery[${index}].image`}
          size={{
            'min-width: 992px': 1200,
            'min-width: 768px': 1000,
            'min-width: 480px': 800,
          }}
          resize={{disable: true}}
        />
      </div>
    )
  }

  render() {
    const {components: {Text, Slider, Button}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            {this.getModifierValue('title') && <Text tagName="h1" className={style.title} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={style.subtitle} bind="subtitle" />}
          </div>
          <Slider
            className={style['preview-slider']}
            bind="gallery"
            Item={this.collectionItem}
            setRef={slider => (this.slider1 = slider)}
            settings={{
              dots: false,
              arrows: false,
              asNavFor: this.state.nav2,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          <Slider
            className={style['items-wrapper']}
            bind="gallery"
            Item={this.collectionItem}
            setRef={slider => (this.slider2 = slider)}
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
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={style.button}
                buttonClassName={style['button--view-default']}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'Slider'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Gallery',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Learn more about our office work and all stages of production by looking at these photos',
    type: 'subtitle',
  },
  gallery: [{
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  },
  {
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
      alt: 'Gallery image',
    },
  }],
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
    type: 'secondary',
    textValue: 'Learn more',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Block
