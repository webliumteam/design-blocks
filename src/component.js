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

  ui = value => (_.get('$block.modifier.__enableThemes', this.props) ? value : null)

  render() {
    const {
      components: {Text, Image},
      style,
    } = this.props

    return (
      <section className={classNames(style.section, this.ui('ui-section'))}>
        <div className={classNames(style.section__inner, this.ui('ui-section__inner'))}>
          <header className={classNames(style.section__header, this.ui('ui-section__header'))}>
            <Text
              bind="title"
              className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'))}
              tagName="h2"
            />
          </header>
          <div className={classNames(this.ui('ui-section__content'))}>
            <Image />
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Image'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Our clients during last 72 hours',
    type: 'blockTitle',
  },
}

export default Wireframe
