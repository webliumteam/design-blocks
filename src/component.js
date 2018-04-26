import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className, bodyItems}) => {
    const {components: {Text}, style} = this.props
    const time = this.getModifierValue('time')
    const event = this.getModifierValue('event')
    const body = time || event

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <Text tagName="h2" className={style.item__title} bind={`collection[${index}].title`} />
        {body && (
          <ul className={style.schedule}>
            {_.map(n => (
              <li className={style.schedule__item} key={n}>
                {time && (
                  <Text tagName="time" className={style.schedule__time} bind={`collection[${index}].body[${n}].time`} />
                )}
                {event && (
                  <Text tagName="span" className={style.schedule__event} bind={`collection[${index}].body[${n}].event`} />
                )}
              </li>
            ), bodyItems)}
          </ul>
        )}
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block, content} = this.props
    const headerInfo = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const showButtonGroups = this.getModifierValue('additional-button') || this.getModifierValue('button')
    const bodyItems = _.times(Number, this.getModifierValue('bodyQuantity'))
    const collectionLength = _.get('collection.items.length', content) || 7
    const shrinkCollection = collectionLength % 3 === 0 || collectionLength % 5 === 0

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {headerInfo && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={style.title} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={style.subtitle} tagName="p" />
              )}
            </div>
          )}
          <Collection
            className={classNames(style['items-wrapper'], shrinkCollection && style['items-wrapper--shrinked'])}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
              bodyItems,
            }}
          />
          {showButtonGroups && (
            <div className={style['btns-group']}>
              {this.getModifierValue('button') && (
                <Button
                  className={style.button}
                  linkClassName={style.link}
                  bind="button-1"
                />
              )}
              {this.getModifierValue('additional-button') && (
                <Button
                  className={style.button}
                  linkClassName={style.link}
                  bind="button-2"
                />
              )}
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Collection', 'Button'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Schedule',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Our specialists work to create effective products for various businesses and also run educational programs for business owners and managers.',
    type: 'subtitle',
  },
  collection: {
    background: {
      'nth-child': [
        ['n', {
          type: 'image',
          position: {
            type: 'cover',
            cover: '50% 50%',
          },
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          imageColor: [250, 250, 250],
        }],
      ],
    },
    items: [
      {
        title: {
          type: 'heading',
          content: 'MONDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
      {
        title: {
          type: 'heading',
          content: 'TUESDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
      {
        title: {
          type: 'heading',
          content: 'WEDNESDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
      {
        title: {
          type: 'heading',
          content: 'THURSDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
      {
        title: {
          type: 'heading',
          content: 'FRIDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
      {
        title: {
          type: 'heading',
          content: 'SATURDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
      {
        title: {
          type: 'heading',
          content: 'SUNDAY',
        },
        body: [
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [workshop]',
            },
          },
          {
            time: {
              type: 'text',
              content: '6-7pm',
            },
            event: {
              type: 'text',
              content: 'Design [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '7-8pm',
            },
            event: {
              type: 'text',
              content: 'Marketing [seminar]',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
          {
            time: {
              type: 'text',
              content: '8-9pm',
            },
            event: {
              type: 'text',
              content: 'Product insights [Q&A]+',
            },
          },
        ],
      },
    ],
  },
  'button-1': {
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
    size: 'md',
  },
  'button-2': {
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
    type: 'primary',
  },
}

Wireframe.modifierScheme = {
  bodyQuantity: {
    children: [
      {id: '1', label: '1'},
      {id: '2', label: '2'},
      {id: '3', label: '3'},
      {id: '4', label: '4'},
      {id: '5', label: '5'},
      {id: '6', label: '6'},
      {id: '7', label: '7'},
    ],
    defaultValue: '4',
    name: 'Text items in day',
    type: 'radio-button-group',
    style: 'buttons',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Schedule description', type: 'checkbox'},
  time: {defaultValue: true, label: 'Time', type: 'checkbox'},
  event: {defaultValue: true, label: 'Event', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'checkbox'},
}

export default Wireframe
