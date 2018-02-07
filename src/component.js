import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  itemHeader = (itemNumber) => {
    const {components: {Text, Image}, style} = this.props
    return [
      this.getModifierValue('post-image') && (
        <div className={style['article__picture-wrapper']}>
          <Image
            pictureClassName={style.article__picture}
            imgClassName={style.article__image}
            bind={`blog[${itemNumber}].picture`}
            size={{'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}}
          />
        </div>
      ),
      this.getModifierValue('post-publish-date') && (
        <small className={style.article__meta}>
          {!this.getOptionValue('hidden-category') && <Text bind={`blog[${itemNumber}].category`} className={style.article__category} /> }
          {!this.getOptionValue('hidden-date') && <Text bind={`blog[${itemNumber}].date`} className={style.article__date} /> }
        </small>
      ),
    ]
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}
        {this.getOptionValue('picture-with-date') ? <div className={style.article__header}>{this.itemHeader(index)}</div> : this.itemHeader(index)}
        <h2 className={style.article__title}>
          <Text bind={`blog[${index}].title`} />
        </h2>
        {this.getModifierValue('post-description') && (
          <p className={style.article__text}>
            <Text bind={`blog[${index}].description`} />
          </p>
        )}
        {this.getModifierValue('post-link') && (
          <Button
            className={style.article__link}
            buttonClassName={style.button}
            linkClassName={style.link}
            bind={`blog[${index}].link`}
          />
        )}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
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
                buttonClassName={style.button}
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon'])($editor.components)

Block.defaultContent = {
  blog: [
    {
      id: '21a46d6e-0354-4a96-9af0-928ddae32095',
      title: 'How to Hire Only Professional and Dedicated Employees? Useful Tips from Our HR Director.',
      description:
        'Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business. ',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
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
      id: '41db0c4f-46b3-4835-8e77-062de63d018a',
      title: 'How to Achieve Higher Profits in Retail with Our New Product?',
      description:
        'Do you want to achieve higher profits this year? Our new product will help you get what you want. In this article, you will find out how to use it to get more benefits.',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
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
      id: 'fff4b459-6e4f-4645-901e-4c1b1aa94e51',
      title: 'Top 5 Tips to Improve Your Engineering Department.',
      description:
        'You engineers can bring you better results! Get to know how to improve engineering department to make a new step for your company growth. ',
      category: 'Creative Process',
      date: 'September 22, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Article illustration photo',
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
  title: 'Blog',
  subtitle: 'Subtitle here',
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
  'block-button': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-image': {defaultValue: true, label: 'Post image', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Post link', type: 'checkbox'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
