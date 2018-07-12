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

  setSliderRef = key => ref => this.setState({[key]: ref})

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, modifier}) => {
    const {components: {Image}, style} = this.props
    return (
      <div className={style.item}>
        <Image
          wrapperClassName={classNames(style['item__picture-wrapper'], 'picture-wrapper')}
          pictureClassName={classNames(style.item__picture, 'picture')}
          imgClassName={classNames(style.item__image, 'picture__image')}
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

  collectionItemPreview = ({index, modifier}) => {
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
            {this.getModifierValue('title') && <Text tagName="h1" className={classNames(style.title, 'title', 'text-center')} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={classNames(style.subtitle, 'subtitle', 'text-center')} bind="subtitle" />}
          </div>
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
          {(this.getModifierValue('button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
                    buttonClassName={style['button--view-default']}
                    linkClassName={style.link}
                    bind="button"
                  />
                )}
                {this.getModifierValue('button_additional') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
                    linkClassName={style.link}
                    bind="button_additional"
                  />
                )}
              </div>
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
  button_additional: {
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
    type: 'primary',
    textValue: 'Learn more',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 30},
  button_additional: {defaultValue: false, label: 'Button additional', type: 'hidden', sortOrder: 40},
}

export default Block
