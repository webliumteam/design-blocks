import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}

        <div className={style.item__inner}>
          <Text bind={`testimonials[${index}].description`} className={classNames(style.item__desc, 'text-center', 'body')} tagName="p" />
          {_.get('date')(modifier) && (
            <Text bind={`testimonials[${index}].date`} className={classNames(style.item__time, 'text-center', 'caption')} tagName="time" />
          )}
          {_.get('heading')(modifier) && (
            <Text bind={`testimonials[${index}].title`} className={classNames(style.item__title, 'text-center', 'heading')} tagName="h2" />
          )}
          {_.get('position')(modifier) && (
            <Text bind={`testimonials[${index}].position`} className={classNames(style.item__position, 'text-center', 'caption')} tagName="p" />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-caption') && (
            <Text bind="top-caption" className={style['caption-decorator']} tagName="div" />
          )}
          {(this.getModifierValue('title') || this.getModifierValue('subtitle')) && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={classNames(style.title, 'title', 'text-center')} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={classNames(style.subtitle, 'subtitle', 'text-center')} tagName="p" />
              )}
            </header>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="testimonials"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {(this.getModifierValue('button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
                    linkClassName={style.link}
                    bind="button"
                  />
                )}
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  testimonials: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: '#d8d8d8',
        }],
      ],
    },
    items: [
      {
        title: {
          content: 'Amanda Peterson',
          type: 'heading',
        },
        date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
        description: {
          content: '“I was happy to work with Quantum! Their efficient solutions helped us to improve a plenty of business processes. Now our clients receive their products faster so that they are more satisfied with our services. They deserve the highest grade!”',
          type: 'text',
        },
        position: {
          content: 'Marketing Director at Junk Food Co.',
          type: 'caption',
        },
        picture: {
          alt: 'Amanda Peterson review',
        },
      },
      {
        title: {
          content: 'Jeff Gordons',
          type: 'heading',
        },
        date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
        description: {
          content: '“Our company started to work with Quantum 4 years ago. We had only positive experience and implemented a lot of projects together. We’re totally satisfied and now we know that we can rely on Quantum experts any time.”',
          type: 'text',
        },
        position: {
          content: 'CEO at Clear Thinking',
          type: 'caption',
        },
        picture: {
          alt: 'Jeff Gordons review',
        },
      },
      {
        title: {
          content: 'Elizabeth Smith',
          type: 'heading',
        },
        date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
        description: {
          content: '“Quantum is a reliable and professional company that applies high technology and creates exclusive programs for the clients. We highly appreciate this approach and will definitely continue our fruitful cooperation with them.”',
          type: 'text',
        },
        position: {
          content: 'Director of Media at Legal Company',
          type: 'caption',
        },
        picture: {
          alt: 'Elizabeth Smith review',
        },
      },
    ],
  },
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Find out why so many companies prefer us over others!',
    type: 'subtitle',
  },
  button: {
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
  button_additional: {
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
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  date: {defaultValue: true, label: 'Comment date', type: 'checkbox', sortOrder: 30},
  heading: {defaultValue: true, label: "Client's name", type: 'checkbox', sortOrder: 40},
  position: {defaultValue: true, label: "Client's job position", type: 'checkbox', sortOrder: 50},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 60},
  button_additional: {defaultValue: false, label: 'Additional button (link) ', type: 'hidden', sortOrder: 70},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
