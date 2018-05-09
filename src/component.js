import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}

        <Image
          pictureClassName={style.article__picture}
          imgClassName={style.article__image}
          bind={`steps[${index}].picture`}
          size={
            {
              'min-width: 992px': 170,
              'min-width: 768px': 100,
              'min-width: 320px': 70,
            }
          }
          resize={{disable: true}}
        />
        <div className={style.article__content}>
          <Text bind={`steps[${index}].heading`} className={style.article__title} tagName="h2" />
          {_.get('body')(modifier) && (
            <Text bind={`steps[${index}].description`} className={style.article__text} tagName="p" />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Text, Button, Collection}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
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
            bind="steps"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                linkClassName={style.link}
                buttonClassName={style.button}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'Image', 'Collection'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Our process',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We are sure that the process of our cooperation with clients should be clear and simple. Take these 3 steps to enjoy the benefits of working with us!',
    type: 'subtitle',
  },
  steps: [
    {
      heading: {
        content: 'Step 1. Choose a plan',
        type: 'heading',
      },
      description: {
        content: 'We provide you with full information about each plan. There are a few available options to choose from.',
        type: 'text',
      },
      picture: {
        alt: 'Illustraion for step 1',
      },
    },
    {
      heading: {
        content: 'Step 2. Proceed with the payment',
        type: 'heading',
      },
      description: {
        content: 'We guarantee the security of all payments.',
        type: 'text',
      },
      picture: {
        alt: 'Illustraion for step 2',
      },
    },
    {
      heading: {
        content: 'Step 3. Enjoy our products',
        type: 'heading',
      },
      description: {
        content: 'You will get access to all options immediately.',
        type: 'text',
      },
      picture: {
        alt: 'Illustraion for step 3',
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
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Process description', type: 'checkbox'},
  body: {defaultValue: true, label: 'Step main text', type: 'checkbox'},
  button: {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}


export default Block
