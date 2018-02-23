import $editor from 'weblium/editor'
import classNames from 'classnames'

const {loadFont} = $editor

loadFont(['Rubik', 'Roboto'])

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    users: [],
    pageToken: null,
    loading: false,
  }

  componentWillMount() {
    this.getData()
  }

  getData = () => {
    const url = this.state.pageToken
      ? `https://us-central1-nebaiduzhi-3e7fa.cloudfunctions.net/list?count=100&token=${
        this.state.pageToken
      }`
      : 'https://us-central1-nebaiduzhi-3e7fa.cloudfunctions.net/list?count=100'
    this.setState({loading: true})
    fetch(url)
      .then(response => response.json())
      .then(this.updateData)
      .catch(error => ({error}))
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  updateData = ({pageToken, users}) => {
    this.setState({users: this.state.users.concat(users), pageToken})
    this.setState({loading: false})
  }

  render() {
    const {components: {Text}, style: css} = this.props
    const alignClass =
      this.getModifierValue('align') !== 'center'
        ? css[`section--${this.getModifierValue('align')}`]
        : ''
    return (
      <section className={classNames(css.section, alignClass)}>
        <div className={css.section__inner}>
          <section className={css.wrapper}>
            <h1 className={css.title}>
              <Text bind="title" />
            </h1>
          </section>
          {this.getModifierValue('text') && (
            <p className={css.subheading}>
              <Text bind="text" />
            </p>
          )}
          <ol className={css.list}>
            {this.state.loading && (
              <li className={css.list__spinner}>
                <div className={css['sk-cube-grid']}>
                  <div className={classNames(css['sk-cube'], css['sk-cube1'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube2'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube3'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube4'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube5'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube6'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube7'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube8'])} />
                  <div className={classNames(css['sk-cube'], css['sk-cube9'])} />
                </div>
              </li>
            )}
            {this.state.users &&
              this.state.users.map(item => (
                <li className={css.list__item}>
                  <div className={css['list__item-inner']}>
                    <span>{item.position}.&nbsp;</span>
                    <span className={css['list__item-inner']}>{item.displayName}</span>
                  </div>
                  <a href={item.profileUrl} className={css.list__link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123">
                      <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z" />
                    </svg>
                  </a>
                </li>
              ))}
          </ol>

          {this.state.pageToken && (
            <button type="button" className={css.button} onClick={this.getData}>
              Далi
            </button>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text'])($editor.components)

Block.defaultContent = {
  title: 'Наразi Долучились:',
  theme: 'dark',
  text: 'Our Text',
}

Block.options = {
  invert: true,
}

Block.modifierScheme = [
  {
    title: 'Наразi Долучились:',
  },
  {
    id: 'align',
    type: 'radio-button-group',
    name: 'Aligning',
    defaultValue: 'center',
    children: [
      {
        id: 'left',
        label: 'left',
      },
      {
        id: 'center',
        label: 'center',
      },
      {
        id: 'right',
        label: 'right',
      },
    ],
  },
]

export default Block
