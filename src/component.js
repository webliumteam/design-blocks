import $editor from 'weblium/editor'
import css from './style.css'
import firebasLogin from './main'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    usersTotal: null,
    openModal: false,
  }

  componentWillMount() {
    fetch('https://us-central1-nebaiduzhi-3e7fa.cloudfunctions.net/getTotal')
      .then(response => response.json())
      .then(this.updateValue)
  }

  login = () => {
    firebasLogin().then(() => this.toggleModal())
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  updateValue = ({total}) => {
    this.setState({usersTotal: total})
  }

  toggleModal = () => {
    this.setState({openModal: !this.state.openModal})
  }

  render() {
    const {components: {Text, Menu, Button}, style: css} = this.props
    const {usersTotal} = this.state

    return (
      <footer
        className={classNames(css.footer, this.getModifierValue('fixed') && css['footer--fixed'])}
      >
        <div className={css.footer__inner}>
          <nav className={css.nav}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
            />
            <div className={css.nav__right}>
              {usersTotal !== null && (
                <div className={css.flex}>
                  <Text bind="text1" className={classNames(css.text, css['text--right'])} />
                  <span className={classNames(css.text, css['text--value'])}>
                    &nbsp;{usersTotal} людей
                  </span>
                </div>
              )}
              <button className={classNames(css.button)} onClick={this.login}>
                <svg
                  className={css.button__icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96.124 96.123"
                >
                  <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z" />
                </svg>
                Долучитись
              </button>
            </div>
          </nav>
        </div>
        <div className={css.footer__privacy}>
          <div className={classNames(css.footer__inner, css['footer__inner--privacy'])}>
            <div className="text" />
            <a href="https://www.weblium.com" className={css.text__link}>
              <svg width="20px" height="13px" viewBox="0 0 25 16" id="icon-logo-ico">
                <path d="M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.256.274A1.162 1.162 0 0 0 11.75.28l-4.88 4.255-5.06-3.475a1.162 1.162 0 0 0-1.34.014c-.396.29-.563.801-.417 1.271l4.026 12.828a1.161 1.161 0 0 0 1.777.594L21.231 4.771l-2.103 8.179-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.701.262 1.056.131.354-.13.617-.428.715-.787L24.25 2.284c.118-.463-.07-.96-.465-1.23a1.18 1.18 0 0 0-1.305 0z" />
              </svg>Produced by Weblium.com
            </a>
          </div>
          <div className={classNames(css.modal, this.state.openModal && css['modal--active'])}>
            <h3 className={css.modal__title}>
              Ви успішно долучились <br /> до Декларації
            </h3>
            <button type="button" className={css.modal__link} onClick={this.toggleModal}>
              Повернутися на головну
            </button>
            <div className={css.gerb}>
              <svg viewBox="0 0 41 65" version="1.1">
                <g id="Page-1" stroke="none" strokeWidth="1">
                  <g id="ss">
                    <path
                      d="M39.352,8.686 C38.925,8.4 38.383,8.346 37.909,8.542 C37.617,8.663 30.747,11.604 29.565,21.179 C28.487,29.903 28.188,33.463 28.176,33.61 C28.112,34.389 28.641,35.092 29.406,35.247 C29.492,35.265 31.527,35.706 31.527,38.473 C31.527,40.663 30.627,40.996 28.591,41.543 C28.249,41.635 27.898,41.73 27.554,41.841 C27.335,41.913 27.024,41.987 26.665,42.072 C26.236,41.093 25.782,40.124 25.333,39.163 C23.583,35.426 21.772,31.562 21.772,27.619 L21.772,1.655 C21.772,0.805 21.083,0.115 20.233,0.115 C19.382,0.115 18.693,0.804 18.693,1.655 L18.693,27.617 C18.693,31.567 16.921,35.433 15.206,39.173 C14.767,40.132 14.323,41.1 13.905,42.076 C13.547,41.99 13.237,41.915 13.021,41.843 C12.684,41.731 12.338,41.636 12.003,41.544 C10.16,41.039 9.145,40.761 9.145,38.472 C9.145,36.223 10.294,35.469 11.258,35.232 C11.992,35.052 12.487,34.366 12.426,33.612 C12.414,33.465 12.121,29.906 11.067,21.183 C9.911,11.612 3.175,8.667 2.889,8.546 C2.413,8.346 1.869,8.397 1.44,8.682 C1.011,8.967 0.751,9.449 0.751,9.965 L0.751,51.325 C0.751,52.175 1.44,52.865 2.292,52.865 L11.694,52.865 C12.534,60.51 19.204,63.781 19.506,63.925 C19.72,64.027 19.944,64.075 20.166,64.075 C20.188,64.075 20.209,64.071 20.23,64.07 C20.253,64.071 20.276,64.075 20.299,64.075 C20.518,64.075 20.738,64.028 20.949,63.93 C21.258,63.785 28.065,60.517 28.922,52.865 L38.494,52.865 C39.344,52.865 40.033,52.176 40.033,51.325 L40.033,9.965 C40.035,9.451 39.779,8.971 39.352,8.686 Z M25.84,49.785 L21.891,49.785 C22.26,47.529 23.467,46.451 24.858,45.831 C25.33,47.156 25.682,48.47 25.84,49.785 Z M20.25,35.206 C20.923,37.001 21.738,38.747 22.545,40.468 C22.942,41.316 23.334,42.154 23.703,42.984 C22.453,43.526 21.17,44.362 20.215,45.737 C19.293,44.387 18.061,43.555 16.856,43.013 C17.223,42.17 17.612,41.319 18.007,40.456 C18.794,38.739 19.592,36.996 20.25,35.206 Z M15.723,45.875 C17.037,46.501 18.166,47.582 18.518,49.785 L14.779,49.785 C14.931,48.484 15.269,47.185 15.723,45.875 Z M3.832,12.861 C5.444,14.319 7.461,17.005 8.012,21.552 C8.729,27.482 9.094,31.05 9.254,32.719 C7.553,33.597 6.067,35.431 6.067,38.472 C6.067,43.109 9.274,43.989 11.19,44.514 C11.499,44.598 11.791,44.679 12.048,44.764 C12.272,44.838 12.522,44.905 12.78,44.97 C12.242,46.544 11.839,48.147 11.68,49.784 L3.83,49.784 L3.83,12.861 L3.832,12.861 Z M20.242,60.813 C18.847,59.962 15.467,57.455 14.804,52.864 L20.169,52.864 C20.171,52.864 20.174,52.864 20.177,52.864 C20.187,52.864 20.196,52.861 20.204,52.861 C20.214,52.861 20.224,52.864 20.233,52.864 L25.812,52.864 C25.133,57.461 21.662,59.969 20.242,60.813 Z M36.956,49.785 L28.937,49.785 C28.776,48.143 28.363,46.537 27.812,44.961 C28.058,44.9 28.296,44.837 28.509,44.768 C28.775,44.681 29.073,44.601 29.388,44.517 C31.339,43.993 34.606,43.116 34.606,38.473 C34.606,35.283 32.878,33.524 31.351,32.721 C31.515,31.052 31.888,27.484 32.621,21.557 C33.189,16.952 35.299,14.257 36.956,12.812 L36.956,49.785 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Button'])($editor.components)

Block.defaultContent = {
  theme: 'dark',
  button: {
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
    textValue: 'Долучитись',
  },
  text1: 'Наразi долучилось: ',
  text2: '1347 людей',
  logo: {
    text: {
      value: 'CompanyLogo',
    },
  },
  subtitle: 'CompanySlogan',
  copyright: 'Produced by Weblium.com. All rights Reserved',
  additional: 'Demo preview for {Template name} {Concept name}',
  menu: [
    {
      id: '10c06b19-6e0d-4ad1-b1d5-213501dd321c',
      metadata: {
        displayName: '«Додаток до декларації»',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: '29f03a3e-117d-490e-963c-ace78d85258f',
      metadata: {
        displayName: 'Ініціативна група',
        actionConfig: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
  ],
}

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Company name',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Company slogan',
    defaultValue: true,
  },
  {
    id: 'fixed',
    type: 'checkbox',
    label: 'Fixed Block',
    defaultValue: false,
  },
]

export default Block
