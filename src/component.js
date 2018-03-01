import $editor from 'weblium/editor'
import css from './style.css'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}} = this.props
    return (
      <div className={classNames(css.item, className)}>
        {children}

        <Image
          pictureClassName={css.item__picture}
          imgClassName={css.item__image}
          bind={`awards[${index}].picture`}
        />
        <Text bind={`awards[${index}].title`} tagName="h2" className={css.item__title} />
      </div>
    )
  }

  render() {
    const {components: {Collection, Text}} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <header className={css.section__header}>
            <Text bind="title" className={css.title} tagName="h1" />
            <Text bind="subtitle" className={css.subtitle} tagName="p" />
          </header>
          <Collection
            className={css['items-wrapper']}
            bind="awards"
            Item={this.collectionItem}
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
        content: 'Best Customer-Tailored Approach at the World Conference (2014)',
        type: 'heading',
      },
      picture: {
        alt: 'Award "Best Customer-Tailored Approach at the World Conference"',
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

export default Block
