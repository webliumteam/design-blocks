import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    individualsOpened: null,
    companiesOpened: null,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  toggleItemOpening = (collectionName, index) => () => {
    this.setState({[`${collectionName}Opened`]: index === this.state[`${collectionName}Opened`] ? null : index})
  }

  createCollectionItem = collectionName => ({index, children, className, openedItem}) => {
    const {components: {Text}, style} = this.props
    const controlIcons = !this.getOptionValue('different-icons') ?
      (<div className={style.item__icon} dangerouslySetInnerHTML={{__html: this.getOptionValue('open-icon')}} />) :
      (<div className={style.item__icon} dangerouslySetInnerHTML={{__html: this.state[`${collectionName}Opened`] === index ? this.getOptionValue('open-icon') : this.getOptionValue('close-icon')}} />)

    return (
      <div
        className={classNames(style.item, openedItem === index && style['item--active'], className)}
      >
        {children}
        <button type="button" className={style.item__button} onClick={this.toggleItemOpening(collectionName, index)}>
          <Text tagName="h3" className={style.item__title} bind={`${collectionName}.faq[${index}].title`} />
          {this.getOptionValue('toogle-item-controls') && controlIcons}
        </button>
        <Text tagName="div" className={style.item__content} bind={`${collectionName}.faq[${index}].description`} />
      </div>
    )
  }

  individualCollectionItem = this.createCollectionItem('individuals')

  companyCollectionItem = this.createCollectionItem('companies')

  render() {
    const {components: {Collection, Text, Button, Icon}, style} = this.props
    const {individualsOpened, companiesOpened} = this.state

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text tagName="h1" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={style.subtitle} bind="description" />
          )}
          <div className={style['collections-wrapper']}>
            <div className={style.items__wrapper}>
              {this.getModifierValue('heading') && <Text tagName="h2" className={style.items__title} bind="individuals.heading" />}
              <Collection
                className={style.items}
                bind="individuals.faq"
                itemProps={{openedItem: individualsOpened}}
                Item={this.individualCollectionItem}
              />
            </div>
            <div className={style.items__wrapper}>
              {this.getModifierValue('heading') && <Text tagName="h2" className={style.items__title} bind="companies.heading" />}
              <Collection
                className={style.items}
                bind="companies.faq"
                itemProps={{openedItem: companiesOpened}}
                Item={this.companyCollectionItem}
              />
            </div>
          </div>
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={style.button}
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
  title: {
    content: 'FAQ',
    type: 'blockTitle',
  },
  description: {
    content: 'Here are the most frequently asked questions by individuals and companies',
    type: 'subtitle',
  },
  individuals: {
    heading: {
      content: 'Individuals',
      type: 'heading',
    },
    faq: [
      {
        title: {
          content: 'What materials do you use for your products?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'What shipping do you provide?',
          type: 'subtitle',
        },
        description: {
          content: 'We ship orders by air and sea (UPS, FedEx). UPS and FedEx offers value-added services such as pickup and delivery options, delivery notification, and special handling options. We deliver order to the US and abroad, including Europe, Asia, Australia, and Africa. You can also order standard shipping within 4-5 business days.',
          type: 'text',
        },
      },
      {
        title: {
          content: 'How can I make an order?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'What length of warranty do you offer?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'How can I return the goods?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
    ],
  },
  companies: {
    heading: {
      content: 'Companies',
      type: 'heading',
    },
    faq: [
      {
        title: {
          content: 'What payment methods do you offer?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Do you have any plans for big companies?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'When will I get profits after applying your goods?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Can I get exclusive offers for my company?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
      {
        title: {
          content: 'Will my company have aftersales service?',
          type: 'subtitle',
        },
        description: {
          content: 'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
          type: 'text',
        },
      },
    ],
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
  subtitle: {defaultValue: true, label: 'Description of FAQ', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Type/Category of questions', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Block
