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
        <Image
          wrapperClassName={style['article__picture-wrapper']}
          pictureClassName={style.article__picture}
          imgClassName={style.article__image}
          bind={`blog[${itemNumber}].picture`}
          size={{'min-width: 768px': 570, 'min-width: 480px': 768, 'min-width: 320px': 480}}
        />
      ),
      this.getModifierValue('post-publish-date') && (
        <small className={style.article__meta}>
          {!this.getOptionValue('hidden-category') && <Text tagName="span" bind={`blog[${itemNumber}].category`} className={style.article__category} /> }
          {!this.getOptionValue('hidden-date') && <Text tagName="span" bind={`blog[${itemNumber}].date`} className={style.article__date} /> }
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
        <Text tagName="h2" className={style.article__title} bind={`blog[${index}].title`} />
        {this.getModifierValue('post-description') && (
        <Text tagName="p" className={style.article__text} bind={`blog[${index}].description`} />
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
          <Text tagName="h1" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="div" className={style.subtitle} bind="subtitle" />
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
      title: {
        content: 'How to Hire the Best Employees to Your Company?',
        type: 'heading',
      },
      description: {
        content: 'Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business. ',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 22, 2017',
        type: 'caption',
      },
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
      title: {
        content: 'How to Achieve Higher Profits in Retail with One Product?',
        type: 'heading',
      },
      description: {
        content: 'Do you want to achieve higher profits this year? Our new product will help you get what you want. In this article, you will find out how to use it to get more benefits.',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 22, 2017',
        type: 'caption',
      },
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
      title: {
        content: 'Top 5 Tips to Improve Your Engineering Department.',
        type: 'heading',
      },
      description: {
        content: 'You engineers can bring you better results! Get to know how to improve engineering department to make a new step for your company growth. ',
        type: 'text',
      },
      category: {
        content: 'Creative Process',
        type: 'caption',
      },
      date: {
        content: 'September 22, 2017',
        type: 'caption',
      },
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
  title: {
    content: 'Blog',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Subtitle here',
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
  'post-image': {defaultValue: true, label: 'Image', type: 'checkbox'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-link': {defaultValue: true, label: 'Link', type: 'checkbox'},
  'block-button': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
