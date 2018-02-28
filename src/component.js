import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image}, style} = this.props

    const onlyLogo = !_.get('link')(modifier) && !_.get('body')(modifier)

    return (
      <article className={classNames(style.item, {[style['item--only-logo']]: onlyLogo}, className)}>
        {children}

        <div className={style.item__container}>
          {(_.get('logo')(modifier) === 'text') && (
            <Text bind={`partners[${index}].title`} className={style.item__title} tagName="h2" />
          )}
          {(_.get('logo')(modifier) === 'image') && (
            <Image
              wrapperClassName={style['item__pic-wrapper']}
              pictureClassName={style.item__pic}
              imgClassName={style.item__image}
              bind={`partners[${index}.picture`}
            />
          )}
          {_.get('body')(modifier) && (
            <Text className={style.item__desc} bind={`partners[${index}].desc`} tagName="p" />
          )}
          {_.get('link')(modifier) && (
            <div className={style['item__link-wrapper']}>
              <Button
                linkClassName={style.link}
                buttonClassName={style.button}
                bind={`partners[${index}].cta`}
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
          {this.getModifierValue('top-caption') && (
            <Text bind="top-caption" className={style['caption-decorator']} tagName="div" />
          )}
          <header className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h1" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
          </header>
          <Collection
            className={style['items-wrapper']}
            bind="partners"
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

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  partners: [
    {
      title: {
        content: 'Samsung',
        type: 'heading',
      },
      desc: {
        content: '<span style="font-weight: bold">Samsung.</span> It doesn’t need a lot of words. High-quality tech products with superior design.',
        type: 'text',
      },
      picture: {
        alt: 'Samsung logo',
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Ford',
        type: 'heading',
      },
      desc: {
        content: '<span style="font-weight: bold">Ford.</span> This is our moving force, literally! 100% reliable and credible.',
        type: 'text',
      },
      picture: {
        alt: 'Ford logo',
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Medical Family',
        type: 'heading',
      },
      desc: {
        content: '<span style="font-weight: bold">Medical Family.</span> Ensuring good health and medical care for our team for 5 years.',
        type: 'text',
      },
      picture: {
        alt: 'Medical Family logo',
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
        type: 'link',
      },
    },
    {
      title: {
        content: 'Coffee Break Now',
        type: 'heading',
      },
      desc: {
        content: '<span style="font-weight: bold">Coffee Break Now.</span> We love their delicious coffee and flavored cakes!',
        type: 'text',
      },
      picture: {
        alt: 'Coffee Break Now logo',
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
        type: 'link',
      },
    },
  ],
  title: {
    content: 'Partners',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Here are some of our trusted partners who help us deliver the best services and solutions for clients. Want to become our partner? Contact us, and we’ll discuss the details of possible cooperation.',
    type: 'subtitle',
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
  logo: {
    children: [
      {id: 'image', label: 'Image'},
      {id: 'text', label: 'Text'},
    ],
    defaultValue: 'image',
    style: 'column',
    name: 'Logo',
    type: 'radio-button-group',
  },
  subtitle: {defaultValue: false, label: 'Partner description', type: 'checkbox'},
  body: {defaultValue: true, label: 'About partner', type: 'checkbox'},
  link: {defaultValue: true, label: 'Partner link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
