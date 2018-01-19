import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Icon}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={style.item__icon}>
          <Icon bind={`articles[${index}].icon`} />
        </div>
        <h2 className={style.item__title}>
          <Text bind={`articles[${index}].title`} />
        </h2>
        {this.getModifierValue('item-description') && (
          <p className={style.item__desc}>
            <Text bind={`articles[${index}].description`} />
          </p>
        )}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('title') && (
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="description" />
            </p>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="articles"
            Item={this.collectionItem}
          />
          <div className={style['btns-group']}>
            {this.getModifierValue('button-secondary') && (
              <Button
                className={classNames(
                  style.button,
                  style['button--secondary'],
                  style['button--size-md'],
                )}
                bind="button-1"
              />
            )}
            {this.getModifierValue('button-primary') && (
              <Button
                className={classNames(
                  style.button,
                  style['button--primary'],
                  style['button--size-md'],
                )}
                bind="button-2"
              />
            )}
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  articles: [
    {
      id: 'f822d787-b3e2-432d-a03e-689c58efb302',
      title: 'Experience',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
      },
      description:
        'We have a considerable experience and already completed more than 10 000 projects.',
    },
    {
      id: '18ce5632-46d1-4c9e-b249-ca0e37f665c2',
      title: 'Support',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
      },
      description:
        'We value each client and always respond to feedback throughout our cooperation.',
    },
    {
      id: '7986b4e0-751f-48f6-8861-5ace080e284b',
      title: 'Technologies',
      icon: {
        svg:
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
      },
      description:
        'We create our products using the latest technologies to ensure the best experience.',
    },
  ],
  title: 'Why Choose Us',
  description:
    'Still have some hesitations whether cooperation with us is worth the trouble? Check the reasons why you should choose us among other companies!',
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
    textValue: 'Medium button',
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
    textValue: 'Medium button',
  },
}

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Advantages title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Advantages description',
    defaultValue: false,
  },
  {
    id: 'item-description',
    type: 'checkbox',
    label: 'Advantages item description',
    defaultValue: true,
  },
  {
    id: 'button-secondary',
    type: 'checkbox',
    label: 'Secondary Button',
    defaultValue: false,
  },
  {
    id: 'button-primary',
    type: 'checkbox',
    label: 'Primary Button',
    defaultValue: false,
  },
]

export default Block
