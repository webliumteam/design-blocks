import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children}) => {
    const {components: {Text, Image, Button}, style} = this.props
    return (
      <article className={style.item}>
        {children}

        <Image
          bind={`partners[${index}].picture`}
          pictureClassName={style.item__picture}
          imgClassName={style.item__image}
        />
        <h2 className={style.item__title}>
          <Text bind={`partners[${index}].title`} />
        </h2>
        <div className={style.item__content}>
          <p className={style.item__desc}>
            <Text bind={`partners[${index}].desc`} />
          </p>
          <Button bind={`partners[${index}].button`} />
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
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
            <p className={style.subtitle}>
              <Text bind="subtitle" />
            </p>
          </header>
          <Collection
            className={style['items-wrapper']}
            TagName="div"
            bind="partners"
            Item={this.collectionItem}
          />
          <div className={style['btns-group']}>
            <Button bind="button" />
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
      id: 'partner1',
      picture: {
        alt: 'Samsung logo',
        size: '{"min-width: 90px": "480", min-width: 992px": "130"}',
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
      id: 'partner2',
      picture: {
        alt: 'Ford logo',
        size: '{"min-width: 90px": "480", min-width: 992px": "130"}',
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
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
}

export default Block
