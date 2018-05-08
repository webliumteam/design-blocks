import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = path => _.get(['options', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image, Resizer}, style} = this.props
    return (
      <Resizer
        styleProp="minHeight"
        bindToModifier={`resizer.projects${index}`}
        min={this.getOptionValue('min-resize')}
        max={this.getOptionValue('max-resize')}
        disable={this.getOptionValue('disable-resizer')}
      >
        <article className={classNames(style.article, className)}>
          {children}
          <Image
            wrapperClassName={style['article__picture-wrapper']}
            pictureClassName={style.article__picture}
            imgClassName={style.article__image}
            bind={`projects[${index}].picture`}
            resize={{disable: true}}
          />
          <div className={style.article__content}>
            {_.get('project-category')(modifier) && (
              <Text bind={`projects[${index}].subtitle`} className={style.article__caption} tagName="p" />
            )}
            <Text bind={`projects[${index}].title`} className={style.article__title} tagName="h2" />
            {_.get('project-description')(modifier) && (
              <Text bind={`projects[${index}].text`} className={style.article__text} tagName="p" />
            )}
            {_.get('project-button')(modifier) && (
              <Button
                className={style.article__link}
                buttonClassName={style.button}
                linkClassName={style.link}
                bind={`projects[${index}].link`}
              />
            )}
          </div>
        </article>
      </Resizer>
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
          {(this.getModifierValue('title') || this.getModifierValue('subtitle')) && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={style.title} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={style.subtitle} tagName="p" />
              )}
            </header>
          )}
          <Collection
            className={style['articles-wrapper']}
            bind="projects"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('block-button') && (
            <div className={style['btns-group']}>
              <Button
                className={style.button}
                linkClassName={style.link}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon', 'Resizer'])($editor.components)

Block.defaultContent = {
  projects: [
    {
      title: {
        content: 'Project 1',
        type: 'heading',
      },
      subtitle: {
        content: 'UX design',
        type: 'caption',
      },
      text: {
        content: 'Innovative digital solution for a marketing company. We worked on UX for the company website to make it more effective and increase the number of leads.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Project 1',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: {
        content: 'Project 2',
        type: 'heading',
      },
      subtitle: {
        content: 'Branding',
        type: 'caption',
      },
      text: {
        content: 'Branding of legal firm. Our work on this project included creating a logo, motto, website, advertising strategy, and other details that help to build a well-known brand.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Project 2',
        size: {
          'min-width: 992px': 586,
          'min-width: 768px': 962,
          'min-width: 480px': 768,
          'min-width: 320px': 450,
        },
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
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Our Projects',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Each month, we usefully close our projects. Here is the list of our recent ones:',
    type: 'subtitle',
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
    type: 'secondary',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Project description', type: 'checkbox'},
  'project-category': {defaultValue: true, label: 'Project category', type: 'checkbox'},
  'project-description': {defaultValue: true, label: 'Project main text', type: 'checkbox'},
  'block-button': {defaultValue: true, label: 'Link', type: 'checkbox'},
  'project-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
