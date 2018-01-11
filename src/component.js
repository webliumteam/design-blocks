import $editor from 'weblium/editor'

const {pick} = _

const WireframeBlock = ({components: {Text}, style, mods}) => (
  <div className={style.section}>
    <Text bind="title" />
    {mods.showSubtitle && <Text bind="subtititle" />}
  </div>
)

WireframeBlock.propTypes = {
  components: PropTypes.object.isRequired,
}

WireframeBlock.defaultContent = {
  title: 'Wireframe Title',
  subtititle: 'Wireframe Subtitle',
}

WireframeBlock.components = pick(['Text'])($editor.components)

export default WireframeBlock
