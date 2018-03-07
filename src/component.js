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

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style: css} = this.props

    return (
      <article className={classNames(css.item, className)}>
        {children}
        <Image pictureClassName={css.item__picture} bind={`items[${index}].image`} />
        <Text tagName="h2" className={css.item__heading} bind={`items[${index}].heading`} />
        {this.getModifierValue('item-body') && (
          <Text tagName="p" className={css.item__text} bind={`items[${index}].text`} />
        )}
      </article>
    )
  }

  render() {
    const {components: {Text, Collection, Button}, style: css, $block} = this.props
    const showButtonGroups = this.getModifierValue('primary-button') || this.getModifierValue('secondary-button')

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          {this.getModifierValue('title') && (
            <Text tagName="h1" className={css.title} bind="title" />
          )}
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={css.subtitle} bind="subtitle" />
          )}
          <Collection
            className={css['items-wrapper']}
            bind="items"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'Collection'])($editor.components)

Block.defaultContent = {
  title: {
    type: 'blockTitle',
    content: 'Why Choose Us',
  },
  subtitle: {
    type: 'subtitle',
    content: 'Still have some hesitations whether cooperation with us is worth the trouble? Check the reasons why you should choose us among other companies!',
  },
  items: [
    {
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      heading: {
        type: 'heading',
        content: '',
      },
      text: {
        type: 'text',
        content: '',
      },
    },
    {
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      heading: {
        type: 'heading',
        content: '',
      },
      text: {
        type: 'text',
        content: '',
      },
    },
    {
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture about the company',
      },
      heading: {
        type: 'heading',
        content: '',
      },
      text: {
        type: 'text',
        content: '',
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
    textValue: 'Contact us',
  },
  link: {
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
    textValue: 'More about us',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  'item-body': {defaultValue: true, label: 'Advantage description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Contact us button', type: 'checkbox'},
}

export default Block
