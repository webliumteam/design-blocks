import $editor from 'weblium/editor'
// import MediaQuery from 'react-responsive'

const mediaSizes = {
  'min-width: 992px': 470,
  'min-width: 768px': 300,
  'min-width: 480px': 800,
  'min-width: 320px': 480,
}
class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  state = {
    active: 0,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  toggleItemVisible = item => () => {
    const index = +item.match(/\d+$/)[0]
    if (index !== this.state.active) this.setState({active: index})
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style, $block, content} = this.props
    const activeTab = +index.match(/\d+$/)[0]

    return (
      <li className={classNames(style['tabs-item'], className, {[style['tabs-item--active']]: activeTab === this.state.active})}
          onClick={this.toggleItemVisible(index)} role="presentation"
      >
        {children}

        <button type="button" role="tab" className={style['tabs-item__button']}>
          <Image
            pictureClassName={style['tabs-item__picture']}
            imgClassName={style['tabs-item__image']}
            bind={`collection[${index}].itemPicture`}
            size={
              {
              'min-width: 320px': 80,
              }
            }
            resize={{disable: true}}
          />
          <div className={style['tabs-item__content']}>
            <Text bind={`collection[${index}].itemTitle`} tagName="h3" className={style['tabs-item__title']} />
            <Text bind={`collection[${index}].itemPosition`} tagName="small" className={style['tabs-item__position']} />
          </div>
        </button>
      </li>
    )
  }

  renderShadowImages = () => {
    const {content, components: {SsrOnly, Image}, style} = this.props
    return _.flow(
      _.get('collection.items.length'),
      (length) => _.range(0, length),
      _.map((index) => (
        <SsrOnly>
          <Image
            pictureClassName={style['tabs-item__picture']}
            imgClassName={style['tabs-item__image']}
            bind={`collection.items[${index}].itemPicture`}
            size={mediaSizes}
            disableMarkup
            />
        </SsrOnly>
      ))
    )(content)
  }

  render() {
    const {components: {Text, Image, Collection, Button, SocialIcons}, style, $block} = this.props
    const bindActive = `collection.items[${this.state.active}]`

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Image
            wrapperClassName={classNames(style['item__picture-wrapper'], style['item__picture-wrapper--desktop'])}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`${bindActive}.itemPicture`}
            size={mediaSizes}
            attributes={{'aria-hidden': true}}
          />
          {this.renderShadowImages()}
          <div className={style['item-wrapper']}>
            <div className={style.item} role="tabpanel">
              <Image
                wrapperClassName={classNames(style['item__picture-wrapper'], style['item__picture-wrapper--tablet'])}
                pictureClassName={style.item__picture}
                imgClassName={style.item__image}
                bind={`${bindActive}.itemPicture`}
                size={mediaSizes}
              />
              <div className={style.item__content}>
                <Text bind={`${bindActive}.itemPosition`} className={style.item__position} tagName="small" />
                <Text bind={`${bindActive}.itemTitle`} className={style.item__title} tagName="h2" />
                <Text bind={`${bindActive}.itemContent`} className={style.item__text} tagName="p" />

                <div className={style.item__bottom}>
                  <div className={style['item__bottom-side']}>
                    <div className={style['item__email-wrapper']}>
                      <Text bind={`${bindActive}.itemEmail`} className={style.item__email} />
                    </div>
                    <SocialIcons className={style.socials} bind={`${bindActive}.itemSocialIcons`} />
                  </div>
                  <Button
                    buttonClassName={style.button}
                    linkClassName={style.link}
                    className={style.item__button}
                    bind={`${bindActive}.itemLink`}
                  />
                </div>
              </div>
            </div>
            <Collection
              className={style.tabs}
              TagName="ul"
              attributes={{role: 'tablist'}}
              bind="collection"
              Item={this.collectionItem}
              itemProps={{
                modifier: $block.modifier,
              }}
            />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Collection', 'Button', 'SocialIcons', 'SsrOnly'])($editor.components)

Block.defaultContent = {
  collection: {
    items: [
      {
        itemTitle: {
          content: 'Andrew Shimmer',
          type: 'heading',
        },
        itemContent: {
          content: 'Andrew Shimmer has a 15-year experience in IT and marketing. He’s been successfully running companies specializing in high technologies. He won a bunch of international awards due to the excellent leadership skills and prominent achievements in business.',
          type: 'text',
        },
        itemPosition: {
          content: 'CEO',
          type: 'caption',
        },
        itemEmail: {
          content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
          type: 'caption',
        },
        itemPicture: {
          alt: 'Andrew Shimmer photo',
        },
        itemLink: {
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
          textValue: 'Learn more',
          type: 'link',
        },
        itemSocialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [15, 25, 35, 45],
            size: 25,
          },
        },
      },
      {
        itemTitle: {
          content: 'Amanda Trainer',
          type: 'heading',
        },
        itemContent: {
          content: 'Andrew Shimmer has a 15-year experience in IT and marketing. He’s been successfully running companies specializing in high technologies. He won a bunch of international awards due to the excellent leadership skills and prominent achievements in business.',
          type: 'text',
        },
        itemPosition: {
          content: 'Office Manager',
          type: 'caption',
        },
        itemEmail: {
          content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
          type: 'caption',
        },
        itemPicture: {
          alt: 'Amanda Trainer  photo',
        },
        itemLink: {
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
          textValue: 'Learn more',
          type: 'link',
        },
        itemSocialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [15, 25, 35, 45],
            size: 25,
          },
        },
      },
      {
        itemTitle: {
          content: 'Tomas Abbar',
          type: 'heading',
        },
        itemContent: {
          content: 'Andrew Shimmer has a 15-year experience in IT and marketing. He’s been successfully running companies specializing in high technologies. He won a bunch of international awards due to the excellent leadership skills and prominent achievements in business.',
          type: 'text',
        },
        itemPosition: {
          content: 'Product Manager',
          type: 'caption',
        },
        itemEmail: {
          content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
          type: 'caption',
        },
        itemPicture: {
          alt: 'Tomas Abbar photo',
        },
        itemLink: {
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
          textValue: 'Learn more',
          type: 'link',
        },
        itemSocialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [15, 25, 35, 45],
            size: 25,
          },
        },
      },
      {
        itemTitle: {
          content: 'Jeff Bin',
          type: 'heading',
        },
        itemContent: {
          content: 'Andrew Shimmer has a 15-year experience in IT and marketing. He’s been successfully running companies specializing in high technologies. He won a bunch of international awards due to the excellent leadership skills and prominent achievements in business.',
          type: 'text',
        },
        itemPosition: {
          content: 'Accounting Officer',
          type: 'caption',
        },
        itemEmail: {
          content: '<a href="mailto:mysite@weblium.com">mysite@weblium.com</a>',
          type: 'caption',
        },
        itemPicture: {
          alt: 'Jeff Bin photo',
        },
        itemLink: {
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
          textValue: 'Learn more',
          type: 'link',
        },
        itemSocialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [15, 25, 35, 45],
            size: 25,
          },
        },
      },
    ],
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default Block
