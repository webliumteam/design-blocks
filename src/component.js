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
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`collection[${index}].item_image`}
            size={
              {
                'min-width: 320px': 480,
                'min-width: 480px': 768,
                'min-width: 768px': 310,
                'min-width: 992px': 380,
              }
            }
            resize={{disable: true}}
          />
          <Background tagName="div" bind={`collection[${index}].item_panel`} className={style.item__panel}>
            {_.get('item_category')(modifier) && (
              <Text tagName="p" className={style.item__category} bind={`collection[${index}].item_category`} />
            )}
            <Text tagName="h3" className={style.item__title} bind={`collection[${index}].item_heading`} />
            {metaShown && (
              <div className={style.item__meta}>
                {personShown && (
                  <div className={style.author}>
                    {_.get('item_person_image')(modifier) && (
                      <Image
                        wrapperClassName={style['author__picture-wrapper']}
                        pictureClassName={style.author__picture}
                        imgClassName={style.author__image}
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
                      <Text tagName="div" bind={`collection[${index}].item_person`} className={style.author__name} />
                    )}
                  </div>
                )}
                {dateShown && (
                  <div className={style.date}>
                    {_.get('item_date_icon')(modifier) && (
                      <Icon bind={`collection[${index}].item_date_icon`} className={style.date__icon} />
                    )}
                    {_.get('item_date')(modifier) && (
                      <Text tagName="time" className={style.date__value} bind={`collection[${index}].item_date`} />
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
            <Text bind="title" className={style.title} tagName="h2" />
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
            <div className={style['btns-group']}>
              <Button
                className={style.button}
                linkClassName={style.link}
                bind="button"
              />
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
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.3)',
        },
        item_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Project 1',
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
          alt: 'Project 1',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg><path d="M587.572 186.881c-32.266-75.225-87.096-129.934-162.949-162.285C386.711 8.427 346.992.168 305.497.168c-41.488 0-80.914 8.181-118.784 24.428-75.225 32.265-130.298 86.939-162.621 162.285C7.895 224.629 0 264.176 0 305.664c0 41.496 7.895 81.371 24.092 119.127 32.323 75.346 87.403 130.348 162.621 162.621 37.877 16.247 77.295 24.42 118.784 24.42 41.489 0 81.214-8.259 119.12-24.42C500.47 555.06 555.3 500.009 587.573 424.791 603.819 386.914 612 347.16 612 305.664c0-41.488-8.174-80.907-24.428-118.783zm-48.848 253.972c-24.021 41.195-56.929 73.876-98.375 98.039-41.195 24.021-86.332 36.135-134.845 36.135-36.47 0-71.27-7.024-104.4-21.415-33.129-14.384-61.733-33.294-85.661-57.215-23.928-23.928-42.973-52.811-57.214-85.997-14.199-33.065-21.08-68.258-21.08-104.735 0-48.52 11.921-93.428 35.807-134.509 23.971-41.231 56.886-73.947 98.039-98.04 41.146-24.092 85.99-36.142 134.502-36.142 48.52 0 93.649 12.121 134.845 36.142 41.446 24.164 74.283 56.879 98.375 98.039 24.092 41.153 36.135 85.99 36.135 134.509 0 48.521-11.964 93.735-36.128 135.189z"/><path d="M324.906 302.988V129.659c0-10.372-9.037-18.738-19.41-18.738-9.701 0-18.403 8.366-18.403 18.738v176.005c0 .336.671 1.678.671 2.678-.671 6.024 1.007 11.043 5.019 15.062L392.836 423.45c6.695 6.695 19.073 6.695 25.763 0 7.694-7.695 7.188-18.86 0-26.099l-93.693-94.363z"/></svg>',
          fill: '#000',
        },
      },
      {
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.3)',
        },
        item_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Project 1',
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
          alt: 'Project 1',
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
        item_panel: {
          type: 'color',
          color: 'rgba(0,0,0, 0.3)',
        },
        item_image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Project 1',
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
          resourceRef: '',
          alt: '',
        },
        item_date: {
          type: 'text',
          content: '20 hrs ago',
        },
        item_date_icon: {
          svg: '<svg><path d="M24.71 0L14 10.507 3.29 0 0 3.235 14 17 28 3.235z"/></svg>',
          fill: 'brand-color',
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'Medium button',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  item_image: {defaultValue: true, label: 'Blog image', type: 'checkbox'},
  item_category: {defaultValue: true, label: 'Blog category', type: 'checkbox'},
  item_heading: {defaultValue: true, label: 'Blog heading', type: 'checkbox'},
  item_person_image: {defaultValue: true, label: 'Blog author picture', type: 'checkbox'},
  item_person: {defaultValue: true, label: 'Blog author name', type: 'checkbox'},
  item_date_icon: {defaultValue: true, label: 'Blog date icon', type: 'checkbox'},
  item_date: {defaultValue: true, label: 'Block button', type: 'checkbox'},
  button: {defaultValue: true, label: 'Block button', type: 'checkbox'},
}

export default Wireframe
