import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}

        <div className={style.item__inner}>
          <Image
            pictureClassName={style.item__pic}
            imgClassName={style.item__img}
            bind={`testimonials[${index}].picture`}
          />
          <div className={style.item__content}>
            <Text bind={`testimonials[${index}].description`} className={style.item__desc} tagName="p" />
            <Text bind={`testimonials[${index}].date`} className={style.item__time} tagName="time" />
            <Text bind={`testimonials[${index}].title`} className={style.item__title} tagName="h2" />
            <Text bind={`testimonials[${index}].position`} className={style.item__position} tagName="p" />
          </div>
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h1" />
          <p >
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          </p>
          <Collection
            className={style['items-wrapper']}
            bind="testimonials"
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
  testimonials: [
    {
      title: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum! Their efficient solutions helped us to improve a plenty of business processes. Now our clients receive their products faster so that they are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      position: {
        content: 'Marketing Director at Junk Food Co.',
        type: 'caption',
      },
      picture: {
        alt: 'Amanda Peterson review',
      },
    },
    {
      title: {
        content: 'Jeff Gordons',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“Our company started to work with Quantum 4 years ago. We had only positive experience and implemented a lot of projects together. We’re totally satisfied and now we know that we can rely on Quantum experts any time.”',
        type: 'text',
      },
      position: {
        content: 'CEO at Clear Thinking',
        type: 'caption',
      },
      picture: {
        alt: 'Jeff Gordons review',
      },
    },
    {
      title: {
        content: 'Elizabeth Smith',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      description: {
        content: '“Quantum is a reliable company that applies high technology and creates exclusive programs for their clients. We highly appreciate this approach and we will continue our cooperation.”',
        type: 'text',
      },
      position: {
        content: 'Director of Media at Legal Company',
        type: 'caption',
      },
      picture: {
        alt: 'Elizabeth Smith review',
      },
    },
  ],
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Find out why so many companies prefer us over others!',
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
