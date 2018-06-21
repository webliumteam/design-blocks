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

  collectionItem = ({index, children, className}) => {
    const {
      components: {Text, Button, Image},
      style,
    } = this.props
    const categoryShow =
      this.getModifierValue('item_category') || this.getModifierValue('item_date')

    return (
      <article className={classNames(style.article, className)}>
        {children}
        {this.getModifierValue('item_image') && (
          <Image
            wrapperClassName={style['article__picture-wrapper']}
            pictureClassName={style.article__picture}
            imgClassName={style.article__image}
            bind={`collection[${index}].item_image`}
            size={{
              'min-width: 320px': 230,
              'min-width: 992px': 240,
            }}
          />
        )}
        <div className={style.article__wrapper}>
          <Text
            tagName="h2"
            className={style.article__title}
            bind={`collection[${index}].item_heading`}
          />
          {categoryShow && (
            <div className={classNames(style['article__category-wrapper'], className)}>
              {this.getModifierValue('item_date') && (
                <Text
                  tagName="p"
                  className={style.article__date}
                  bind={`collection[${index}].item_date`}
                />
              )}
              {this.getModifierValue('item_category') && (
                <Text
                  tagName="p"
                  className={style.article__category}
                  bind={`collection[${index}].item_category`}
                />
              )}
            </div>
          )}
          {this.getModifierValue('item_body') && (
            <Text
              tagName="p"
              className={style.article__text}
              bind={`collection[${index}].item_body`}
            />
          )}
          {this.getModifierValue('item_button') && (
            <Button
              className={style.article__link}
              buttonClassName={style.button}
              linkClassName={style.link}
              bind={`collection[${index}].item_button`}
            />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {
      components: {Collection, Text, Button},
      style,
    } = this.props
    const arrange = this.getModifierValue('arrange-elements')
    const withoutImage = !this.getModifierValue('item_image') ? style['section--without-image'] : ''
    return (
      <section
        className={classNames(style.section, arrange && style['section--reverse'], withoutImage)}
      >
        <div className={style.section__inner}>
          <Text tagName="h1" className={classNames(style.title, 'title')} bind="title" />
          <Collection
            className={style['articles-wrapper']}
            bind="collection"
            Item={this.collectionItem}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button className={style.button} linkClassName={style.link} bind="button" />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image', 'Icon'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Blog',
    type: 'blockTitle',
  },
  collection: {
    background: {
      id: 'monochrome',
      colors: {
        background: {
          type: 'color',
          color: '#d8d8d8',
        },
      },
      preset: [['n', {type: 'color', color: '#d8d8d8'}]],
    },
    items: [
      {
        item_heading: {
          content: 'Alice was beginning to get very tired of sitting by her sister on the bank',
          type: 'heading',
        },
        item_body: {
          content:
            'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up',
          type: 'text',
        },
        item_category: {
          content: 'Category1',
          type: 'caption',
        },
        item_date: {
          content: 'September 16, 2017',
          type: 'caption',
        },
        item_image: {
          src: 'https://res.weblium.site/res/weblium/5b2a1a1559d3e4002549c515',
          alt: 'Article illustration photo',
        },
        item_button: {
          textValue: 'Read more',
          type: 'link',
        },
      },
      {
        item_heading: {
          content:
            'Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with',
          type: 'heading',
        },
        item_body: {
          content:
            'The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well…',
          type: 'text',
        },
        item_category: {
          content: 'Category3 ',
          type: 'caption',
        },
        item_date: {
          content: 'September 12, 2017',
          type: 'caption',
        },
        item_image: {
          src: 'https://res.weblium.site/res/weblium/5b2a1a1559d3e4002549c515',
          alt: 'Article illustration photo',
        },
        item_button: {
          textValue: 'Read more',
          type: 'link',
        },
      },
      {
        item_heading: {
          content: 'Down a large rabbit-hole under the hedge?',
          type: 'heading',
        },
        item_body: {
          content:
            'But when the Rabbit actually took a watch out of its waistcoat- pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed she ran across the field after it, and fortunately was…',
          type: 'text',
        },
        item_category: {
          content: 'Category2',
          type: 'caption',
        },
        item_date: {
          content: 'September 12, 2017',
          type: 'caption',
        },
        item_image: {
          src: 'https://res.weblium.site/res/weblium/5b2a1a1559d3e4002549c515',
          alt: 'Article illustration photo',
        },
        item_button: {
          textValue: 'Learn more',
          type: 'link',
        },
      },
    ],
  },
  button: {
    textValue: 'Learn more',
    type: 'secondary',
  },
}

Block.modifierScheme = {
  'arrange-elements': {
    defaultValue: false,
    name: 'Arrange elements',
    type: 'swap',
  },
  item_image: {defaultValue: true, label: 'Image', type: 'checkbox'},
  item_date: {defaultValue: false, label: 'Date of publishing', type: 'checkbox'},
  item_category: {defaultValue: true, label: 'Category of publishing', type: 'checkbox'},
  item_body: {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  item_button: {defaultValue: true, label: 'Link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
}

export default Block
