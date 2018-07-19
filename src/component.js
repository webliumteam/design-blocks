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
          wrapperClassName={classNames(style['item__picture-wrapper'], this.ui('ui-picture-wrapper'))}
          pictureClassName={classNames(style.item__picture, this.ui('ui-picture'))}
          imgClassName={classNames(style.item__image, this.ui('ui-picture__image'))}
          bind={`awards[${index}].picture`}
          size={{'min-width: 992px': 200, 'min-width: 320px': 480}}
        />
        {_.get('heading')(modifier) && (
          <Text bind={`awards[${index}].title`} tagName="h2" className={classNames(style.item__title, this.ui('ui-heading'), this.ui('ui-text-center'))} />
        )}
      </div>
    )
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Collection, Text}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {(this.getModifierValue('title') || this.getModifierValue('subtitle')) && (
            <header className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'))} tagName="h1" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'))} tagName="p" />
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
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox', sortOrder: 20},
  heading: {defaultValue: true, label: 'Award name', type: 'checkbox', sortOrder: 30},
}

export default Block
