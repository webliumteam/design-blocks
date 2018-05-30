import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Icon}, style} = this.props

    return (
      <article className={classNames(style.item, className)}>
        {children}

        <div className={style.item__container}>
          <Text bind={`products[${index}].title`} className={style.item__title} tagName="h2" />
          {_.get('icon')(modifier) && (
            <Icon bind={`products[${index}.icon`} className={style.item__icon} />
          )}
          {_.get('price')(modifier) && (
            <div className={style.item__price}>
              <Text bind={`products[${index}.price`} className={style['item__price-numbers']} tagName="strong" />
              {_.get('price-info')(modifier) && (
                <Text bind={`products[${index}['price-info']`} className={style['item__price-info']} tagName="span" />
              )}
            </div>
          )}
          {_.get('body')(modifier) && (
            <Text className={style.item__desc} bind={`products[${index}].body`} tagName="p" />
          )}
          {_.get('product-button')(modifier) && (
            <div className={style['item__link-wrapper']}>
              <Button
                linkClassName={style.link}
                buttonClassName={style.button}
                bind={`products[${index}].cta`}
              />
            </div>
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
            className={style['items-wrapper']}
            bind="products"
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Pricing',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Here is a list of our fixed-price plans suitable for any company and business:',
    type: 'subtitle',
  },
  products: {
    background: {
      'nth-child': [
        ['n', {
          type: 'color',
          color: 'light-accent-color',
        }],
      ],
    },
    items: [
      {
        title: {
          content: 'Basic',
          type: 'heading',
        },
        price: {
          content: 'Free',
          type: 'headingLg',
        },
        'price-info': {
          content: 'For all period',
          type: 'caption',
        },
        body: {
          content: '3 available features<br>10 requests per month<br>General support',
          type: 'text',
        },
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="81.16" cy="398.87" r="10"/><path d="M461.2 92.95h-58.84a54.74 54.74 0 0 0-35 12.6V75.5a71.3 71.3 0 0 0-71.2-71.22h-66.72a10 10 0 0 0-10 10v27.46a71.3 71.3 0 0 0 71.21 71.22h56.72v101.37a123.45 123.45 0 0 0-80.61 23.17 10 10 0 1 0 11.7 16.22 104.17 104.17 0 0 1 78.05-18.23 104.51 104.51 0 0 1 74.23 52.43 10 10 0 1 0 17.5-9.7 124.52 124.52 0 0 0-80.87-60.95v-32.34h48.84c30.32 0 54.99-24.67 54.99-54.99v-26.98a10 10 0 0 0-10-10zm-113.83 0h-56.72a51.28 51.28 0 0 1-51.21-51.22V24.27h56.71a51.28 51.28 0 0 1 51.22 51.22v17.46zm103.83 36.98c0 19.3-15.7 35-35 35h-48.83v-16.98c0-19.3 15.7-35 35-35h48.83v16.98zM508.66 328.81a39.24 39.24 0 0 0-51.68-20.02l-.15.07-65.33 30.13a10 10 0 0 0 8.37 18.16l65.26-30.1a19.21 19.21 0 0 1 25.23 9.84 19.21 19.21 0 0 1-9.8 25.3l-133.7 59.04a77.5 77.5 0 0 1-65.98-1.5l-48.94-24.31a97.46 97.46 0 0 0-82.96-1.88l-.96.42-36.58-82.84 50.78-22.42a101.05 101.05 0 0 1 76.02-2.43l98.42 36.14a17.84 17.84 0 0 1 10.67 22.4 17.77 17.77 0 0 1-22.47 11.06l-76.1-25.74a10 10 0 1 0-6.42 18.94l76.11 25.74a37.51 37.51 0 0 0 12.04 2c15.7 0 30.41-9.89 35.76-25.53 6.59-19.25-3.6-40.63-22.7-47.64l-98.42-36.15a120.96 120.96 0 0 0-90.98 2.9l-51.11 22.58A25.14 25.14 0 0 0 91 283.19a25.16 25.16 0 0 0-19.36.43L6 312.4A10 10 0 0 0 0 321.55v176.18a10 10 0 0 0 14.5 8.93l127.47-64.4a25.16 25.16 0 0 0 13.12-13.9c2.01-5.18 2.26-10.74.78-16l1.19-.52a77.51 77.51 0 0 1 65.98 1.5l48.94 24.3a97.45 97.45 0 0 0 82.95 1.89l133.71-59.04a39.24 39.24 0 0 0 20.02-51.68zm-372.22 92.33a5.3 5.3 0 0 1-2.82 2.95l-.47.22L20 481.47V437.7l29.58-14.53a10 10 0 1 0-8.82-17.95L20 415.42v-87.33l59.69-26.16a5.3 5.3 0 0 1 7.03 2.73l47.04 106.53.01.03 2.58 5.83c.58 1.3.6 2.76.1 4.09z"/></svg>',
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
          textValue: 'Request a quote',
          type: 'primary',
        },
      },
      {
        title: {
          content: 'Standart',
          type: 'heading',
        },
        price: {
          content: '$50',
          type: 'headingLg',
        },
        'price-info': {
          content: 'per month',
          type: 'caption',
        },
        body: {
          content: '15 available features<br>200 requests per month<br>24/7 support',
          type: 'text',
        },
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.1 429.8H299.14a10 10 0 0 0-10 10c0 9.18-7.48 16.66-16.66 16.66h-33.24a16.68 16.68 0 0 1-16.66-16.66 10 10 0 0 0-10-10H56.47V172.83A20.86 20.86 0 0 1 77.31 152h124.72l.09.87-20.78 19.61-.2.2a95.54 95.54 0 0 0-28.17 68v44.65a10 10 0 0 0 16.7 7.43l43.76-39.48a9.99 9.99 0 0 0 5.79 4.55 129.22 129.22 0 0 0 36.17 5.29h.45c12.4 0 24.71-1.78 36.61-5.3a9.98 9.98 0 0 0 5.9-4.75l43.98 39.7a10 10 0 0 0 16.7-7.43v-44.66c0-25.68-10-49.83-28.16-67.99l-19.22-19.22.19-1.47h122.85a20.86 20.86 0 0 1 20.84 20.83v183.35a10 10 0 0 0 20 0V172.84A40.88 40.88 0 0 0 434.69 132H314.15A166.13 166.13 0 0 0 271.54 7.54l-1.76-1.94A17.08 17.08 0 0 0 257.14 0H257a17.08 17.08 0 0 0-12.69 5.8l-3.31 3.76A166.83 166.83 0 0 0 200.02 132H77.32a40.88 40.88 0 0 0-40.84 40.83V429.8H11.9a10 10 0 0 0-10 10v15.59A56.68 56.68 0 0 0 58.52 512h394.96a56.68 56.68 0 0 0 56.61-56.61v-15.6a10 10 0 0 0-10-10zM303.7 216.46l4.78-37.87 8.25 8.24a75.66 75.66 0 0 1 22.3 53.86v22.16l-36.97-33.36 1.65-13.03zM256.03 22.77l1.15-1.3a146.17 146.17 0 0 1 36.33 116.1l-2.3 18.24v.02l-9.63 76.34-1.03 8.12a109.17 109.17 0 0 1-24.7 2.83h-.38c-8.14-.03-16.25-.97-24.17-2.8l-7.88-76.04-.89-8.55-2.2-21.21a146.75 146.75 0 0 1 35.7-111.75zm-45.98 206.62l-37.07 33.45v-22.16c0-20.3 7.89-39.38 22.2-53.75l9.54-9 5.33 51.46zM453.48 492H58.52a36.66 36.66 0 0 1-36.61-36.61v-5.6h182.07a36.73 36.73 0 0 0 35.27 26.67h33.23a36.73 36.73 0 0 0 35.28-26.66H490.1v5.59A36.65 36.65 0 0 1 453.48 492z"/><path d="M424.85 174.32h-50.34a10 10 0 0 0 0 20h40.34v193.74H100.51V194.32h31.71a10 10 0 0 0 0-20H90.51a10 10 0 0 0-10 10v213.74a10 10 0 0 0 10 10h334.34a10 10 0 0 0 10-10V184.32a10 10 0 0 0-10-10z"/><circle cx="256" cy="105.57" r="10"/><circle cx="465.53" cy="399.77" r="10"/><path d="M230 277.65a10 10 0 0 0-10 10v40.7a10 10 0 0 0 20 0v-40.7a10 10 0 0 0-10-10zM280.8 275.33a10 10 0 0 0-10 10v60.03a10 10 0 0 0 20 0v-60.03a10 10 0 0 0-10-10z"/></svg>',
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
          textValue: 'Request a quote',
          type: 'primary',
        },
      },
      {
        title: {
          content: 'Pro',
          type: 'heading',
        },
        price: {
          content: '$100',
          type: 'headingLg',
        },
        'price-info': {
          content: 'per month',
          type: 'caption',
        },
        body: {
          content: '30 available features<br>Unlimited requests<br>Personal consultations',
          type: 'text',
        },
        icon: {
          svg:
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M506.13 221.96l-87.2-98.66a10 10 0 0 0-7.49-3.38H100.56a10 10 0 0 0-7.5 3.38l-87.2 98.66a10 10 0 0 0 .96 14.19l.06.07 241.64 272.42a10 10 0 0 0 14.96 0l241.64-272.42.06-.07a10 10 0 0 0 .95-14.19zm-112.42-82.04l-44.44 71.64-71.22-71.64h115.66zm-65.66 78.67h-144.1L256 146.1l72.05 72.49zm-94.1-78.67l-71.22 71.64-44.44-71.64h115.66zM99 146.77l44.55 71.81h-108L99 146.79zm-63.3 91.81H153.9l81.63 225.27L35.71 238.58zm241.15 224.85l57.04-154.37a10 10 0 0 0-18.76-6.94L256.09 461.9 175.16 238.6h301.13L276.85 463.43zm91.6-244.84L413 146.77l63.46 71.81h-108zM256 0a10 10 0 0 0-10 10v51.51a10 10 0 0 0 20 0V10a10 10 0 0 0-10-10zM347.06 39.52a10 10 0 0 0-14.14 0l-36.43 36.43a10 10 0 0 0 14.15 14.14l36.42-36.42a10 10 0 0 0 0-14.15zM213.56 75.95l-36.43-36.43A10 10 0 0 0 163 53.67l36.43 36.42a9.97 9.97 0 0 0 14.14 0 10 10 0 0 0 0-14.14z"/><circle cx="337.43" cy="268.36" r="10"/></svg>',
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
          textValue: 'Request a quote',
          type: 'primary',
        },
      },
    ],
  },
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
  'top-caption': {
    content: 'vitae sapien ut libero',
    type: 'text',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Pricing description', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Product icon', type: 'checkbox'},
  price: {defaultValue: true, label: 'Product price', type: 'checkbox'},
  'price-info': {defaultValue: true, label: 'Price additional info', type: 'checkbox'},
  body: {defaultValue: true, label: 'Product details', type: 'checkbox'},
  'product-button': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  button: {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
}

export default Block
