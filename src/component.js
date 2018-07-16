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

  getContent = () => {
    const {
      components: {Text},
      style,
    } = this.props
    return [
      this.getModifierValue('title') && (
        <Text
          tagName="h1"
          className={classNames(style.title, 'wt-title', 'wt-text-center')}
          bind="title"
        />
      ),
      this.getModifierValue('subtitle') && (
        <Text
          tagName="p"
          className={classNames(style.description, 'wt-body', 'wt-text-center')}
          bind="description"
        />
      ),
    ]
  }

  getSectionInner = () => {
    const {
      components: {Button, Image},
      style,
    } = this.props
    return [
      this.getOptionValue('content-wrapper') ? (
        <div className={style['content-wrapper']}>{this.getContent()}</div>
      ) : (
        this.getContent()
      ),
      <div className={classNames(style['btns-group'], 'wt-btns-group')}>
        <div className={classNames(style['btns-group__inner'], 'wt-btns-group__inner')}>
          <Button
            className="wt-btns-group__item"
            buttonClassName={style.button}
            linkClassName={style.link}
            bind="cta"
          />
        </div>
      </div>,
      this.getModifierValue('picture') && (
        <Image
          wrapperClassName={classNames(style['section__picture-wrapper'], 'wt-picture-wrapper')}
          pictureClassName={classNames(style.section__picture, 'wt-picture')}
          imgClassName={classNames(style.section__image, 'wt-picture__image')}
          bind="picture"
        />
      ),
    ]
  }

  render() {
    const {
      components: {Background},
      style,
    } = this.props
    return (
      <section className={style.section}>
        {this.getOptionValue('content-bg') ? (
          <Background className={style.section__inner} bind="contentBackground">
            {this.getSectionInner()}
          </Background>
        ) : (
          <div className={style.section__inner}>{this.getSectionInner()}</div>
        )}
      </section>
    )
  }
}

Block.components = _.pick(['Background', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  theme: 'dark',
  background: {
    type: 'color',
    color: '#A4A4A4',
  },
  contentBackground: {
    type: 'color',
    color: 'rgba(255,255,255,0)',
  },
  title: {
    content: 'Want to work with us?',
    type: 'blockTitle',
  },
  description: {
    content:
      'Get a full-scale analysis of your business and recommended solutions to increase your profits.',
    type: 'text',
  },
  cta: {
    textValue: 'Request a quote',
    type: 'primary-alt',
    size: 'lg',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 20},
  picture: {defaultValue: false, label: 'Picture', type: 'hidden'},
}

export default Block
