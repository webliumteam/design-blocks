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

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image, Button}, style} = this.props

    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 30
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 100

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <Image
          pictureClassName={style.item__picture}
          imageClassName={style.item__image}
          bind={`items[${index}].picture`}
          size={{
            'min-width: 320px': 480,
            'min-width: 480px': 768,
            'min-width: 768px': 570,
          }}
          resize={{
            min: getMinResize,
            max: getMaxResize,
            disable: this.getOptionValue('disable-resizer'),
          }}
        />
        <div className={style.item__content}>
          <ul className={style.item__list}>
            <li className={style.brief}>
              <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[0].title`} />
              <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[0].desc`} />
            </li>
            <li className={style.brief}>
              <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[1].title`} />
              <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[1].desc`} />
            </li>
            <li className={style.brief}>
              <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[2].title`} />
              <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[2].desc`} />
            </li>
            <li className={style.brief}>
              <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[3].title`} />
              <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[3].desc`} />
            </li>
            <li className={style.brief}>
              <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[4].title`} />
              <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[4].desc`} />
            </li>
          </ul>
          <Text tagName="p" className={style.item__body} bind={`items[${index}].body`} />
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            className={style.item__button}
            bind={`items[${index}].cta`}
          />
        </div>
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props
    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {header && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text tagName="h1" className={style.title} bind="title" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text tagName="p" className={style.subtitle} bind="subtitle" />
              )}
            </div>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="items"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          <div className={style['btns-group']}>
            <Button
              className={style['btns-group__button']}
              linkClassName={style.link}
              buttonClassName={style.button}
              bind="cta"
            />
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Collection', 'Image', 'Button'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'What’s going on',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. ',
    type: 'subtitle',
  },
  items: [
    {
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      brief: [
        {
          title: {
            content: 'Event:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">UX Design Thinking</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Time:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">10am-19pm</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Date:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">Saturday, December 9</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Location:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">Golden Gate Conference Room</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Cost:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">$95</span>',
            type: 'subheading',
          },
        },
      ],
      body: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with.',
        type: 'text',
      },
      cta: {
        textValue: 'Learn more',
        type: 'primary',
      },
    },
    {
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      brief: [
        {
          title: {
            content: 'Event:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">UX Design Thinking</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Time:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">10am-19pm</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Date:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">Saturday, December 9</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Location:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">Golden Gate Conference Room</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Cost:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">$95</span>',
            type: 'subheading',
          },
        },
      ],
      body: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with.',
        type: 'text',
      },
      cta: {
        textValue: 'Learn more',
        type: 'primary',
      },
    },
    {
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      brief: [
        {
          title: {
            content: 'Event:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">UX Design Thinking</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Time:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">10am-19pm</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Date:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">Saturday, December 9</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Location:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">Golden Gate Conference Room</span>',
            type: 'subheading',
          },
        },
        {
          title: {
            content: 'Cost:',
            type: 'subheading',
          },
          desc: {
            content: '<span style="font-weight: bold;">$95</span>',
            type: 'subheading',
          },
        },
      ],
      body: {
        content: 'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with.',
        type: 'text',
      },
      cta: {
        textValue: 'Learn more',
        type: 'primary',
      },
    },
  ],
  cta: {
    textValue: 'All events',
    type: 'secondary',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block tile', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
}

export default Wireframe
