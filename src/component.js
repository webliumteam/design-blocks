import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image}, style} = this.props

    return (
      <article className={classNames(style.article, className)}>
        {children}

        {_.get('badge')(modifier) && (
          <Text tagName="div" className={style.article__badge} bind={`events[${index}].badge`} />
        )}
        <div className={style.article__info}>
          <div className={style.article__top}>
            <Text tagName="time" className={style.article__date} bind={`events[${index}].date`} />
            <Text tagName="time" className={style.article__time} bind={`events[${index}].time`} />
          </div>
          <Text tagName="h2" className={style.article__title} bind={`events[${index}].title`} />
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
        />
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text tagName="h1" className={style.title} bind="title" />
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
          <div className={style['btns-group']}>
            <Button
              buttonClassName={style.button}
              linkClassName={style.link}
              bind="cta"
            />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  events: [
    {
      title: {
        content: 'Digital marketing workshop',
        type: 'heading',
      },
      date: {
        content: 'October 24, 2017',
        type: 'text',
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
        type: 'text',
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
        type: 'text',
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
        type: 'text',
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
}

Block.modifierScheme = {
  badge: {defaultValue: true, label: "Event's type", type: 'checkbox'},
  link: {defaultValue: true, label: "Event's link", type: 'checkbox'},
  location: {defaultValue: true, label: "Event's location", type: 'checkbox'},
  subtitle: {defaultValue: false, label: "Event's description", type: 'checkbox'},
}


export default Block
