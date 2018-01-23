import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, showHeading}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={style['item__picture-wrapper']}>
          <Image
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`awards[${index}].picture`}
            size={{'min-width: 320px': 450, 'min-width: 480px': 358}}
          />
        </div>
        {showHeading && (
          <p className={style.item__title}>
            <Text bind={`awards[${index}].title`} />
          </p>
        )}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {this.getModifierValue('title') && (
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="awards"
            Item={this.collectionItem}
            itemProps={{
              showHeading: this.getModifierValue('heading'),
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={classNames(
                  style.button,
                  style['button--primary'],
                  style['button--size-md'],
                )}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon'])($editor.components)

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
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
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
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default Block
