import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    opened: false,
  }

  setStylesForBody = () => {
    const {opened} = this.state
    const html = document.getElementsByTagName('html')[0]
    const body = document.getElementsByTagName('html')[0]

    if (opened) {
      html.classList.add('header-w1__nav--open')
      body.classList.add('header-w1__nav--open')
    } else {
      html.classList.remove('header-w1__nav--open')
      body.classList.add('header-w1__nav--open')
    }
  }

  toggleOpened = () => this.setState({opened: !this.state.opened}, this.setStylesForBody)

  render() {
    const {components: {Text, Menu, Button, Logo}, style: css} = this.props
    const {opened} = this.state

    return (
      <header
        className={classNames(css.header, opened && css['header--nav-open'])}
        data-header="target"
      >
        <div className={css.header__inner}>
          <Logo bind="logo" className={css.logo} />
          <nav className={css.nav}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
            />
            <a
              href="tel:+380673258146"
              className={classNames(css.header__button, css.button, css['button--primary'])}
              bind="cta"
            >
              <Text bind="phone" />
            </a>
          </nav>

          <button
            type="button"
            className={classNames(css['nav-button'])}
            onClick={this.toggleOpened}
            title="Switch menu"
          >
            <span className={css['nav-button__line']} aria-hidden="true" />
            <span className={css['nav-button__line']} aria-hidden="true" />
            <span className={css['nav-button__line']} aria-hidden="true" />
          </button>
        </div>
      </header>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Button', 'Logo'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  title: 'CompanyLogo',
  subtitle: 'CompanySlogan',
  theme: 'dark',
  logo: {
    text: {
      value: 'Your logo',
    },
    image: {
      resourceRef: null,
      width: null,
      height: null,
      proportion: 1,
    },
    tagName: 'a',
  },
  phone: '+38-067-325-81-46',
  menu: [
    {
      id: 'b72a2300-1a8e-48b5-810b-616deb2bf4b1',
      metadata: {
        displayName: 'о нас',
        clickAction: {
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
      id: 'cf9a2600-1bb2-4579-9c46-a176263caead',
      metadata: {
        displayName: 'портфолио',
        clickAction: {
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
      id: '7835f494-84ad-4de1-aadd-321064670976',
      metadata: {
        displayName: 'преимущества',
        clickAction: {
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
      id: '369bb292-644f-4070-b188-2b0066973fa8',
      metadata: {
        displayName: 'ОТЗЫВЫ КЛИЕНТОВ',
        clickAction: {
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
      id: '1c4e7978-19e0-4774-ad33-bb45807b7356',
      metadata: {
        displayName: 'контакты',
        clickAction: {
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
  cta: {
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
    textValue: 'Request a quote',
  },
}

export default Block
