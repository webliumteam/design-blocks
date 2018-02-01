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
        <div className={style['article__picture-wrapper']}>
          <Image
            pictureClassName={style.article__picture}
            imgClassName={style.article__image}
            bind={`services[${index}].picture`}
            size={{'min-width: 320px': 446, 'min-width: 480px': 738, 'min-width: 768px': 460}}
          />
        </div>
        {_.get('heading')(modifier) && (
          <h2 className={style.article__title}>
            <Text bind={`services[${index}].title`} />
          </h2>
        )}
        {_.get('body')(modifier) && (
          <p className={style.article__text}>
            <Text bind={`services[${index}].description`} />
          </p>
        )}
        {_.get('link')(modifier) && (
          <Button
            className={style.article__link}
            buttonClassName={style.button}
            linkClassName={style.link}
            bind={`services[${index}].link`}
          />
        )}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          <header className={style.section__header}>
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
            {this.getModifierValue('subtitle') && (
              <p className={style.subtitle}>
                <Text bind="description" />
              </p>
            )}
          </header>
          <Collection
            className={style['articles-wrapper']}
            bind="services"
            Item={this.collectionItem}
            fakeHelpers={{
              count: 3,
              className: style.fake,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {(this.getModifierValue('button-secondary') ||
            this.getModifierValue('button-primary')) && (
            <div className={style['btns-group']}>
              {this.getModifierValue('button-primary') && (
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind="button-1"
                />
              )}
              {this.getModifierValue('button-secondary') && (
                <Button
                  buttonClassName={style.button}
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon'])($editor.components)

Block.defaultContent = {
  services: [
    {
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: 'Service 1',
      description:
        'Multipurpose assistance for online stores and offline retail businesses.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: 'Service 2',
      description:
        'Developing marketing and business strategy to help company grow fast.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: 'Service 3',
      description:
        'Building brand awareness for micro and small businesses. ',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
    {
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Service 4',
      description:
        'Aftersales support in marketing, sales, and staff training.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
      },
      link: {
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
        type: 'link',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: 'Services We Provide',
  description:
    'We deliver all kind of services that support small and micro businesses. Here are some of them:',
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
    textValue: 'Book a service',
    type: 'primary',
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
    textValue: 'All services',
    type: 'secondary',
  },
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Services description',
    defaultValue: false,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Service title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Service main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'Link',
    defaultValue: true,
  },
  {
    id: 'button-primary',
    type: 'checkbox',
    label: 'Primary button',
    defaultValue: false,
  },
  {
    id: 'button-secondary',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default Block
