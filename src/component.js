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

  collectionItem = ({index, children, className}) => {
    const {components: {Image}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__inner}>
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`projects[${index}].picture`}
            resize={{disable: true}}
          />
        </div>
      </div>
    )
  }


  render() {
    const {components: {Text, Button, Collection}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <Text tagName="h1" className={style.title} bind="title" />
            {this.getModifierValue('subtitle') && (
              <Text tagName="p" className={style.subtitle} bind="subtitle" />
            )}
          </header>
          <Collection
            className={style['items-wrapper']}
            bind="projects"
            Item={this.collectionItem}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'Collection'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Projects',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Over more than 15 years of our practice, we have completed a number of projects for our clients and have helped them generate more than $15 million in revenues. Browse through our selected projects to get the idea of what we do on a daily basis.',
    type: 'subtitle',
  },
  projects: [
    {
      picture: {
        alt: 'Illustration for project',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
    {
      picture: {
        alt: 'Picture about the company',
      },
    },
  ],
  button: {
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
  subtitle: {defaultValue: true, label: 'Projects description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}


export default Block
