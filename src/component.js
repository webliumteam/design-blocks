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

  collectionItem = ({index}) => {
    const {components: {Image}, style} = this.props
    return (
      <div className={style.item}>
        <Image
          wrapperClassName={style['item__picture-wrapper']}
          pictureClassName={style.item__picture}
          imgClassName={style.item__image}
          bind={`collection[${index}].item_image`}
          size={{
            'min-width: 480px': 600,
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
    const sectionHeader = this.getModifierValue('title') && this.getModifierValue('subtitle')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {sectionHeader && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && <Text tagName="h2" className={style.title} bind="title" />}
              {this.getModifierValue('subtitle') && <Text bind="subtitle" className={style.subtitle} tagName="p" />}
            </div>
          )}
          <Slider
            className={style['items-wrapper']}
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
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    },
    {
      item_image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    },
    {
      item_image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    },
    {
      item_image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    },
    {
      item_image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    },
    {
      item_image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    },
    {
      item_image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Partner logo',
      },
    }],
  },
  button: {
    type: 'secondary',
    textValue: 'See more',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  button: {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
