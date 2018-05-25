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
            <Text bind={`steps[${index}].title`} className={style.article__title} tagName="h2" />
          )}
          {_.get('body')(modifier) && (
            <Text bind={`steps[${index}].description`} className={style.article__text} tagName="p" />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style, $block} = this.props
    const btnsGroup = this.getModifierValue('button') || this.getModifierValue('additional-button')

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
            className={style['articles-wrapper']}
            bind="steps"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {btnsGroup && (
            <div className={style['btns-group']}>
              {this.getModifierValue('button') && (
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind="cta-1"
                />
              )}
              {this.getModifierValue('additional-button') && (
                <Button
                  buttonClassName={style.button}
                  linkClassName={style.link}
                  bind="cta-2"
                />
              )}
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
        content: 'Compare all available plans to choose the one that will best meet your requirements.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Make a payment',
        type: 'heading',
      },
      description: {
        content: 'Choose the most suitable payment method. We guarantee the security of all payments.',
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
    content: 'We are guided by clear and simple cooperation with clients. Here’s how you can order our online products:',
    type: 'subtitle',
  },
  'cta-1': {
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
  'cta-2': {
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
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}


Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Process description', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Step icon', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Step title', type: 'checkbox'},
  body: {defaultValue: true, label: 'Step main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Button', type: 'hidden'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
