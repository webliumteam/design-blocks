import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Button}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('title') && (
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={style.description}>
              <Text bind="description" />
            </p>
          )}
          <Button
            className={classNames(style.button, style['button--primary'], style['button--size-lg'])}
            bind="cta"
          />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button'])($editor.components)

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
    defaultValue: false,
  },
]

export default Block
