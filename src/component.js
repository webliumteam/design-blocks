import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Text, Slider}, style} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style.section__header}>
            {this.getModifierValue('title') && (
              <Text bind="title" className={style.title} tagName="h1" />
            )}
          </div>
          <div className={style['items-wrapper']}>
            <Slider />
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Slider'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Hello world',
    type: 'blockTitle',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Gallery description', type: 'checkbox'},
}

export default Wireframe
