import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button, Image}, style: css} = this.props
    return (
      <article className={classNames(css.article, className)}>
        {children}
        <div className={css['article__picture-wrapper']}>
          <Image
            pictureClassName={css.article__picture}
            imgClassName={css.article__image}
            bind={`projects[${index}].picture`}
            size={{
              'min-width: 320px': 450,
              'min-width: 480px': 768,
              'min-width: 768px': 962,
              'min-width: 992px': 586,
            }}
          />
        </div>
        <div className={css.article__content}>
          {this.getModifierValue('project-category') && (
            <p className={css.article__caption}>
              <Text bind={`projects[${index}].subtitle`} />
            </p>
          )}
          <h2 className={css.article__title}>
            <Text bind={`projects[${index}].title`} />
          </h2>
          {this.getModifierValue('project-description') && (
            <p className={css.article__text}>
              <Text bind={`projects[${index}].text`} />
            </p>
          )}
          {this.getModifierValue('project-button') && (
            <Button className={css.article__link} bind={`projects[${index}].cta`} />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <header className={css.section__header}>
            {this.getModifierValue('title') && (
              <h1 className={css.title}>
                <Text bind="title" />
              </h1>
            )}
            {this.getModifierValue('subtitle') && (
              <p className={css.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
          <Collection
            className={css['articles-wrapper']}
            bind="projects"
            Item={this.collectionItem}
          />
          {this.getModifierValue('block-button') && (
            <div className={css['btns-group']}>
              <Button
                className={classNames(css.button, css['button--secondary'], css['button--size-md'])}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  projects: [
    {
      id: 'e9ec34d7-3cc6-49f3-a9ad-6ea69f59409c',
      title: 'Project 1',
      subtitle: 'UX DESIGN',
      text:
        'A side-project with the goal to create a product that does one job incredibly well and learn a new programming language along the way.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Project 1',
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
      },
    },
    {
      id: '9310272a-1fa2-4876-b1db-a879bbd4bc52',
      title: 'Project 2',
      subtitle: 'BRANDING',
      text:
        'A side-project with the goal to create a product that does one job incredibly well and learn a new programming language along the way.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Project 2',
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
      },
    },
    {
      id: 'fdb764de-b808-4248-9c32-b423b71080bd',
      title: 'Project 3',
      subtitle: 'UX DESIGN',
      text:
        'A side-project with the goal to create a product that does one job incredibly well and learn a new programming language along the way.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Project 3',
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
      },
    },
  ],
  title: 'Our Projects',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    textValue: 'All projects',
  },
}

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Block button',
    defaultValue: true,
  },
  {
    id: 'project-category',
    type: 'checkbox',
    label: 'Project category',
    defaultValue: true,
  },
  {
    id: 'project-description',
    type: 'checkbox',
    label: 'Project description',
    defaultValue: true,
  },
  {
    id: 'project-button',
    type: 'checkbox',
    label: 'Project button',
    defaultValue: true,
  },
]

export default Block
