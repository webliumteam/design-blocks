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
    const {components: {Text, Image, Button}, style: css} = this.props
    const columnLayout = !(
      this.getModifierValue('heading') ||
      this.getModifierValue('date') ||
      this.getModifierValue('category') ||
      this.getModifierValue('body') ||
      this.getModifierValue('button')
    )

    const onlyImage = !(
      this.getModifierValue('heading') ||
      this.getModifierValue('date') ||
      this.getModifierValue('category') ||
      this.getModifierValue('body') ||
      this.getModifierValue('button')
    )

    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 46
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 100

    const arrange = this.getModifierValue('arrange-elements')
    const categoryShow =
      this.getModifierValue('category') || this.getModifierValue('date')
    const headerShow =
      this.getModifierValue('title') || this.getModifierValue('subtitle')

    return (
      <section className={classNames(css.section, {[css['section--column']]: columnLayout}, arrange && css['section--reverse'])}>
        <div className={css.section__inner}>
          {headerShow && (
            <div className={css.section__header}>
              {this.getModifierValue('title') && (
              <Text bind="title" className={classNames(css.title, 'title', 'text-center')} tagName="h2" />)}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={classNames(css.subtitle, 'subtitle', 'text-center')} tagName="p" />
              )}
            </div>
           )}
          <div className={css.article}>
            {this.getModifierValue('image') && (
              <Image
                wrapperClassName={css['article__picture-wrapper']}
                pictureClassName={css.article__picture}
                imgClassName={css.article__image}
                bind="image"
                size={this.getImageSize(columnLayout)}
                resize={{min: getMinResize, max: getMaxResize, disable: this.getOptionValue('disable-resizer')}}
              />
            )}
            {!onlyImage && (
              <div className={css.article__content}>
                {categoryShow && (
                  <div className={classNames(css['article__category-wrapper'])}>
                    {this.getModifierValue('date') && (
                      <Text
                        tagName="p"
                        className={classNames(css.article__date, 'caption')}
                        bind="date"
                      />
                    )}
                    {this.getModifierValue('category') && (
                      <Text
                        tagName="p"
                        className={classNames(css.article__category, 'category')}
                        bind="category"
                      />
                    )}
                  </div>
                )}
                {this.getModifierValue('heading') && (
                  <Text tagName="p" className={classNames(css.article__heading, 'heading')} bind="heading" />
                )}
                {this.getModifierValue('body') && (
                  <Text tagName="p" className={classNames(css.article__text, 'body')} bind="body" />
                )}
                {this.getModifierValue('button') && (
                  <Button
                    className={css.article__link}
                    buttonClassName={css.button}
                    linkClassName={css.link}
                    bind="button"
                  />
                )}
              </div>
            )}
          </div>
          {this.getModifierValue('button_additional') && (
            <div className={css['btns-group']}>
              <Button
                buttonClassName={css.button}
                linkClassName={css.link}
                bind="button_additional"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Blog',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We provide a wide range of services to meet even the most daring requirements. ',
    type: 'subtitle',
  },
  heading: {
    content: 'How to hire the best employees to your company?',
    type: 'heading',
  },
  category: {
    content: 'Category1',
    type: 'caption',
  },
  date: {
    content: 'September 16, 2017',
    type: 'caption',
  },
  body: {
    content: 'Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business.',
    type: 'text',
  },
  image: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the company',
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
    textValue: 'Read more',
    type: 'link',
  },
  button_additional: {
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

Block.modifierScheme = {
  'arrange-elements': {
    defaultValue: false,
    name: 'Arrange elements',
    type: 'swap',
  },
  title: {defaultValue: true, label: 'Blog title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Blog subtitle', type: 'checkbox'},
  image: {defaultValue: true, label: 'Article picture', type: 'hidden'},
  date: {defaultValue: true, label: 'Blog date', type: 'checkbox'},
  category: {defaultValue: true, label: 'Blog category', type: 'checkbox'},
  heading: {defaultValue: true, label: 'Blog heading', type: 'checkbox'},
  body: {defaultValue: true, label: 'Blog main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Blog button', type: 'checkbox'},
  button_additional: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default Block
