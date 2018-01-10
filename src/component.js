import $editor from 'weblium/editor'

const {pick} = _

const WireframeBlock = ({components: {Text}, style}) => (
  <div className={style.section}>
    <Text bind="title" />
  </div>
)

WireframeBlock.propTypes = {
  components: PropTypes.object.isRequired,
}

WireframeBlock.defaultContent = {
  title: 'Wireframe Title',
}

WireframeBlock.components = pick(['Text'])($editor.components)

export default WireframeBlock
