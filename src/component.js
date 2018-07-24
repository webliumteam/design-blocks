import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, modifier, openLightbox}) => {
    const {
      components: {Image, Text},
      style,
    } = this.props
    return (
      <div className={style.item}>
        <div className={style.item__inner}>
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={classNames(style.item__picture, this.ui('ui-picture'))}
            imgClassName={style.item__image}
            bind={`gallery[${index}].image`}
            size={{
              'min-width: 992px': 1200,
              'min-width: 768px': 1000,
              'min-width: 480px': 800,
            }}
            resize={{disable: true}}
            onOpenLightbox={openLightbox}
          />
          {this.getModifierValue('item-heading') && (
            <Text
              tagName="h2"
              className={classNames(style.item__heading, this.ui('ui-subtitle'), this.ui('ui-text-center'), this.ui('ui-text-lg-left'))}
              bind={`gallery[${index}].heading`}
            />
          )}
        </div>
      </div>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {
      components: {Text, Slider, Button},
      style,
      $block,
    } = this.props
    const customArrows = this.getOptionValue('custom-arrows')
      ? {
        nextArrow: (
          <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />
        ),
        prevArrow: (
          <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />
        ),
      }
      : {}
    const mobileSlidesCount = this.getOptionValue('visible-slides-mobile') || 1
    const desktopSlidesCount = this.getOptionValue('visible-slides-desktop') || 3

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            {this.getModifierValue('title') && (
              <Text
                bind="title"
                className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'))}
                tagName="h1"
              />
            )}
            {this.getModifierValue('subtitle') && (
              <Text
                bind="subtitle"
                className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'))}
                tagName="p"
              />
            )}
          </div>
          <Slider
            className={style['items-wrapper']}
            bind="gallery"
            galleryId="gallery"
            Item={this.collectionItem}
            settings={{
              dots: false,
              arrows: this.getModifierValue('arrows'),
              swipeToSlide: true,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: desktopSlidesCount,
              initialSlide: 1,
              adaptiveHeight: false,
              responsive: [
                {
                  breakpoint: 100000,
                  settings: {
                    slidesToShow: desktopSlidesCount,
                    slidesToScroll: 1,
                    arrows: true,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: mobileSlidesCount,
                    slidesToScroll: 1,
                    swipeToSlide: false,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: mobileSlidesCount,
                    slidesToScroll: 1,
                    swipeToSlide: false,
                  },
                },
              ],
              ...customArrows,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {(this.getModifierValue('secondary-button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], this.ui('ui-btns-group'))}>
              <div className="btns-group__inner">
                {this.getModifierValue('secondary-button') && (
                  <Button
                    className={classNames(style.button, this.ui('ui-btns-group__item'))}
                    linkClassName={style.link}
                    bind="cta"
                  />
                )}
                {this.getModifierValue('button_additional') && (
                  <Button
                    className={classNames(style.button, this.ui('ui-btns-group__item'))}
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

Wireframe.components = _.pick(['Text', 'Slider', 'Image', 'Button'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Gallery',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'Learn more about our office work and all stages of production by looking at these photos',
    type: 'subtitle',
  },
  gallery: [
    {
      image: {
        src:
          'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Quantum CEO & our partners',
        type: 'subtitle',
      },
    },
    {
      image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Digital Marketing workshop lecturer',
        type: 'subtitle',
      },
    },
    {
      image: {
        src:
          'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Quantum Company at WebSummit',
        type: 'subtitle',
      },
    },
    {
      image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Quantum CEO & our partners',
        type: 'subtitle',
      },
    },
    {
      image: {
        src:
          'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Digital Marketing workshop lecturer',
        type: 'subtitle',
      },
    },
    {
      image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Quantum Company at WebSummit',
        type: 'subtitle',
      },
    },
    {
      image: {
        src:
          'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Quantum CEO & our partners',
        type: 'subtitle',
      },
    },
    {
      image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Gallery image',
        galleryId: 'gallery',
      },
      heading: {
        content: 'Quantum CEO & our partners',
        type: 'subtitle',
      },
    },
  ],
  cta: {
    textValue: 'Learn more',
    type: 'secondary',
  },
  button_additional: {
    textValue: 'Learn more',
    type: 'primary',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  'item-heading': {
    defaultValue: false,
    label: 'Image description',
    type: 'checkbox',
    sortOrder: 30,
  },
  'secondary-button': {
    defaultValue: false,
    label: 'Button (link)',
    type: 'checkbox',
    sortOrder: 40,
  },
  button_additional: {
    defaultValue: false,
    label: 'Button additional',
    type: 'hidden',
    sortOrder: 50,
  },
}

export default Wireframe
