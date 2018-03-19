import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text}, style} = this.props

    return (
      <Text bind="title" className={style.title} tagName="h1" />
    )
  }
}

Wireframe.components = _.pick(['Text'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Hello world',
    type: 'blockTitle',
  },
}

export default Wireframe
