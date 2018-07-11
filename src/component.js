import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index}) => {
    const {components: {Image, Text}, style} = this.props
    return (
      <div className={style.item}>
        <Image
          wrapperClassName={classNames(style['item__picture-wrapper'], 'picture-wrapper')}
          pictureClassName={classNames(style.item__picture, 'picture')}
          imgClassName={classNames(style.item__image, 'picture__image')}
          bind={`collection[${index}].item_image`}
          size={{
            'min-width: 480px': 600,
          }}
          resize={{disable: true}}
        />
        {this.getModifierValue('item_title') && <Text tagName="h3" className={classNames(style.item__title, 'heading', 'text-center')} bind={`collection[${index}].item_title`} />}
      </div>
    )
  }

  render() {
    const {components: {Text, Slider, Button}, style, content, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    const sectionHeader = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const lessFourItems = content.collection.items.length < 4
    const oneItem = content.collection.items.length === 1

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {sectionHeader && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && <Text tagName="h2" className={classNames(style.title, 'title', 'text-center')} bind="title" />}
              {this.getModifierValue('subtitle') && <Text bind="subtitle" className={classNames(style.subtitle, 'subtitle', 'text-center')} tagName="p" />}
            </div>
          )}
          <Slider
            className={classNames(style['items-wrapper'], lessFourItems && style['items-wrapper--less-four-items'], oneItem && style['items-wrapper--one-item'])}
            bind="collection"
            Item={this.collectionItem}
            settings={{
              dots: false,
              arrows: true,
              slidesToScroll: 1,
              slidesToShow: 4,
              responsive: [
                {
                  breakpoint: 479,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
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

Wireframe.components = _.pick(['Text', 'Slider', 'Button', 'Image'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Over the history of our company, we cooperated with many well-known brands. We are proud of working with each of our partners as they gave us enough support to become one of the leading companies. Here’s a short list of those who have already seen the quality of our services in practice:',
    type: 'subtitle',
  },
  collection: {
    items: [{
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 1',
        type: 'heading',
      },
    },
    {
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 2',
        type: 'heading',
      },
    },
    {
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 3',
        type: 'heading',
      },
    },
    {
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 4',
        type: 'heading',
      },
    },
    {
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 5',
        type: 'heading',
      },
    },
    {
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 6',
        type: 'heading',
      },
    },
    {
      item_image: {
        type: 'image',
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Partner logo',
          fitBy: 'contain',
        },
      },
      item_title: {
        content: 'Partners 7',
        type: 'heading',
      },
    }],
  },
  button: {
    type: 'secondary',
    textValue: 'Show more',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  item_title: {defaultValue: false, label: 'Partner name', type: 'checkbox', sortOrder: 30},
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 40},
}

export default Wireframe
