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
          wrapperClassName={classNames(style['article__picture-wrapper'], 'picture-wrapper')}
          pictureClassName={classNames(style.article__picture, 'picture')}
          imgClassName={classNames(style.article__image, 'picture__image')}
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
          <Text bind={`steps[${index}].heading`} className={classNames(style.article__title, 'heading')} tagName="h2" />
          {_.get('body')(modifier) && (
            <Text bind={`steps[${index}].description`} className={classNames(style.article__text, 'body')} tagName="p" />
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
                <Text bind="title" className={classNames(style.title, 'title', 'text-center')} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={classNames(style.subtitle, 'subtitle', 'text-center')} tagName="p" />
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
          {(this.getModifierValue('button') || this.getModifierValue('button_additional')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
                    linkClassName={style.link}
                    bind="button"
                  />
                )}
                {this.getModifierValue('button_additional') && (
                  <Button
                    className={classNames(style.button, 'butttton')}
                    linkClassName={style.link}
                    bind="button_additional"
                  />
                )}
              </div>
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
  button_additional: {
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
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  body: {defaultValue: true, label: 'Step description', type: 'checkbox', sortOrder: 30},
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 40},
  button_additional: {defaultValue: false, label: 'Button additional', type: 'hidden', sortOrder: 40},
}


export default Block
