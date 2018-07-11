import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.article, className)}>
        {children}

        {_.get('heading')(modifier) && (
          <Text bind={`contacts[${index}].title`} className={classNames(style.article__title, 'heading')} tagName="h2" />
        )}
        {_.get('image')(modifier) && (
          <Image
            wrapperClassName={classNames(style['article__picture-wrapper'], 'picture-wrapper')}
            pictureClassName={classNames(style.article__picture, 'picture')}
            imgClassName={classNames(style.article__image, 'picture__image')}
            bind={`contacts[${index}].picture`}
          />
        )}
        <div className={style.article__text}>
          <Text bind={`contacts[${index}].address`} tagName="p" className={classNames(style.article__text, 'body', 'text-center')} />
          {_.get('phone')(modifier) && (
            <Text bind={`contacts[${index}].phone`} tagName="p" className={classNames(style.article__text, 'body', 'text-center')} />
          )}
          {_.get('email')(modifier) && (
            <Text bind={`contacts[${index}].email`} tagName="p" className={classNames(style.article__text, 'body', 'text-center')} />
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
          <header className={style.section__header}>
            {this.getModifierValue('top-caption') && (
              <Text bind="top-caption" className={style['caption-decorator']} tagName="div" />
            )}
            <Text bind="title" className={classNames(style.title, 'title', 'text-center')} tagName="h1" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={classNames(style.subtitle, 'subtitle', 'text-center')} tagName="p" />
            )}
          </header>
          <Collection
            className={style['articles-wrapper']}
            bind="contacts"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {(this.getModifierValue('button') ||
            this.getModifierValue('button-secondary')) && (
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div className="btns-group__inner">
                {this.getModifierValue('button') && (
                  <Button
                    linkClassName={style.link}
                    className={classNames(style.button, 'butttton')}
                    bind="button-1"
                  />
                )}
                {this.getModifierValue('button-secondary') && (
                  <Button
                    linkClassName={style.link}
                    className={classNames(style.button, 'butttton')}
                    bind="button-2"
                  />
                )}
              </div>
            </div>
          )}
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
  'top-caption': {
    content: 'eget est egestas',
    type: 'text',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 10},
  heading: {defaultValue: true, label: 'Location heading', type: 'checkbox', sortOrder: 20},
  image: {defaultValue: true, label: 'Location photo', type: 'checkbox', sortOrder: 30},
  phone: {defaultValue: true, label: 'Phone', type: 'checkbox', sortOrder: 40},
  email: {defaultValue: true, label: 'Email', type: 'checkbox', sortOrder: 50},
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 60},
  'button-secondary': {defaultValue: false, label: 'Additional button (link) ', type: 'checkbox', sortOrder: 70},
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden'},
}

export default Block
