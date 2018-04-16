import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text, Background}, style} = this.props
    const items = _.times(Number, this.getModifierValue('imagesQuantity'))

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={style['items-wrapper']}>
            {_.map(n => (
              <Background key={n}>
                <Text />
              </Background>
            ), items)}
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Background'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Hello world',
    type: 'blockTitle',
  },
}

Wireframe.modifierScheme = {
  imagesQuantity: {
    children: [
      {id: '1', label: '1'},
      {id: '2', label: '2'},
      {id: '3', label: '3'},
    ],
    defaultValue: '3',
    name: 'Items in block',
    type: 'radio-button-group',
    style: 'buttons',
  },
  heading: {defaultValue: true, label: 'Heading', type: 'hidden'},
}

export default Wireframe
