import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}
        <Image
          wrapperClassName={style['article__picture-wrapper']}
          pictureClassName={style.article__picture}
          imgClassName={style.article__image}
          bind={`services[${index}].picture`}
          size={{'min-width: 320px': 446, 'min-width: 480px': 738, 'min-width: 768px': 460}}
        />
        {_.get('heading')(modifier) && <Text tagName="h2" className={style.article__title} bind={`services[${index}].title`} />}
        {_.get('body')(modifier) && <Text tagName="p" className={style.article__text} bind={`services[${index}].description`} />}
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
            {!this.getOptionValue('disabled-title') && <Text tagName="h1" className={style.title} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={style.subtitle} bind="subtitle" />}
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
              {this.getModifierValue('button-secondary') && (
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind="button-1"
                />
              )}
              {this.getModifierValue('button-primary') && (
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
      title: {
        content: 'Service 1',
        type: 'heading',
      },
      description: {
        content: 'Multipurpose assistance for online stores and offline retail businesses.',
        type: 'text',
      },
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
      title: {
        content: 'Service 2',
        type: 'heading',
      },
      description: {
        content: 'Developing marketing and business strategy to help company grow fast.',
        type: 'text',
      },
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
      title: {
        content: 'Service 3',
        type: 'heading',
      },
      description: {
        content: 'Building brand awareness for micro and small businesses to increase potential reach.',
        type: 'text',
      },
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
      title: {
        content: 'Service 4',
        type: 'heading',
      },
      description: {
        content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        type: 'text',
      },
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
  title: {
    content: 'Services We Provide',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We deliver all kind of services that support small and micro businesses. Here are some of them:',
    type: 'subtitle',
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
    textValue: 'Request a quote',
    type: 'secondary',
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

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Services description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Heading', type: 'checkbox'},
  body: {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  link: {defaultValue: true, label: 'Link', type: 'checkbox'},
  'button-secondary': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'button-primary': {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
