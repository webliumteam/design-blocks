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
          <div className={style.article__badge}>
            <Text bind={`events[${index}].badge`} />
          </div>
        )}
        <div className={style.article__info}>
          <div className={style.article__top}>
            <time className={style.article__date}>
              <Text bind={`events[${index}].date`} />
            </time>
            <time className={style.article__time}>
              <Text bind={`events[${index}].time`} />
            </time>
          </div>
          <h2 className={style.article__title}>
            <Text bind={`events[${index}].title`} />
          </h2>
          <div className={style.article__bottom}>
            {_.get('location')(modifier) && (
              <p className={style.article__location}>
                <Text bind={`events[${index}].location`} />
              </p>
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
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="subtitle" />
            </p>
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
      title: 'Digital marketing workshop',
      date: 'October 24, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'The station',
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
      id: 'b1de1229-0f5f-4da8-8e5f-1d875b2bdd5e',
    },
    {
      title: 'Blogging for beginners',
      date: 'November 1, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'The station',
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
      id: 'bc24235c-0e77-42d8-8e8e-358d683da4f5',
    },
    {
      title: 'How to find insight',
      date: 'November 25, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'The station',
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
      id: '2a463f21-a68f-4a30-a7a7-dfbdece81edc',
    },
    {
      title: 'UX workshop',
      date: 'December 3, 2017',
      badge: 'members only',
      time: '10:30am - 1:30pm',
      location: 'The station',
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
      id: 'c4480dcf-6fbd-42b0-b457-ca6a0f187b02',
    },
  ],
  title: 'Events',
  subtitle:
    'We regularly host different kinds of events to satisfy the desires and demands even of all our clients. Do you want to know more about our activities? Follow the updates and never miss the workshops and seminars from our professionals.',
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
