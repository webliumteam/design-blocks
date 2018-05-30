import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    opened: 0,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  toggleItemOpening = index => () => {
    this.setState({opened: index === this.state.opened ? null : index})
  }

  collectionItem = ({index, children, className, openedItem}) => {
    const {components: {Text}, style} = this.props
    const controlIcons = !this.getOptionValue('different-icons') ?
      (<div className={style.item__icon} dangerouslySetInnerHTML={{__html: this.getOptionValue('open-icon')}} />) :
      (<div className={style.item__icon} dangerouslySetInnerHTML={{__html: this.state.opened === index ? this.getOptionValue('open-icon') : this.getOptionValue('close-icon')}} />)

    return (
      <article
        className={classNames(style.item, openedItem === index && style['item--active'], className)}
      >
        {children}

        <button type="button" className={style.item__button} onClick={this.toggleItemOpening(index)}>
          <Text tagName="h2" className={style.item__title} bind={`faq[${index}].title`} />
          {this.getOptionValue('toogle-item-controls') && controlIcons}
        </button>
        <Text tagName="div" className={style.item__content} bind={`faq[${index}].description`} />
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style} = this.props
    const {opened} = this.state

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          <Text tagName="h1" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={style.subtitle} bind="description" />
          )}
          <Collection
            className={style.items}
            bind="faq"
            itemProps={{openedItem: opened}}
            Item={this.collectionItem}
          />
          {this.getModifierValue('secondary-button') && (
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  faq: [
    {
      title: {
        content: 'How can I make an order?',
        type: 'heading',
      },
      description: {
        content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with <b>you</b> shortly to clarify all the details.',
        type: 'text',
      },
      background: {
        type: 'color',
        color: 'dark-shade-color',
      },
    },
    {
      title: {
        content: 'What if I don’t know what plan I need?',
        type: 'heading',
      },
      description: {
        content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with <b>you</b> shortly to clarify all the details.',
        type: 'text',
      },
      background: {
        type: 'color',
        color: 'dark-shade-color?lighten=15',
      },
    },
    {
      title: {
        content: 'What payment options do you provide for clients?',
        type: 'heading',
      },
      description: {
        content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with <b>you</b> shortly to clarify all the details.',
        type: 'text',
      },
      background: {
        type: 'color',
        color: 'dark-shade-color?lighten=30',
      },
    },
    {
      title: {
        content: 'Do you have a money back guarantee?',
        type: 'heading',
      },
      description: {
        content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with <b>you</b> shortly to clarify all the details.',
        type: 'text',
      },
      background: {
        type: 'color',
        color: 'dark-shade-color?lighten=45',
      },
    },
    {
      title: {
        content: 'How can I change my plan?',
        type: 'heading',
      },
      description: {
        content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with <b>you</b> shortly to clarify all the details.',
        type: 'text',
      },
    },
    {
      title: {
        content: 'Can I get video consultation with your specialist?',
        type: 'heading',
      },
      description: {
        content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with <b>you</b> shortly to clarify all the details.',
        type: 'text',
      },
    },
  ],
  title: {
    content: 'FAQ',
    type: 'blockTitle',
  },
  description: {
    content: 'Look through the answers to the most popular questions of our customers. Didn’t find what you need? Just send us a request and we will get in touch with you shortly.',
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
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'FAQ description', type: 'checkbox'},
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
