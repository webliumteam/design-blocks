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

  collectionItem = ({index, children, className, images}) => {
    const {components: {Text, Image, Button, Resizer}, style} = this.props
    const withoutList =
      !this.getModifierValue('name') &&
      !this.getModifierValue('hours') &&
      !this.getModifierValue('date') &&
      !this.getModifierValue('location') &&
      !this.getModifierValue('cost')

    const withoutBody = !this.getModifierValue('body')
    const withoutContent = withoutList && withoutBody
    const twoRows = parseInt(this.getModifierValue('imagesQuantity'), 10) > 3

    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 300
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 800

    return (
      <div className={classNames(style.item, className, {
        [style['item--two-rows']]: twoRows,
        [style['item--list-hidden']]: withoutList,
        [style['item--body-hidden']]: withoutBody,
        [style['item--content-hidden']]: withoutContent,
      })}
      >
        {children}
        <Resizer
          styleProp="minHeight"
          bindToModifier={`items${index}`}
          min={getMinResize}
          max={getMaxResize}
          disable={this.getOptionValue('disable-resizer')}
        >
          <div
            className={style['picture-wrapper']}
          >
            {_.map(n => (
              <Image
                wrapperClassName={style['item__picture-wrapper']}
                pictureClassName={style.item__picture}
                imageClassName={style.item__image}
                bind={`items[${index}].picture[${n}]`}
                size={{
                  'min-width: 320px': 480,
                  'min-width: 480px': 768,
                  'min-width: 768px': 570,
                }}
                resize={{
                  disable: true,
                }}
                key={n}
              />
            ), images)}
          </div>
        </Resizer>
        <div className={style.item__content}>
          {!withoutList && (
            <ul className={style.item__list}>
              {this.getModifierValue('name') && (
                <li className={style.brief}>
                  <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[0].title`} />
                  <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[0].desc`} />
                </li>
              )}
              {this.getModifierValue('hours') && (
                <li className={style.brief}>
                  <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[1].title`} />
                  <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[1].desc`} />
                </li>
              )}
              {this.getModifierValue('date') && (
                <li className={style.brief}>
                  <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[2].title`} />
                  <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[2].desc`} />
                </li>
              )}
              {this.getModifierValue('location') && (
                <li className={style.brief}>
                  <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[3].title`} />
                  <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[3].desc`} />
                </li>
              )}
              {this.getModifierValue('cost') && (
                <li className={style.brief}>
                  <Text tagName="h3" className={style.brief__title} bind={`items[${index}].brief[4].title`} />
                  <Text tagName="p" className={style.brief__desc} bind={`items[${index}].brief[4].desc`} />
                </li>
              )}
            </ul>
          )}
          {this.getModifierValue('body') && (
            <Text tagName="p" className={style.item__body} bind={`items[${index}].body`} />
          )}
          {this.getModifierValue('primary-button') && (
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              className={style.item__button}
              bind={`items[${index}].cta`}
            />
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props
    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const images = _.times(Number, this.getModifierValue('imagesQuantity'))

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
              images,
            }}
          />
          {this.getModifierValue('secondary-button') && (
            <div className={style['btns-group']}>
              <Button
                className={style['btns-group__button']}
                linkClassName={style.link}
                buttonClassName={style.button}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Collection', 'Image', 'Button', 'Resizer'])($editor.components)

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
      picture: [
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
      ],
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
    },
    {
      picture: [
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
      ],
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
    },
    {
      picture: [
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
        {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Picture about the company',
        },
      ],
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
    },
  ],
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
    textValue: 'All events',
    type: 'secondary',
  },
}

Wireframe.modifierScheme = {
  imagesQuantity: {
    children: [
      {id: '1', label: '1'},
      {id: '2', label: '2'},
      {id: '3', label: '3'},
      {id: '4', label: '4'},
      {id: '5', label: '5'},
      {id: '6', label: '6'},
    ],
    defaultValue: '1',
    name: 'Images in event',
    type: 'radio-button-group',
    style: 'buttons',
  },
  title: {defaultValue: true, label: 'Block tile', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox'},
  name: {defaultValue: true, label: "Event's name", type: 'checkbox'},
  hours: {defaultValue: true, label: 'Hours of event', type: 'checkbox'},
  date: {defaultValue: true, label: "Event's date", type: 'checkbox'},
  location: {defaultValue: true, label: "Event's location", type: 'checkbox'},
  cost: {defaultValue: true, label: "Event's cost", type: 'checkbox'},
  body: {defaultValue: true, label: "Event's details", type: 'checkbox'},
  'primary-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Wireframe
