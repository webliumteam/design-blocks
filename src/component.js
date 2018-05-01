import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {}

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style} = this.props
    const hiddenBodyClass = !this.getModifierValue('item-body') && style['item--hidden-body']

    return (
      <div className={classNames(style.item, hiddenBodyClass, className)}>
        {children}
        <div className={style.item__inner}>
          <div className={style.item__text}>
            <Text tagName="h3" className={style.item__heading} bind={`collection[${index}].heading`} />
            {this.getModifierValue('item-body') && (
              <Text tagName="p" className={style.item__description} bind={`collection[${index}].text`} />
            )}
          </div>
          {this.getModifierValue('item-link') && (
            <Text tagName="a" className={style.item__link} bind={`collection[${index}].link`} />
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props
    const showButtonGroups = this.getModifierValue('button')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h2" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
          </div>
          <Collection
            className={style['items-wrapper']}
            bind="collection"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {showButtonGroups &&
            <div className={style['btns-group']}>
              {this.getModifierValue('button') && (
                <Button
                  buttonClassName={style['btns-group__button']}
                  linkClassName={style['btns-group__link']}
                  bind="mainButton"
                />
              )}
            </div>
          }
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Image', 'Button', 'Collection'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We are proud of working with each of our partners as they gave us enough support to become one of the leading companies. Here’s a short list of those who have already seen the quality of our services in practice:',
    type: 'subtitle',
  },
  collection: {
    background: {
      'nth-child': [
        ['n', {
          type: 'image',
          position: {
            type: 'contain',
            cover: '50% 50%',
          },
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          imageColor: [216, 216, 216],
        }],
      ],
    },
    items: [
      {
        heading: {
          content: 'Samsung',
          type: 'heading',
        },
        text: {
          content: 'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
          type: 'text',
        },
        link: {
          content: 'Know more',
          type: 'text',
        },
      },
      {
        heading: {
          content: 'Ford',
          type: 'heading',
        },
        text: {
          content: 'The company that has always put reliability first. We started to work with Ford in 2002, and now this is one of the partners who’ve been with us for more than 15 years! We believe that this partnership is one of the achievements we can be proud of.',
          type: 'text',
        },
        link: {
          content: 'Know more',
          type: 'text',
        },
      },
      {
        heading: {
          content: 'Medical Family',
          type: 'heading',
        },
        text: {
          content: 'Health of our team members is a top priority for us. Therefore, we work with the best clinics only, like Medical Family. We entrust our health to them and we entrust our business as well.',
          type: 'text',
        },
        link: {
          content: 'Know more',
          type: 'text',
        },
      },
      {
        heading: {
          content: 'Coffee Break Now',
          type: 'heading',
        },
        text: {
          content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
          type: 'text',
        },
        link: {
          content: 'Know more',
          type: 'text',
        },
      },
      {
        heading: {
          content: 'Samsung',
          type: 'heading',
        },
        text: {
          content: 'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
          type: 'text',
        },
        link: {
          content: 'Know more',
          type: 'text',
        },
      },
      {
        heading: {
          content: 'Ford',
          type: 'heading',
        },
        text: {
          content: 'The company that has always put reliability first. We started to work with Ford in 2002, and now this is one of the partners who’ve been with us for more than 15 years! We believe that this partnership is one of the achievements we can be proud of.',
          type: 'text',
        },
        link: {
          content: 'Know more',
          type: 'text',
        },
      },
    ],
  },
  mainButton: {
    type: 'secondary',
    textValue: 'Request a quote',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  'item-body': {defaultValue: true, label: 'Advantage description', type: 'checkbox'},
  'item-link': {defaultValue: true, label: 'Advantage button', type: 'checkbox'},
  button: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
}

export default Wireframe
