import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, modifier}) => {
    const {components: {Text, Image, Button}, style} = this.props
    const showContent = _.get('body')(modifier) || _.get('link')(modifier)
    const showBody = _.get('body')(modifier)
    const showLink = _.get('link')(modifier)
    const showHeading = _.get('heading')(modifier)
    return (
      <article className={classNames(
        style.item,
        {[style['item--body-none']]: (!showBody && showLink)},
        {[style['item--logo-and-name']]: (!showBody && !showLink && showHeading)},
        {[style['item--logo']]: (!showBody && !showLink && !showHeading)},
        )}
      >
        {children}

        <Image
          bind={`partners[${index}].picture`}
          pictureClassName={style.item__picture}
          imgClassName={style.item__image}
          size={null}
        />
        {showHeading && (
          <h2 className={style.item__title}>
            <Text bind={`partners[${index}].title`} />
          </h2>
        )}
        {showContent && (
          <div className={style.item__content}>
            {_.get('body')(modifier) && (
              <p className={style.item__desc}>
                <Text bind={`partners[${index}].desc`} />
              </p>
            )}
            {_.get('link')(modifier) && (
              <Button
                className={style.item__link}
                bind={`partners[${index}].button`}
              />
            )}
          </div>
        )}
      </article>
    )
  }


  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    const showHeading = this.getModifierValue('heading')
    const showBody = this.getModifierValue('body')
    const onlyLogo = (!this.getModifierValue('body') && !this.getModifierValue('link') && !this.getModifierValue('heading'))
    return (
      <section className={classNames(
        style.section,
        {[style['section--heading-none']]: !showHeading},
        {[style['section--body-none']]: !showBody},
        {[style['section--logo']]: onlyLogo},
        )}
      >
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
            {this.getModifierValue('subtitle') && (
              <p className={style.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
          <Collection
            className={classNames(style['items-wrapper'], {[style['items-wrapper--column']]: !showBody})}
            TagName="div"
            bind="partners"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          <div className={classNames(style['btns-group'], {[style['btns-group--offset-sm']]: onlyLogo})}>
            <Button buttonClassName={style.button} bind="button" />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'Collection', 'Image'])($editor.components)

Block.defaultContent = {
  title: 'Partners',
  subtitle: 'Over the history of our company, we cooperated with many well-known brands. We are proud of working with each of our partners as they gave us enough support to become one of the leading companies. Here’s a short list of those who have already seen the quality of our services in practice:',
  partners: [
    {
      picture: {
        resourceRef: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Samsung logo',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: 'Samsung',
      desc: 'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Ford logo',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: 'Ford ',
      desc: 'The company that has always put reliability first. We started to work with Ford in 2002, and now this is one of the partners who’ve been with us for more than 15 years! We believe that this partnership is one of the achievements we can be proud of.',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Medical Family logo',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: 'Medical Family',
      desc: 'Health of our team members is a top priority for us. Therefore, we work with the best clinics only, like Medical Family. We entrust our health to them and we entrust our business as well.',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      picture: {
        src: 'https://weblium-prod.storage.googleapis.com/res/weblium/5a7074b3f73f3b0026754830.png',
        alt: 'Coffee Break Now',
        size: {'min-width: 320px': 90, 'min-width: 992px': 130},
      },
      title: 'Coffee Break Now',
      desc: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, starting workshops and seminars, and up to everyday meal for our team members.',
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
        textValue: 'Partner’s website',
        type: 'link',
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
  subtitle: {defaultValue: false, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: true, label: 'Partner link', type: 'checkbox'},
}

export default Block
