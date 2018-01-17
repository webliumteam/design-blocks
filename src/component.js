import $editor from 'weblium/editor'
import css from './style.css'
import {userCountRef, firebasLogin} from './main'


class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  };

  state = {
    usersTotal: 0,
  }

  componentWillMount() {
    userCountRef.on('value', snapshot => this.setState({usersTotal: snapshot.val()}))
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block);

  render() {
    const {components: {Text, Menu, Button}, style: css} = this.props
    const {usersTotal} = this.state


    return (
      <footer className={css.footer}>
        <div className={css.footer__inner}>
          <nav className={css.nav}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
            />
            <div className={css.nav__right}>
              <div className={css.flex}>
                <Text bind="text1" className={css.text} />
                <span className={classNames(css.text, css['text--value'])}>&nbsp;{usersTotal} людей</span>
              </div>
              <button className={classNames(css.button)} onClick={firebasLogin}>Долучитись</button>
            </div>
          </nav>
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
]

export default Block
