import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}

        <div className={classNames(style.article__content, {[style['article__content--icon-none']]: !_.get('icon')(modifier)})}>
          {_.get('heading')(modifier) && (
            <h2 className={style.article__title}>
              <Text bind={`steps[${index}].title`} />
            </h2>
          )}
          {_.get('body')(modifier) && (
            <p className={style.article__text}>
              <Text bind={`steps[${index}].description`} />
            </p>
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
          {this.getModifierValue('title') && (
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="description" />
            </p>
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

Block.components = _.pick(['Collection', 'Text', 'Button'])($editor.components)

Block.defaultContent = {
  steps: [
    {
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: 'Pick a plan',
      description:
        'You will get complete information about each program we offer. There are several available options according to your needs.',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: 'Make a payment',
      description:
        'We guarantee the security of all payments. You may choose the most suitable payment method.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: 'Enjoy our products',
      description:
        'You will get access to all available features immediately.',
    },
  ],
  title: 'Our process',
  description:
    'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
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
    label: 'Process description',
    defaultValue: true,
  },
  {
    id: 'icon',
    type: 'checkbox',
    label: 'Step icon',
    defaultValue: true,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Step title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Step main text',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
]

export default Block
