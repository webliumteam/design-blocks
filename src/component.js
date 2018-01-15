import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = (path) => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <article className={classNames(css.item, className)}>
        {children}
        <div className={css['item__picture-wrapper']}>
          <Image
            pictureClassName={css.item__picture}
            imgClassName={css.item__image}
            bind={`awards[${index}].picture`}
            size={{'min-width: 320px': 450, 'min-width: 480px': 358}}
          />
        </div>
        {this.getModifierValue('heading') && (
          <p className={css.item__title}>
            <Text bind={`awards[${index}].title`} />
          </p>
        )}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, mods, style: css} = this.props
    const showButtonGroups = this.getModifierValue('link') || this.getModifierValue('button')

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          {this.getModifierValue('title') && (
            <h1 className={css.title}>
              <Text bind="title" />
            </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={css.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
          <Collection
            className={css['items-wrapper']}
            bind="awards"
            Item={this.collectionItem}
          />
          {this.getModifierValue('button') && (
            <div className={css['btns-group']}>
              <Button
                className={classNames(css.button, css['button--primary'], css['button--size-md'])}
                bind="cta"
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
  awards: [
    {
      id: '8130928a-e7c6-4e26-a3ca-a820fa36380e',
      title: "America's Most Admired Corporations",
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '057c27bf-4977-4b28-bf35-f4a6db60d5aa',
      title: '100 Best Companies',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Award illustration photo',
      },
    },
    {
      id: 'c8e93041-896b-4b78-b8d0-37e21a79070f',
      title: 'Best Places to Work for LGBT Equality',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Award illustration photo',
      },
    },
    {
      id: '3ea9fdda-c0e6-418e-9bfe-7bf1b06a534d',
      title: '2017 Employer Support Freedom Award',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Award illustration photo',
      },
    },
  ],
  title: 'Awards',
  subtitle:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain',
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
    textValue: 'Main button',
  },
}

Block.modifierScheme = [
  {
    id: 'button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Block description',
    defaultValue: false,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Awards title',
    defaultValue: true,
  },
]

export default Block
