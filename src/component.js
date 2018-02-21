import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}

        <Text bind={`contacts[${index}].title`} className={style.article__title} tagName="h2" />
        <Image
          pictureClassName={style.article__picture}
          imgClassName={style.article__image}
          bind={`contacts[${index}].picture`}
        />
        <div className={style.article__text}>
          <Text bind={`contacts[${index}].address`} tagName="p" />
          <Text bind={`contacts[${index}].phone`} tagName="p" />
          <Text bind={`contacts[${index}].email`} tagName="p" />
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
            className={style['articles-wrapper']}
            bind="contacts"
            Item={this.collectionItem}
          />
          <div className={style['btns-group']}>
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              bind="button-1"
            />
            <Button
              linkClassName={style.link}
              buttonClassName={style.button}
              bind="button-2"
            />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  contacts: [
    {
      title: {
        content: 'Head office in London',
        type: 'heading',
      },
      address: {
        content: 'Level 17, Dashwood House<br>London EC2M 1QS ',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Vienna office ',
        type: 'heading',
      },
      address: {
        content: 'Kaerntner Ring 5-7<br>1010 Vienna',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
      },
    },
    {
      title: {
        content: 'Amsterdam office',
        type: 'heading',
      },
      address: {
        content: 'Keizersgracht 62-64<br>1015 CS Amsterdam',
        type: 'text',
      },
      phone: {
        content: '<a href="tel:2221111111">(222) 111 11 11</a>',
        type: 'text',
      },
      email: {
        content: '<a href="mailto:mywebsite@a.weblium.com">mywebsite@a.weblium.com</a>',
        type: 'text',
      },
      picture: {
        alt: 'Location illustration photo',
      },
    },
  ],
  title: {
    content: 'Contacts',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Feel free to contact us for any business, media, or personal inquiries:',
    type: 'subtitle',
  },
  'button-1': {
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
  'button-2': {
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
