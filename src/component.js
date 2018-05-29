import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image, Resizer}, style} = this.props

    return (
      <Resizer
        styleProp="minHeight"
        bindToModifier={`resizer.events${index}`}
        min={this.getOptionValue('min-resize')}
        max={this.getOptionValue('max-resize')}
        disable={this.getOptionValue('disable-resizer')}
      >
        <div className={classNames(style.article, className)}>
          {children}

          {_.get('badge')(modifier) && (
            <Text tagName="div" className={style.article__badge} bind={`events[${index}].badge`} />
          )}
          <div className={style.article__info}>
            <div className={style.article__top}>
              <Text tagName="time" className={style.article__date} bind={`events[${index}].date`} />
              <Text tagName="time" className={style.article__time} bind={`events[${index}].time`} />
            </div>
            <Text tagName="h3" className={style.article__title} bind={`events[${index}].title`} />
            <div className={style.article__bottom}>
              {_.get('location')(modifier) && (
                <Text tagName="p" className={style.article__location} bind={`events[${index}].location`} />
              )}
              {_.get('link')(modifier) && (
                <Button
                  className={classNames(style.article__cta)}
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind={`events[${index}].cta`}
                />
              )}
            </div>
          </div>
          <Image
            wrapperClassName={style['article__picture-wrapper']}
            pictureClassName={style.article__picture}
            imgClassName={style.article__image}
            bind={`events[${index}].picture`}
            size={{
              'min-width: 992px': 540,
              'min-width: 768px': 720,
              'min-width: 480px': 560,
            }}
            resize={{disable: true}}
          />
        </div>
      </Resizer>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          <Text tagName="h2" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={style.subtitle} bind="subtitle" />
          )}
          <Collection
            className={style['articles-wrapper']}
            bind="events"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon', 'Resizer'])($editor.components)

Block.defaultContent = {
  events: [
    {
      title: {
        content: 'Digital marketing workshop',
        type: 'heading',
      },
      date: {
        content: 'October 24, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Digital marketing workshop illustration',
      },
      cta: {
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
        textValue: 'Know more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'Blogging for beginners',
        type: 'heading',
      },
      date: {
        content: 'November 1, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Blogging for beginners illustration',
      },
      cta: {
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
        textValue: 'Know more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'How to find insight',
        type: 'heading',
      },
      date: {
        content: 'November 25, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'How to find insight illustration',
      },
      cta: {
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
        textValue: 'Know more',
        type: 'link',
      },
    },
    {
      title: {
        content: 'UX workshop',
        type: 'heading',
      },
      date: {
        content: 'December 3, 2017',
        type: 'subtitle',
      },
      badge: {
        content: 'members only',
        type: 'caption',
      },
      time: {
        content: '10:30am - 1:30pm',
        type: 'text',
      },
      location: {
        content: 'The station',
        type: 'caption',
      },
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'UX workshop illustration',
      },
      cta: {
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
        textValue: 'Know more',
        type: 'link',
      },
    },
  ],
  title: {
    content: 'Events',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We regularly host different kinds of events to satisfy the desires and demands even of all our clients. Do you want to know more about our activities? Follow the updates and never miss the workshops and seminars from our professionals.',
    type: 'subtitle',
  },
  cta: {
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
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: "Event's description", type: 'checkbox'},
  badge: {defaultValue: true, label: "Event's type", type: 'checkbox'},
  location: {defaultValue: true, label: "Event's location", type: 'checkbox'},
  link: {defaultValue: true, label: "Event's link", type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
