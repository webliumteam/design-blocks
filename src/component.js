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
    const {components: {Image, Text}, style} = this.props
    return (
      <div className={style.item}>
        <div className={style.item__inner}>
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={classNames(style.item__picture, 'picture')}
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
            <Text tagName="h2" className={style.item__heading} bind={`gallery[${index}].heading`} />
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Text, Slider, Button}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    const mobileSlidesCount = this.getOptionValue('visible-slides-mobile') || 1
    const desktopSlidesCount = this.getOptionValue('visible-slides-desktop') || 3

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            {this.getModifierValue('title') && (
              <Text bind="title" className={style.title} tagName="h1" />
            )}
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
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
                  breakpoint: 767,
                  settings: {
                    slidesToShow: mobileSlidesCount,
                  },
                },
                {
                  breakpoint: 100000,
                  settings: {
                    slidesToShow: desktopSlidesCount,
                    arrows: true,
                  },
                },
              ],
              ...customArrows,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('secondary-button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="cta"
              />
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
    content: 'Learn more about our office work and all stages of production by looking at these photos',
    type: 'subtitle',
  },
  gallery: [{
    image: {
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
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
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
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
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
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
      src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
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
  }],
  cta: {
    textValue: 'Learn more',
    type: 'secondary',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'checkbox'},
  'item-heading': {defaultValue: false, label: 'Image description', type: 'checkbox'},
  arrows: {defaultValue: true, label: 'Slide arrows', type: 'checkbox'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
