import $editor from 'weblium/editor'

const setStyleProperties = properties => node =>
  properties.map(([propertyName, value]) => node.style.setProperty(propertyName, value))

const resetStyleProperties = properties => node =>
  properties.map(propertyName => node.style.removeProperty(propertyName))

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  state = {
    opened: false,
  }

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  setStylesForBody = (reset = false) => {
    const {opened} = this.state
    const nodes = [document.getElementsByTagName('html')[0], document.body]

    if (!reset && opened) {
      nodes.forEach(setStyleProperties([['overflow-y', 'hidden'], ['height', '100%']]))
    } else {
      nodes.forEach(resetStyleProperties(['overflow-y', 'height']))
    }
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  toggleOpened = () => this.setState({opened: !this.state.opened}, this.setStylesForBody)

  closeMenu = () => {
    this.setStylesForBody(true)
    this.setState({opened: false})
  }

  wrapImage = Component => <div className={this.props.style.image__wrapper}>{Component}</div>

  renderLogo = () => {
    const {components: {Logo}, style: css} = this.props
    return (
      this.getModifierValue('logo') && (
        <Logo
          bind="logo"
          className={css.logo}
          textClassName={css.logo__title}
          maxWidth={this.getOptionValue('logo-max-width')}
          maxHeight={this.getOptionValue('logo-max-height')}
        />
      )
    )
  }

  renderNav = () => {
    const {components: {Menu, Button}, style: css} = this.props
    return (
      <nav className={css.nav}>
        <Menu
          className={css['nav-list']}
          itemClassName={css['nav-list__item']}
          linkClassName={css['nav-list__link']}
          submenuClassName={css['nav-list__submenu']}
          bind="menu"
          onClickItem={this.closeMenu}
        />
        {this.getModifierValue('button') && (
          <Button
            className={css.header__button}
            buttonClassName={css.button}
            linkClassName={css.link}
            bind="cta"
          />
        )}
      </nav>
    )
  }

  renderBtn = () => {
    const {style: css} = this.props
    return (
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
    )
  }

  render() {
    const {components: {Background}, style: css} = this.props
    const {opened} = this.state

    return (
      <header
        className={classNames(css.header, opened && css['header--opened'])}
        data-header="target"
      >
        <div className={css.header__inner}>
          {this.renderLogo()}
          {this.renderNav()}
          {this.renderBtn()}
        </div>
        <Background
          bind="background"
          className={classNames(css.header__inner, css['header__inner--fixed'])}
        >
          {this.renderLogo()}
          {this.renderNav()}
          {this.renderBtn()}
        </Background>
      </header>
    )
  }
}

Block.components = _.pick(['Logo', 'Menu', 'Button', 'Background'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#f2f2f2',
  },
  logo: {
    text: {
      value: 'Quantum Company',
      tagName: 'h1',
      fontSize: 32,
    },
  },
  menu: [
    {
      id: 'about-us',
      metadata: {
        displayName: 'About us',
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
      id: 'services',
      metadata: {
        displayName: 'Services',
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
      id: 'projects',
      metadata: {
        displayName: 'Projects',
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
      id: 'testimonials',
      metadata: {
        displayName: 'Testimonials',
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
      id: 'contact-us',
      metadata: {
        displayName: 'Contact us',
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
    type: 'primary',
    size: 'sm',
  },
}

Block.modifierScheme = {
  logo: {defaultValue: true, label: 'Company name', type: 'checkbox'},
  button: {defaultValue: true, label: 'Primary button', type: 'checkbox'},
}

export default Block
