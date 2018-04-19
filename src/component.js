import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Icon, Text}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {this.getModifierValue('icon') && (<Icon
          bind={`collection[${index}].icon`}
          className={classNames(style.icon, style.item__icon)}
        />)}
        {this.getModifierValue('heading') && (<Text
          tagName="h3"
          className={classNames(style.heading, style.item__heading)}
          bind={`collection[${index}].heading`}
        />)}
        {this.getModifierValue('subheading') && (<Text
          tagName="p"
          className={classNames(style.subheading, style.item__subheading)}
          bind={`collection[${index}].subheading`}
        />)}
        {children}
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props

    return (
      <section className={style.section}>
        <Text tagName="h1" className={style.title} bind="title" />
        {this.getModifierValue('subtitle') && (<Text tagName="p" className={style.subtitle} bind="subtitle" />)}
        <Collection
          className={style['collection-wrapper']}
          bind="collection"
          Item={this.collectionItem}
          itemProps={{
            modifier: $block.modifier,
          }}
        />
        <div className={style['btn-group']}>
          {_.get(['modifier', 'primaryButton'], $block) && (<Button
            className={style.button}
            linkClassName={style.link}
            bind="button"
          />)}
          {_.get(['modifier', 'secondaryButton'], $block) && (<Button
            className={style.button}
            linkClassName={style.link}
            bind="secondaryButton"
          />)}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Icon', 'Button', 'Collection'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#fff',
  },
  title: {
    content: 'Why Us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Once upon a time and a very good time it was there was a moocow coming down along the road and this moocow',
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
          src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5ad5a3826678f100250985e4.jpeg',
          imageColor: [250, 250, 250],
        }],
      ],
    },
    items: [
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16"><path d="M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.256.274A1.162 1.162 0 0 0 11.75.28l-4.88 4.255-5.06-3.475a1.162 1.162 0 0 0-1.34.014c-.396.29-.563.801-.417 1.271l4.026 12.828a1.161 1.161 0 0 0 1.777.594L21.231 4.771l-2.103 8.179-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.701.262 1.056.131.354-.13.617-.428.715-.787L24.25 2.284c.118-.463-.07-.96-.465-1.23a1.18 1.18 0 0 0-1.305 0z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Heading',
        },
        subheading: {
          type: 'subheading',
          content: 'Once upon a time and a very good time it was there was a moocow',
        },
      },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16"><path d="M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.256.274A1.162 1.162 0 0 0 11.75.28l-4.88 4.255-5.06-3.475a1.162 1.162 0 0 0-1.34.014c-.396.29-.563.801-.417 1.271l4.026 12.828a1.161 1.161 0 0 0 1.777.594L21.231 4.771l-2.103 8.179-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.701.262 1.056.131.354-.13.617-.428.715-.787L24.25 2.284c.118-.463-.07-.96-.465-1.23a1.18 1.18 0 0 0-1.305 0z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Heading',
        },
        subheading: {
          type: 'subheading',
          content: 'Once upon a time and a very good time it was there was a moocow',
        },
      },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16"><path d="M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.256.274A1.162 1.162 0 0 0 11.75.28l-4.88 4.255-5.06-3.475a1.162 1.162 0 0 0-1.34.014c-.396.29-.563.801-.417 1.271l4.026 12.828a1.161 1.161 0 0 0 1.777.594L21.231 4.771l-2.103 8.179-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.701.262 1.056.131.354-.13.617-.428.715-.787L24.25 2.284c.118-.463-.07-.96-.465-1.23a1.18 1.18 0 0 0-1.305 0z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Heading',
        },
        subheading: {
          type: 'subheading',
          content: 'Once upon a time and a very good time it was there was a moocow',
        },
      },
      {
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16"><path d="M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.256.274A1.162 1.162 0 0 0 11.75.28l-4.88 4.255-5.06-3.475a1.162 1.162 0 0 0-1.34.014c-.396.29-.563.801-.417 1.271l4.026 12.828a1.161 1.161 0 0 0 1.777.594L21.231 4.771l-2.103 8.179-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.701.262 1.056.131.354-.13.617-.428.715-.787L24.25 2.284c.118-.463-.07-.96-.465-1.23a1.18 1.18 0 0 0-1.305 0z"/></svg>',
        },
        heading: {
          type: 'heading',
          content: 'Heading',
        },
        subheading: {
          type: 'subheading',
          content: 'Once upon a time and a very good time it was there was a moocow',
        },
      },
    ],
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
    textValue: 'Medium button',
    type: 'primary',
  },
  secondaryButton: {
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
    textValue: 'Medium button',
    type: 'secondary',
  },
}


Wireframe.modifierScheme = {
  primaryButton: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  secondaryButton: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block subtitle', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Icon item', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Heading Item', type: 'checkbox'},
  subheading: {defaultValue: true, label: 'Subheading item', type: 'checkbox'},
}

export default Wireframe
