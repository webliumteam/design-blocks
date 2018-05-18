import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button}, style} = this.props
    const withoutLine = !this.getModifierValue('line')
    const withoutDay = !this.getModifierValue('day')
    const withoutType = !this.getModifierValue('type')
    const locInfo = this.getModifierValue('location') || this.getModifierValue('time')
    const minimalState = withoutDay && withoutType && !locInfo

    return (
      <li className={classNames(style.item, withoutLine && style['item--no-line'], className)}>
        {children}
        <div className={classNames(style.item__main, minimalState && style['item__main--center'])}>
          <div className={classNames(style.item__desc, minimalState && (style['item__desc--center']))}>
            <Text bind={`events[${index}].heading`} className={style.item__heading} tagName="h2" />
            {this.getModifierValue('type') && (
              <Text bind={`events[${index}].descCaption`} className={style['item__desc-caption']} tagName="p" />
            )}
          </div>
          {locInfo && (
            <div className={classNames(style.loc)}>
              {this.getModifierValue('location') && (
                <Text bind={`events[${index}].address`} className={style.loc__address} tagName="p" />
              )}
              {this.getModifierValue('time') && (
                <Text bind={`events[${index}].time`} className={style.loc__time} tagName="time" />
              )}
            </div>
          )}
        </div>
        <time className={classNames(style.date, minimalState && style['date--center'])}>
          <Text bind={`events[${index}].day`} className={style.date__day} tagName="span" />
          <span className={style.date__text}>
            <Text bind={`events[${index}].month`} className={style.date__month} tagName="span" />
            {this.getModifierValue('day') && (
              <Text bind={`events[${index}].weekDay`} className={style['date__week-day']} tagName="span" />
            )}
          </span>
        </time>
        <div className={classNames(style['item__button-wrapper'], minimalState && style['item__button-wrapper--center'])}>
          <Button
            className={style.item__button}
            buttonClassName={style.button}
            linkClassName={style.link}
            bind={`events[${index}].cta`}
          />
        </div>
      </li>
    )
  }

  render() {
    const {components: {Text, Button, Collection}, style, $block} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h1" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
          </div>
          <Collection
            className={style['items-wrapper']}
            bind="events"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
            TagName="ul"
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                linkClassName={style.link}
                buttonClassName={style.button}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'Collection'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Events',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We regularly host different kinds of events to satisfy the desires and demands even of all our clients. Do you want to know more about our activities? Follow the updates and never miss the workshops and seminars from our professionals.',
    type: 'subtitle',
  },
  events: [
    {
      heading: {
        type: 'heading',
        content: 'Adult Sunday Design Groups',
      },
      descCaption: {
        type: 'caption',
        content: 'Workshop',
      },
      day: {
        type: 'heroTitle',
        content: '01',
      },
      month: {
        type: 'text',
        content: 'December',
      },
      weekDay: {
        type: 'caption',
        content: 'Friday',
      },
      address: {
        type: 'text',
        content: '<span style="font-weight: bold;">Central Park</span> Brooklyn, NY 10036',
      },
      time: {
        type: 'caption',
        content: '10:30 - 14:00',
      },
      cta: {
        type: 'primary',
        size: 'md',
        textValue: 'Learn more',
      },
    },
    {
      heading: {
        type: 'heading',
        content: 'Product release trends in 2018',
      },
      descCaption: {
        type: 'caption',
        content: 'Lection',
      },
      day: {
        type: 'heroTitle',
        content: '22',
      },
      month: {
        type: 'text',
        content: 'December',
      },
      weekDay: {
        type: 'caption',
        content: 'Friday',
      },
      address: {
        type: 'text',
        content: '<span style="font-weight: bold;">Central Park</span> Brooklyn, NY 10036',
      },
      time: {
        type: 'caption',
        content: '10:30 - 14:00',
      },
      cta: {
        type: 'primary',
        size: 'md',
        textValue: 'Learn more',
      },
    },
    {
      heading: {
        type: 'heading',
        content: 'UX workshop',
      },
      descCaption: {
        type: 'caption',
        content: 'Workshop',
      },
      day: {
        type: 'heroTitle',
        content: '29',
      },
      month: {
        type: 'text',
        content: 'December',
      },
      weekDay: {
        type: 'caption',
        content: 'Friday',
      },
      address: {
        type: 'text',
        content: '<span style="font-weight: bold;">Central Park</span> Brooklyn, NY 10036',
      },
      time: {
        type: 'caption',
        content: '10:30 - 14:00',
      },
      cta: {
        type: 'primary',
        size: 'md',
        textValue: 'Learn more',
      },
    },
  ],
  button: {
    type: 'secondary',
    size: 'md',
    textValue: 'Show all events',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  day: {defaultValue: true, label: 'Day of week', type: 'checkbox'},
  type: {defaultValue: true, label: 'Event`s type', type: 'checkbox'},
  location: {defaultValue: true, label: 'Event`s location', type: 'checkbox'},
  time: {defaultValue: true, label: 'Event`s time', type: 'checkbox'},
  line: {defaultValue: true, label: 'Line', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
