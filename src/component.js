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

  wrapImage = Component => <div className={this.props.style.image__wrapper}>{Component}</div>

  render() {
    const {components: {Text, Image, Button}, style: css} = this.props

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <article className={css.article}>
            <Image
              pictureClassName={css.article__picture}
              bind="picture"
              size={{'max-width: 479px': 480, 'min-width: 768px': 400, 'min-width: 480px': 800}}
            />
            <div className={css.article__content}>
              <h1 className={css.article__title}>
                <Text bind="title" />
              </h1>
              <p className={css.article__subtitle}>
                <Text bind="subtitle" />
              </p>
              <p className={css.article__text}>
                <Text bind="text" />
              </p>
              <div className={css['btns-group']}>
                <Button className={css.link} bind="link" />
                <Button
                  className={classNames(css.button, css['button--primary'], css['button--size-md'])}
                  bind="button"
                />
              </div>
            </div>
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  title: 'О нас',
  'text-1': 'Follow us:',
  subtitle:
    'Наша команда – это дизайнеры и архитекторы с 10-летним стажем.',
  text: 'Мы любим свою работу и гордимся ее результатами уже 18 лет. Наши клиенты повторно обращаются к нам, потому что они довольны качеством наших работ. Компания сертифицирована на выполнение всех видов проектных работ и разрабатывает архитектурные проекты «с нуля» и «под ключ».',
  picture: {
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

export default Block
