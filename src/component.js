import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button, Image}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}

        <div className={style.item__container}>
          <Image
            pictureClassName={style.item__pic}
            imgClassName={style.item__image}
            bind={`partners[${index}.picture`}
          />
          <p className={style.item__desc}>
            <Text bind={`partners[${index}].desc`} tagName="span" />
          </p>
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            bind={`partners[${index}].cta`}
          />
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            <Text bind="title" className={style.title} tagName="h1" />
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          </header>
          <Collection
            className={style['items-wrapper']}
            bind="partners"
            Item={this.collectionItem}
          />
          <div className={style['btns-group']}>
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              bind="button"
            />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  partners: [
    {
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
}

export default Block
