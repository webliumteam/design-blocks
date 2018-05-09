import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, modifier, className}) => {
    const {components: {Text, Button, Logo}, style} = this.props
    const showContent = _.get('body')(modifier) || _.get('link')(modifier)
    const showBody = _.get('body')(modifier)
    const showLink = _.get('link')(modifier)
    const showHeading = _.get('heading')(modifier)
    const itemContent = [
      showHeading && (
        <Text tagName="h2" className={style.item__title} bind={`partners[${index}].title`} />
      ),
      showContent && (
        <div className={style.item__content}>
          {_.get('body')(modifier) && (
            <Text tagName="p" className={style.item__desc} bind={`partners[${index}].desc`} />
          )}
          {_.get('link')(modifier) && (
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              className={style.item__link}
              bind={`partners[${index}].button`}
            />
          )}
        </div>
      ),
    ]

    return (
      <article className={classNames(
        style.item,
        {[style['item--body-none']]: !showBody && (showBody || showLink || showHeading)},
        {[style['item--heading-none']]: !showHeading},
        {[style['item--two-elements']]: (!showBody && !showLink && showHeading) || (!showBody && showLink && !showHeading)},
        {[style['item--logo']]: (!showBody && !showLink && !showHeading)},
        className,
        )}
      >
        {children}
        <Logo
          bind={`partners[${index}].logo`}
          className={style.logo}
          textClassName={style.logo__title}
          imageClassName={style.logo__image}
          maxWidth={this.getOptionValue('logo-max-width')}
          maxHeight={this.getOptionValue('logo-max-height')}
        />
        {this.getOptionValue('content-wrapper') ? <div className={style['item__content-wrapper']}>{itemContent}</div> : itemContent}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style, $block} = this.props
    const showBody = this.getModifierValue('body')
    const onlyLogo = (!this.getModifierValue('body') && !this.getModifierValue('link') && !this.getModifierValue('heading'))
    const centerItems = !this.getModifierValue('body') && (this.getModifierValue('link') || this.getModifierValue('heading'))
    const blockHeader = this.getModifierValue('title') || this.getModifierValue('subtitle')
    return (
      <section className={classNames(style.section)}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {blockHeader && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text tagName="h1" className={style.title} bind="title" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text tagName="p" className={style.subtitle} bind="subtitle" />
              )}
            </header>
          )}
          <Collection
            className={classNames(style['items-wrapper'], {[style['items-wrapper--column']]: !showBody, [style['items-wrapper--center']]: centerItems || onlyLogo, [style['items-wrapper--only-logo']]: onlyLogo})}
            TagName="div"
            bind="partners"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={classNames(style['btns-group'], {[style['btns-group--offset-sm']]: onlyLogo})}>
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

Block.components = _.pick(['Text', 'Button', 'Collection', 'Logo', 'Icon'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Over the history of our company, we cooperated with many well-known brands. We are proud of working with each of our partners as they gave us enough support to become one of the leading companies. Here’s a short list of those who have already seen the quality of our services in practice:',
    type: 'subtitle',
  },
  partners: [
    {
      logo: {
        image: {
          resourceRef: '',
          width: 130,
          height: 62,
        },
      },
      title: {
        content: 'Samsung',
        type: 'heading',
      },
      desc: {
        content: 'Back in 1995, we started cooperation with this brand. Samsung became our main supplier of high-quality tech products. Today, Samsung is our main partner who supports each initiative and actively participates in company development.',
        type: 'text',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: '',
          width: 130,
          height: 62,
        },
      },
      title: {
        content: 'Ford ',
        type: 'heading',
      },
      desc: {
        content: 'The company that has always put reliability first. We started to work with Ford in 2002, and now this is one of the partners who’ve been with us for more than 15 years! We believe that this partnership is one of the achievements we can be proud of.',
        type: 'text',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: '',
          width: 130,
          height: 62,
        },
      },
      title: {
        content: 'Medical Family',
        type: 'heading',
      },
      desc: {
        content: 'Health of our team members is a top priority for us. Therefore, we work with the best clinics only, like Medical Family. We entrust our health to them and we entrust our business as well.',
        type: 'text',
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
        textValue: 'Partner’s website',
        type: 'link',
      },
    },
    {
      logo: {
        image: {
          resourceRef: '',
          width: 130,
          height: 62,
        },
      },
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: 'Coffee and cakes won’t sell themselves. Whenever we are hungry or just need to restore energy, Coffee Break Now saves us. Also, they cater all our events, from workshops and seminars to everyday meals for our team members.',
        type: 'text',
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
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Partner description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Partner title', type: 'checkbox'},
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: true, label: 'Link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
