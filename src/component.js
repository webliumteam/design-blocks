import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = path => _.get(['options', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image, Background, Icon, Resizer}, style, content} = this.props
    const personShown = _.get('item_person_image')(modifier) || _.get('item_person')(modifier)
    const dateShown = _.get('item_date_icon')(modifier) || _.get('item_date')(modifier)
    const metaShown = personShown || dateShown
    const twoItems = content.collection.items.length % 2 === 0
    const modifierClass = twoItems && style['item--2n']

    return (
      <Resizer
        styleProp="minHeight"
        bindToModifier={`resizer.projects${index}`}
        min={this.getOptionValue('min-resize')}
        max={this.getOptionValue('max-resize')}
        disable={this.getOptionValue('disable-resizer')}
      >
        <div className={classNames(style.item, modifierClass, className)}>
          {children}
          <Background tagName="div" bind={`collection[${index}].item_panel`} className={style.item__panel}>
            {_.get('item_category')(modifier) && (
              <Text tagName="p" className={classNames(style.item__category, 'caption')} bind={`collection[${index}].item_category`} />
            )}
            <Text tagName="h3" className={classNames(style.item__heading, 'heading')} bind={`collection[${index}].item_heading`} />
            {metaShown && (
              <div className={style.item__meta}>
                {personShown && (
                  <div className={style.author}>
                    {_.get('item_person_image')(modifier) && (
                      <Image
                        wrapperClassName={classNames(style['author__picture-wrapper'], 'picture-wrapper')}
                        pictureClassName={classNames(style.author__picture, 'picture')}
                        imgClassName={classNames(style.author__image, 'picture__image')}
                        bind={`collection[${index}].item_person_image`}
                        size={
                          {
                            'min-width: 320px': 480,
                          }
                        }
                        resize={{disable: true}}
                      />
                    )}
                    {_.get('item_person')(modifier) && (
                      <Text tagName="div" bind={`collection[${index}].item_person`} className={classNames(style.author__name, 'body')} />
                    )}
                  </div>
                )}
                {dateShown && (
                  <div className={style.date}>
                    {_.get('item_date_icon')(modifier) && (
                      <Icon bind={`collection[${index}].item_date_icon`} className={classNames(style.date__icon, 'icon')} />
                    )}
                    {_.get('item_date')(modifier) && (
                      <Text tagName="time" className={classNames(style.date__value, 'body')} bind={`collection[${index}].item_date`} />
                    )}
                  </div>
                )}
              </div>
            )}
          </Background>
        </div>
      </Resizer>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('title') && (
            <Text bind="title" className={classNames(style.title, 'title', 'text-center')} tagName="h2" />
          )}
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                <Button
                  className={classNames(style.button, 'butttton')}
                  linkClassName={style.link}
                  bind="button"
                />
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

Wireframe.components = _.pick(['Text', 'Collection', 'Button', 'Icon', 'Image', 'Background', 'Resizer'])($editor.components)

Wireframe.defaultContent = {
  title: {
    type: 'blockTitle',
    content: 'Blog',
  },
  collection: {
    items: [
      {
        background: {
          type: 'color',
          color: '#eee',
        },
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.2)',
        },
        item_category: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item_heading: {
          type: 'heading',
          content: 'How to Increase Profits in Retail Business with Our New Product?',
        },
        item_person: {
          type: 'text',
          content: 'By Ben Moss',
        },
        item_person_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Person image',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg viewBox="0 0 32.857 32.857"><path d="M16.43 32.857C7.37 32.857 0 25.489 0 16.432 0 7.371 7.37 0 16.43 0c9.059 0 16.428 7.371 16.428 16.432-.001 9.057-7.37 16.425-16.428 16.425zM16.43 1C7.922 1 1 7.923 1 16.432c0 8.506 6.922 15.426 15.43 15.426 8.507 0 15.428-6.92 15.428-15.426C31.857 7.923 24.937 1 16.43 1z"/><path d="M21.205 22.701a.497.497 0 0 1-.385-.182l-4.775-5.77a.499.499 0 0 1-.115-.318V6.844a.5.5 0 0 1 1 0v9.408l4.66 5.631a.499.499 0 0 1-.385.818z"/></svg>',
          fill: 'brand-color',
        },
      },
      {
        background: {
          type: 'color',
          color: '#eee',
        },
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.2)',
        },
        item_category: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item_heading: {
          type: 'heading',
          content: 'How to Increase Profits in Retail Business with Our New Product?',
        },
        item_person: {
          type: 'text',
          content: 'By Ben Moss',
        },
        item_person_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Person image',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg viewBox="0 0 32.857 32.857"><path d="M16.43 32.857C7.37 32.857 0 25.489 0 16.432 0 7.371 7.37 0 16.43 0c9.059 0 16.428 7.371 16.428 16.432-.001 9.057-7.37 16.425-16.428 16.425zM16.43 1C7.922 1 1 7.923 1 16.432c0 8.506 6.922 15.426 15.43 15.426 8.507 0 15.428-6.92 15.428-15.426C31.857 7.923 24.937 1 16.43 1z"/><path d="M21.205 22.701a.497.497 0 0 1-.385-.182l-4.775-5.77a.499.499 0 0 1-.115-.318V6.844a.5.5 0 0 1 1 0v9.408l4.66 5.631a.499.499 0 0 1-.385.818z"/></svg>',
          fill: 'brand-color',
        },
      },
      {
        background: {
          type: 'color',
          color: '#eee',
        },
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.2)',
        },
        item_category: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item_heading: {
          type: 'heading',
          content: 'How to Increase Profits in Retail Business with Our New Product?',
        },
        item_person: {
          type: 'text',
          content: 'By Ben Moss',
        },
        item_person_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Person image',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg viewBox="0 0 32.857 32.857"><path d="M16.43 32.857C7.37 32.857 0 25.489 0 16.432 0 7.371 7.37 0 16.43 0c9.059 0 16.428 7.371 16.428 16.432-.001 9.057-7.37 16.425-16.428 16.425zM16.43 1C7.922 1 1 7.923 1 16.432c0 8.506 6.922 15.426 15.43 15.426 8.507 0 15.428-6.92 15.428-15.426C31.857 7.923 24.937 1 16.43 1z"/><path d="M21.205 22.701a.497.497 0 0 1-.385-.182l-4.775-5.77a.499.499 0 0 1-.115-.318V6.844a.5.5 0 0 1 1 0v9.408l4.66 5.631a.499.499 0 0 1-.385.818z"/></svg>',
          fill: 'brand-color',
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'Learn more',
  },
  button_additional: {
    type: 'primary',
    textValue: 'Learn more',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  item_category: {defaultValue: true, label: 'Post category', type: 'checkbox', sortOrder: 20},
  item_person_image: {defaultValue: true, label: 'Post author photo', type: 'checkbox', sortOrder: 30},
  item_person: {defaultValue: true, label: 'Post author name', type: 'checkbox', sortOrder: 40},
  item_date_icon: {defaultValue: true, label: 'Post time icon', type: 'checkbox', sortOrder: 50},
  item_date: {defaultValue: true, label: 'Post publication time', type: 'checkbox', sortOrder: 60},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 70},
  button_additional: {defaultValue: false, label: 'Additional button (link)', type: 'checkbox', sortOrder: 80},
}

export default Wireframe
