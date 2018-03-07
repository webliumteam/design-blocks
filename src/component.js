import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}

        <Image
          pictureClassName={style.item__picture}
          imgClassName={style.item__image}
          bind={`awards[${index}].picture`}
          size={{'min-width: 992px': 200, 'min-width: 320px': 480}}
        />
        {_.get('heading')(modifier) && (
          <Text bind={`awards[${index}].title`} tagName="h2" className={style.item__title} />
        )}
      </div>
    )
  }

  render() {
    const {components: {Collection, Text}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {(this.getModifierValue('title') || this.getModifierValue('subtitle')) && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={style.title} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={style.subtitle} tagName="p" />
              )}
            </header>
          )}
          <Collection
            className={style['items-wrapper']}
            bind="awards"
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

Block.components = _.pick(['Collection', 'Text', 'Image'])($editor.components)

Block.defaultContent = {
  awards: [
    {
      title: {
        content: 'Most Innovative Solutions for Companies (2016)',
        type: 'heading',
      },
      picture: {
        alt: 'Award "Most Innovative Solutions for Companies"',
      },
    },
    {
      title: {
        content: 'Best Service Provider (2014)',
        type: 'heading',
      },
      picture: {
        alt: 'Award "Best Service Provider"',
      },
    },
    {
      title: {
        content: 'Comfortable and Modern Office Design (2012)',
        type: 'heading',
      },
      picture: {
        alt: 'Award "Comfortable and Modern Office Design"',
      },
    },
  ],
  title: {
    content: 'Awards',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We’re proud of our awards! Look, what we’ve already won:',
    type: 'subtitle',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Awards description', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Award title', type: 'checkbox'},
}

export default Block
