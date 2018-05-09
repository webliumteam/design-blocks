import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, showHeading}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={style['item__picture-wrapper']}>
          <Image
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`awards[${index}].picture`}
            size={{'min-width: 480px': 358, 'min-width: 320px': 450}}
          />
        </div>
        {showHeading && (
          <Text bind={`awards[${index}].title`} className={style.item__title} tagName="p" />
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
          {this.getModifierValue('title') && (
            <Text bind="title" className={style.title} tagName="h1" />
          )}
          {this.getModifierValue('subtitle') && (
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          )}
          <Collection
            className={style['items-wrapper']}
            bind="awards"
            Item={this.collectionItem}
            itemProps={{
              showHeading: this.getModifierValue('heading'),
            }}
          />
          {this.getModifierValue('button') && (
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
  awards: [
    {
      title: {
        content: 'R&D Leader in Tech (2017)',
        type: 'heading',
      },
      picture: {
        alt: 'R&D Leader in Tech photo',
      },
    },
    {
      title: {
        content: 'Most Innovative B2B Solutions (2016)',
        type: 'heading',
      },
      picture: {
        alt: 'Most Innovative B2B Solutions photo',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      picture: {
        alt: 'Best Service Provider',
      },
    },
    {
      title: {
        content: 'Leader of Innovation (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Leader of Innovation photo',
      },
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Awards',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'The excellence of our services has been proved by the following awards:',
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
    type: 'primary',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Awards description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Awards title', type: 'checkbox'},
  button: {defaultValue: false, label: 'Primary button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
