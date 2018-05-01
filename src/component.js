import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Image, Text, Button}, style} = this.props

    return (
      <div className={classNames(style.item, className)}>
        {children}
        {this.getModifierValue('item-image') && (
          <Image
            wrapperClassName={style['item__pic-wrapper']}
            pictureClassName={style.item__pic}
            imgClassName={style.item__img}
            bind={`collection[${index}].image`}
            size={{
              'min-width: 320px': 120,
            }}
            resize={{disable: true}}
          />
        )}
        <div className={style.item__text}>
          <Text tagName="h3" className={style.item__heading} bind={`collection[${index}].title`} />
          {this.getModifierValue('item-body') && (
            <Text tagName="p" className={style.item__description} bind={`collection[${index}].desc`} />
          )}
        </div>
        {this.getModifierValue('item-button') && (
          <Button
            linkClassName={style.link}
            buttonClassName={style.button}
            className={style.item__button}
            bind={`collection[${index}].cta`}
          />
        )}
      </div>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style, $block} = this.props

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
          {this.getModifierValue('cta') && (
            <div className={style['btns-group']}>
              <Button
                linkClassName={style.link}
                className={style.button}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Image', 'Collection', 'Button'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Services We Provide',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We deliver all kind of services that support small and micro businesses. Here are some of them:',
    type: 'subtitle',
  },
  collection: {
    items: [
      {
        image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Service illustration photo',
        },
        title: {
          type: 'heading',
          content: 'Service 1',
        },
        desc: {
          type: 'text',
          content: 'Multipurpose assistance for online stores and offline retail businesses.',
        },
        cta: {
          textValue: 'Learn more',
          type: 'primary',
        },
      },
      {
        image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Service illustration photo',
        },
        title: {
          type: 'heading',
          content: 'Service 2',
        },
        desc: {
          type: 'text',
          content: 'Developing marketing and business strategy to help company grow fast.',
        },
        cta: {
          textValue: 'Learn more',
          type: 'primary',
        },
      },
      {
        image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Service illustration photo',
        },
        title: {
          type: 'heading',
          content: 'Service 3',
        },
        desc: {
          type: 'text',
          content: 'Building brand awareness for small businesses to increase potential reach.',
        },
        cta: {
          textValue: 'Learn more',
          type: 'primary',
        },
      },
      {
        image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
          alt: 'Service illustration photo',
        },
        title: {
          type: 'heading',
          content: 'Service 4',
        },
        desc: {
          type: 'text',
          content: 'Aftersales support in marketing, sales, and staff training for enhanced performance.',
        },
        cta: {
          textValue: 'Learn more',
          type: 'primary',
        },
      },
    ],
  },
  cta: {
    textValue: 'All services',
    type: 'secondary',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Services description', type: 'checkbox'},
  'item-image': {defaultValue: true, label: 'Service Icon', type: 'checkbox'},
  'item-body': {defaultValue: true, label: 'Service main text', type: 'checkbox'},
  'item-button': {defaultValue: true, label: 'Item Button', type: 'checkbox'},
  cta: {defaultValue: false, label: 'Primary button', type: 'hidden'},
}

export default Wireframe
