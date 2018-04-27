import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Text}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h2" />
          {this.getModifierValue('subtitle') && (
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Hello world',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Type here something',
    type: 'subtitle',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default Wireframe
