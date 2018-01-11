import $editor from 'weblium/editor'

const WireframeBlock = ({components: {Text}, style, mods}) => (
  <div className={style.section}>
    <Text bind="title" />
    {_.get('showSubtitle', mods) && <Text bind="subtititle" />}
  </div>
)

WireframeBlock.propTypes = {
  components: PropTypes.object.isRequired,
}

WireframeBlock.defaultContent = {
  title: 'Wireframe Title',
  subtititle: 'Wireframe Subtitle',
}

WireframeBlock.components = _.pick(['Text'])($editor.components)

export default WireframeBlock
