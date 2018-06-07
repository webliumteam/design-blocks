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

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  render() {
    const {components: {Text, Image}, style} = this.props
    const columnLayout = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text')
    )

    const onlyImage = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text')
    )

    const articleHeader = this.getModifierValue('category') ||
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle')

    const authorText = this.getModifierValue('name') ||
      this.getModifierValue('date') ||
      this.getModifierValue('divider') ||
      this.getModifierValue('time')

    const authorInfo = this.getModifierValue('avatar') || authorText

    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 46
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 100

    const arrange = this.getModifierValue('arrange-elements')

    return (
      <section className={classNames(style.section, {[style['section--column']]: columnLayout}, arrange && style['section--reverse'])}>
        <div className={style.section__inner}>
          <article className={style.article}>
            {this.getModifierValue('article-picture') && (
              <Image
                wrapperClassName={style['article__picture-wrapper']}
                pictureClassName={style.article__picture}
                imgClassName={style.article__image}
                bind="picture"
                size={this.getImageSize(columnLayout)}
                resize={{min: getMinResize, max: getMaxResize, disable: this.getOptionValue('disable-resizer')}}
              />
            )}
            {!onlyImage && [
              articleHeader && (
                <header className={style.article__header}>
                  {this.getModifierValue('category') &&
                    <Text tagName="p" className={style.article__category} bind="category" />
                  }
                  {this.getModifierValue('title') &&
                    <Text tagName="h1" className={style.article__title} bind="title" />
                  }
                  {this.getModifierValue('subtitle') && (
                    <Text tagName="p" className={style.article__subtitle} bind="subtitle" />
                  )}
                  {authorInfo && (
                    <div className={style.author}>
                      {this.getModifierValue('avatar') && (
                        <Image
                          wrapperClassName={style['author__picture-wrapper']}
                          pictureClassName={style.author__picture}
                          imgClassName={style.author__image}
                          bind="author_picture"
                          size={this.getImageSize(columnLayout)}
                          resize={{disable: true}}
                        />
                      )}
                      {authorText && (
                        <div className={style.author__info}>
                          {this.getModifierValue('name') && (
                            <Text tagName="span" className={style.author__name} bind="author_name" />
                          )}
                          {this.getModifierValue('date') && (
                            <Text tagName="time" className={classNames(style.author__date, this.getModifierValue('divider') && style['author__date--decorated'])} bind="author_date" />
                          )}
                          {this.getModifierValue('time') && (
                            <Text tagName="span" className={style.author__time} />
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </header>),
              this.getModifierValue('body') && (
                <div className={style.article__content}>
                  <Text tagName="p" className={style.article__body} bind="body" />
                </div>),
            ]}
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons', 'Icon'])($editor.components)

Block.defaultContent = {
  category: {
    content: 'LIFE',
    type: 'caption',
  },
  title: {
    content: 'Humans And Aliens',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We provide a wide range of services to meet even the most daring requirements. ',
    type: 'subtitle',
  },
  body: {
    content: 'Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services. ',
    type: 'text',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the company',
  },
}

Block.modifierScheme = {
  'arrange-elements': {
    defaultValue: true,
    name: 'Arrange elements',
    type: 'swap',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'checkbox'},
  body: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'checkbox'},
}

export default Block
