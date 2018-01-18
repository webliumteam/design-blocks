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
            bind={`projects[${index}].picture`}
            size={{
              'min-width: 320px': 450,
              'min-width: 480px': 768,
              'min-width: 768px': 962,
              'min-width: 992px': 586,
            }}
          />
        </div>
        <div className={style.article__content}>
          {_.get('project-category')(modifier) && (
            <p className={style.article__caption}>
              <Text bind={`projects[${index}].subtitle`} />
            </p>
          )}
          <h2 className={style.article__title}>
            <Text bind={`projects[${index}].title`} />
          </h2>
          {_.get('project-description')(modifier) && (
            <p className={style.article__text}>
              <Text bind={`projects[${index}].text`} />
            </p>
          )}
          {_.get('project-button')(modifier) && (
            <Button className={style.article__link} bind={`projects[${index}].cta`} />
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
          <header className={style.section__header}>
            {this.getModifierValue('title') && (
              <h1 className={style.title}>
                <Text bind="title" />
              </h1>
            )}
            {this.getModifierValue('subtitle') && (
              <p className={style.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
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
                className={classNames(style.button, style['button--secondary'], style['button--size-md'])}
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
    label: 'Title description',
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
