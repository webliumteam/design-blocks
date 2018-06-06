import $editor from 'weblium/editor'
// import MediaQuery from 'react-responsive'

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

  getActiveIndex = () => {
    const {content} = this.props
    return _.clamp(0, content.collection.items.length - 1)(this.state.active)
  }

  toggleItemVisible = item => () => {
    const index = +item.match(/\d+$/)[0]
    if (index !== this.state.active) this.setState({active: index})
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image, SocialIcons, Button}, style} = this.props
    const activeTab = +index.match(/\d+$/)[0]
    const itemBottomSide = this.getModifierValue('item_contacts') || this.getModifierValue('item_socials')
    const itemBottom = itemBottomSide || this.getModifierValue('item_link')
    const activeIndex = this.getActiveIndex()

    return (
      <li className={classNames(style['tabs-item'], className, {[style['tabs-item--active']]: activeTab === activeIndex})} onClick={this.toggleItemVisible(index)} role="presentation">
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
            <Text bind={`collection[${index}].itemPosition`} tagName="small" className={style['tabs-item__position']} />
            <Text bind={`collection[${index}].itemTitle`} tagName="h3" className={style['tabs-item__title']} />
            {this.getModifierValue('item_body') && (
              <Text bind={`collection[${index}].itemContent`} className={classNames(style.item__text, style['tabs-item__text'], style['item__text--mobile'])} tagName="p" />
            )}
            {itemBottom && (
              <div className={classNames(style.item__bottom, style['tabs-item__bottom'], style['item__bottom--mobile'])}>
                {itemBottomSide && (
                  <div className={style['item__bottom-side']}>
                    {this.getModifierValue('item_contacts') && (
                      <div className={style['item__email-wrapper']}>
                        <Text bind={`collection[${index}].itemEmail`} className={style.item__email} />
                      </div>
                    )}
                    {this.getModifierValue('item_socials') && (
                      <SocialIcons className={style.socials} bind={`collection[${index}].itemSocialIcons`} />
                    )}
                  </div>
                )}
                {this.getModifierValue('item_link')}
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  className={style.item__button}
                  bind={`collection[${index}].itemLink`}
                />
              </div>
            )}
          </div>
        </button>
      </li>
    )
  }

  render() {
    const {components: {Text, Image, Collection, Button, SocialIcons}, style, content, $block} = this.props
    const bindActive = `collection.items[${this.getActiveIndex()}]`
    const itemBottomSide = this.getModifierValue('item_contacts') || this.getModifierValue('item_socials')
    const itemBottom = itemBottomSide || this.getModifierValue('item_link')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Image
            wrapperClassName={classNames(style['item__picture-wrapper'], style['item__picture-wrapper--desktop'])}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`${bindActive}.itemPicture`}
            size={
              {
              'min-width: 768px': 940,
              'min-width: 480px': 800,
              'min-width: 320px': 600,
              }
            }
            attributes={{'aria-hidden': true}}
          />
          <div className={style['item-wrapper']}>
            <div className={style.item} role="tabpanel">
              <Image
                wrapperClassName={classNames(style['item__picture-wrapper'], style['item__picture-wrapper--tablet'])}
                pictureClassName={style.item__picture}
                imgClassName={style.item__image}
                bind={`${bindActive}.itemPicture`}
                size={
                  {
                  'min-width: 992px': 470,
                  'min-width: 768px': 300,
                  'min-width: 480px': 800,
                  'min-width: 320px': 600,
                  }
                }
              />
              <div className={style.item__content}>
                <Text bind={`${bindActive}.itemPosition`} className={style.item__position} tagName="small" />
                <Text bind={`${bindActive}.itemTitle`} className={style.item__title} tagName="h2" />
                {this.getModifierValue('item_body') && (
                  <Text bind={`${bindActive}.itemContent`} className={style.item__text} tagName="p" />
                )}
                {itemBottom && (
                  <div className={style.item__bottom}>
                    {itemBottomSide && (
                      <div className={style['item__bottom-side']}>
                        {this.getModifierValue('item_contacts') && (
                          <div className={style['item__email-wrapper']}>
                            <Text bind={`${bindActive}.itemEmail`} className={style.item__email} />
                          </div>
                        )}
                        {this.getModifierValue('item_socials') && (
                          <SocialIcons className={style.socials} bind={`${bindActive}.itemSocialIcons`} />
                        )}
                      </div>
                    )}
                    {this.getModifierValue('item_link') && (
                      <Button
                        buttonClassName={style.button}
                        linkClassName={style.link}
                        className={style.item__button}
                        bind={`${bindActive}.itemLink`}
                      />
                    )}
                  </div>
                )}
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
            {this.getModifierValue('button') && (
              <div className={style['btns-group']}>
                <Button
                  className={style.button}
                  linkClassName={style.link}
                  bind="button"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Collection', 'Button', 'SocialIcons'])($editor.components)

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
          textValue: 'View full bio',
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
            color: 'brand-color',
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
          textValue: 'View full bio',
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
            color: 'brand-color',
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
          textValue: 'View full bio',
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
            color: 'brand-color',
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
          textValue: 'View full bio',
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
            color: 'brand-color',
            sizes: [15, 25, 35, 45],
            size: 25,
          },
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'All team members',
  },
}

Block.modifierScheme = {
  item_body: {defaultValue: true, label: 'Employee bio', type: 'checkbox'},
  item_contacts: {defaultValue: true, label: 'Employee contacts', type: 'checkbox'},
  item_socials: {defaultValue: true, label: 'Socials buttons', type: 'checkbox'},
  item_link: {defaultValue: true, label: 'Link', type: 'checkbox'},
  button: {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Block
