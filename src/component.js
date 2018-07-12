import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {
      components: {Text, Button},
      style,
      content,
    } = this.props
    const collectionLength = content.collection.items.length
    const oneLastItems = collectionLength % 3 === 1 && style['item--one-last-items']
    const twoLastItems = collectionLength % 3 === 2 && style['item--two-last-items']
    const threeLastItems = collectionLength % 3 === 0 && style['item--three-last-items']
    const classModifier = oneLastItems || twoLastItems || threeLastItems

    return (
      <div className={classNames(style.item, classModifier, className)}>
        {children}
        {this.getModifierValue('caption') && (
          <Text
            tagName="span"
            bind={`collection[${index}].item__caption`}
            className={classNames(style.icon, style.item__caption, 'caption', 'text-center')}
          />
        )}
        <div className={style.item__text}>
          <Text
            tagName="h3"
            className={classNames(style.item__heading, 'heading', 'text-center')}
            bind={`collection[${index}].item__heading`}
          />
          {this.getModifierValue('text') && (
            <Text
              tagName="p"
              className={classNames(style.item__body, 'body', 'text-center')}
              bind={`collection[${index}].item__body`}
            />
          )}
        </div>
        {this.getModifierValue('itemButton') && (
          <Button
            className={style.item__button}
            linkClassName={style.item__link}
            bind={`collection[${index}].item__button`}
          />
        )}
      </div>
    )
  }

  render() {
    const {
      components: {Text, Collection, Button},
      style,
      $block,
      content,
    } = this.props
    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const btnsGroup = this.getModifierValue('button')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {header && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text
                  bind="title"
                  className={classNames(style.title, 'title', 'text-center')}
                  tagName="h2"
                />
              )}
              {this.getModifierValue('subtitle') && (
                <Text
                  bind="subtitle"
                  className={classNames(style.subtitle, 'subtitle', 'text-center')}
                  tagName="p"
                />
              )}
            </div>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
              content,
            }}
          />
          {btnsGroup && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className={classNames(style['btns-group__inner'], 'btns-group__inner')}>
                {this.getModifierValue('button') && (
                  <Button
                    className={classNames(style['btns-group__button'], style.button, 'butttton')}
                    linkClassName={style['btns-group__link']}
                    bind="button"
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

Wireframe.components = _.pick(['Text', 'Icon', 'Button', 'Collection'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Projects',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Each month, we usefully close our projects. Here is the list of our recent ones:',
    type: 'subtitle',
  },
  collection: {
    background: {
      'nth-child': [
        [
          'n',
          {
            type: 'color',
            color: 'light-accent-color',
          },
        ],
      ],
    },
    items: [
      {
        item__caption: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item__heading: {
          type: 'heading',
          content: 'Project 1',
        },
        item__body: {
          type: 'text',
          content:
            'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        },
        item__button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        item__caption: {
          type: 'caption',
          content: 'BRANDING',
        },
        item__heading: {
          type: 'heading',
          content: 'Project 2',
        },
        item__body: {
          type: 'text',
          content:
            'Branding of legal firm. Our work on this project included creating a logo, motto, website, advertising strategy, and other details that help to build a well-known brand.',
        },
        item__button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        item__caption: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item__heading: {
          type: 'heading',
          content: 'Project 3',
        },
        item__body: {
          type: 'text',
          content:
            'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        },
        item__button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        item__caption: {
          type: 'caption',
          content: 'BRANDING',
        },
        item__heading: {
          type: 'heading',
          content: 'Project 4',
        },
        item__body: {
          type: 'text',
          content:
            'Branding of legal firm. Our work on this project included creating a logo, motto, website, advertising strategy, and other details that help to build a well-known brand.',
        },
        item__button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        item__caption: {
          type: 'caption',
          content: 'UX DESIGN',
        },
        item__heading: {
          type: 'heading',
          content: 'Project 5',
        },
        item__body: {
          type: 'text',
          content:
            'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        },
        item__button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
      {
        item__caption: {
          type: 'caption',
          content: 'BRANDING',
        },
        item__heading: {
          type: 'heading',
          content: 'Project 6',
        },
        item__body: {
          type: 'text',
          content:
            'Branding of legal firm. Our work on this project included creating a logo, motto, website, advertising strategy, and other details that help to build a well-known brand.',
        },
        item__button: {
          type: 'link',
          textValue: 'Learn more',
        },
      },
    ],
  },
  button: {
    type: 'secondary',
    textValue: 'Learn more',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: true, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  caption: {defaultValue: true, label: 'Project category', type: 'checkbox', sortOrder: 30},
  text: {defaultValue: true, label: 'Project  description', type: 'checkbox', sortOrder: 40},
  itemButton: {defaultValue: true, label: 'Project link (button)', type: 'checkbox', sortOrder: 50},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 60},
}

export default Wireframe
