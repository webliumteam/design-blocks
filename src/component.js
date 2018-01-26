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
    const {components: {Text}, style} = this.props
    return [
      this.getModifierValue('title') && (
        <h1 className={style.title}>
          <Text bind="title" />
        </h1>
      ),
      this.getModifierValue('subtitle') && (
        <p className={style.description}>
          <Text bind="description" />
        </p>
      ),
    ]
  }

  render() {
    const {components: {Image, Button}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getOptionValue('content-wrapper') ?
            <div className={style['content-wrapper']}>{this.getContent()}</div> :
            this.getContent()
          }
          <Button
            className={classNames(style.button, style['button--primary'], style['button--size-lg'])}
            bind="cta"
          />
          {this.getModifierValue('picture') && (
          <div className={style['section__picture-wrapper']}>
            <Image
              pictureClassName={style.section__picture}
              imgClassName={style.section__image}
              bind="picture"
            />
          </div>
        )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  title: 'Want to work with us?',
  description:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
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
    textValue: 'Request a quote',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
}

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Title description',
    defaultValue: true,
  },
  {
    id: 'picture',
    type: 'hidden',
    label: 'Picture',
    defaultValue: false,
  },
]

export default Block
