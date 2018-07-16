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
              <Text bind="title" className={classNames(css.title, 'wt-title', 'wt-text-center')} tagName="h2" />)}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={classNames(css.subtitle, 'wt-subtitle', 'wt-text-center')} tagName="p" />
              )}
            </div>
           )}
          <div className={css.article}>
            {this.getModifierValue('image') && (
              <Image
                wrapperClassName={classNames(css['article__picture-wrapper'], 'wt-picture-wrapper')}
                pictureClassName={classNames(css.article__picture, 'wt-picture')}
                imgClassName={classNames(css.article__image, 'wt-picture__image')}
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
                  <Text tagName="p" className={classNames(css.article__heading, 'wt-heading')} bind="heading" />
                )}
                {this.getModifierValue('body') && (
                  <Text tagName="p" className={classNames(css.article__text, 'wt-body')} bind="body" />
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
            <div className={classNames(css['btns-group'], 'wt-btns-group')}>
              <div className={classNames(css['btns-group__inner'], 'wt-btns-group__inner')}>
                <Button
                  className="wt-btns-group__item"
                  buttonClassName={css.button}
                  linkClassName={css.link}
                  bind="button_additional"
                />
              </div>
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
    sortOrder: 10,
  },
  title: {defaultValue: true, label: 'Blog title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 20},
  image: {defaultValue: true, label: 'Post image', type: 'hidden', sortOrder: 30},
  date: {defaultValue: true, label: 'Post publication date', type: 'checkbox', sortOrder: 40},
  category: {defaultValue: true, label: 'Post category', type: 'checkbox', sortOrder: 50},
  heading: {defaultValue: true, label: 'Post title', type: 'checkbox', sortOrder: 60},
  body: {defaultValue: true, label: 'Post main text', type: 'checkbox', sortOrder: 70},
  button: {defaultValue: true, label: 'Post link (button)', type: 'checkbox', sortOrder: 80},
  button_additional: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 90},
}

export default Block
