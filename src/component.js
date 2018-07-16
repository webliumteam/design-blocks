import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {
      components: {Text},
      style,
    } = this.props

    return (
      <article className={classNames(style.article, className)}>
        {children}

        <div
          className={classNames(style.article__content, {
            [style['article__content--icon-none']]: !_.get('icon')(modifier),
          })}
        >
          {_.get('heading')(modifier) && (
            <Text bind={`steps[${index}].title`} className={classNames(style.article__title, 'wt-heading')} tagName="h2" />
          )}
          {_.get('body')(modifier) && (
            <Text
              bind={`steps[${index}].description`}
              className={classNames(style.article__text, 'wt-body')}
              tagName="p"
            />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {
      components: {Collection, Text, Button, Icon},
      style,
      $block,
    } = this.props
    const btnsGroup = this.getModifierValue('button') || this.getModifierValue('additional-button')
    const stepItem =
      this.getModifierValue('icon') ||
      this.getModifierValue('heading') ||
      this.getModifierValue('body')
    const onlyIconClass =
      this.getModifierValue('icon') &&
      !this.getModifierValue('heading') &&
      !this.getModifierValue('body')
        ? style['section--only-icon']
        : ''

    return (
      <section className={classNames(style.section, onlyIconClass)}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={classNames(style['top-icon'], 'wt-icon')} bind="topIcon" />
          )}
          {this.getModifierValue('title') && (
            <Text
              bind="title"
              className={classNames(style.title, 'wt-title', 'wt-text-center')}
              tagName="h1"
            />
          )}
          {this.getModifierValue('subtitle') && (
            <Text
              bind="subtitle"
              className={classNames(style.subtitle, 'wt-subtitle', 'wt-text-center')}
              tagName="p"
            />
          )}
          {stepItem && (
            <Collection
              className={style['articles-wrapper']}
              bind="steps"
              Item={this.collectionItem}
              itemProps={{
                modifier: $block.modifier,
              }}
            />
          )}
          {btnsGroup && (
            <div className={classNames(style['btns-group'], 'wt-btns-group')}>
              <div className={classNames(style['btns-group__inner'], 'wt-btns-group__inner')}>
                {this.getModifierValue('button') && (
                  <Button className="wt-btns-group__item" buttonClassName={style.button} linkClassName={style.link} bind="cta-1" />
                )}
                {this.getModifierValue('additional-button') && (
                  <Button className="wt-btns-group__item" buttonClassName={style.button} linkClassName={style.link} bind="cta-2" />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  steps: [
    {
      title: {
        content: 'Pick a plan',
        type: 'heading',
      },
      description: {
        content:
          'Compare all available plans to choose the one that will best meet your requirements.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Make a payment',
        type: 'heading',
      },
      description: {
        content:
          'Choose the most suitable payment method. We guarantee the security of all payments.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Enjoy our products',
        type: 'heading',
      },
      description: {
        content: 'Get access to all available features and start attracting clients straight away.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'Our process',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
    type: 'subtitle',
  },
  'cta-1': {
    textValue: 'Learn more',
    type: 'secondary',
  },
  'cta-2': {
    textValue: 'Learn more',
    type: 'link',
  },
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 20},
  icon: {defaultValue: true, label: 'Step icon', type: 'checkbox', sortOrder: 30},
  heading: {defaultValue: true, label: 'Step name', type: 'checkbox', sortOrder: 40},
  body: {defaultValue: true, label: 'Step description', type: 'checkbox', sortOrder: 50},
  button: {defaultValue: true, label: 'Button (link) ', type: 'checkbox', sortOrder: 60},
  'additional-button': {defaultValue: false, label: 'Additional button (link) ', type: 'hidden', sortOrder: 70},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
