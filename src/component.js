import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button, Image}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}
        {this.getModifierValue('post-image') && (
          <div className={style['article__picture-wrapper']}>
            <Image
              pictureClassName={style.article__picture}
              imgClassName={style.article__image}
              bind={`blog[${index}].picture`}
            />
          </div>
        )}
        {this.getModifierValue('post-publish-date') && (
          <small className={style.article__meta}>
            <Text bind={`blog[${index}].category`} />
            &nbsp;|&nbsp;
            <Text bind={`blog[${index}].date`} />
          </small>
        )}
        <h2 className={style.article__title}>
          <Text bind={`blog[${index}].title`} />
        </h2>
        {this.getModifierValue('post-description') && (
          <p className={style.article__text}>
            <Text bind={`blog[${index}].description`} />
          </p>
        )}
        {this.getModifierValue('post-link') && (
          <Button className={style.link} bind={`blog[${index}].cta`} />
        )}
      </article>
    )
  }

  // {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  render() {
    const {components: {Collection, Text, Button}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          <Collection
            className={style['articles-wrapper']}
            bind="blog"
            Item={this.collectionItem}
            fakeHelpers={{
              count: 2,
              className: style.fake,
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
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'The two most important questions when scoping your MVP',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
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
        textValue: 'Read more',
      },
    },
    {
      id: '41db0c4f-46b3-4835-8e77-062de63d018a',
      title: 'The two most important questions when scoping your MVP',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      category: 'Creative Process',
      date: '| September 22, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
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
        textValue: 'Read more',
      },
    },
    {
      id: 'fff4b459-6e4f-4645-901e-4c1b1aa94e51',
      title: 'The two most important questions when scoping your MVP',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      category: 'Creative Process',
      date: '| September 22, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
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
        textValue: 'Read more',
      },
    },
  ],
  title: 'Blog',
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
    textValue: 'All blog posts',
  },
}

Block.modifierScheme = [
  {
    id: 'post-publish-date',
    type: 'checkbox',
    label: 'Date of publishing',
    defaultValue: true,
  },
  {
    id: 'post-image',
    type: 'checkbox',
    label: 'Post image',
    defaultValue: true,
  },
  {
    id: 'post-description',
    type: 'checkbox',
    label: 'Post main text',
    defaultValue: true,
  },
  {
    id: 'post-link',
    type: 'checkbox',
    label: 'Post link',
    defaultValue: true,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Block button',
    defaultValue: true,
  },
]

export default Block
