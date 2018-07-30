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
    const nodes = [document.getElementsByTagName('html')[0]]

    if (!reset && opened) {
      nodes.forEach(setStyleProperties([['overflow-y', 'hidden']]))
    } else {
      nodes.forEach(resetStyleProperties(['overflow-y']))
    }
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  toggleOpened = () => this.setState({opened: !this.state.opened}, this.setStylesForBody)

  closeMenu = () => {
    this.setStylesForBody(true)
    this.setState({opened: false})
  }

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  wrapImage = Component => <div className={this.props.style.image__wrapper}>{Component}</div>

  renderLogo = () => {
    const {components: {Logo}, style} = this.props
    return (
      this.getModifierValue('logo') && (
        <Logo
          bind="logo"
          className={style.logo}
          textClassName={style.logo__title}
          maxWidth={this.getOptionValue('logo-max-width')}
          maxHeight={this.getOptionValue('logo-max-height')}
        />
      )
    )
  }

  renderNav = () => {
    const {components: {Menu, Button}, style} = this.props
    return (
      <nav className={style.nav}>
        <Menu
          className={style['nav-list']}
          itemClassName={style['nav-list__item']}
          linkClassName={style['nav-list__link']}
          submenuClassName={style['nav-list__submenu']}
          bind="menu"
          onClickItem={this.closeMenu}
        />
        {this.getModifierValue('button') && (
          <Button
            className={style.header__button}
            buttonClassName={style.button}
            linkClassName={style.link}
            bind="button"
          />
        )}
        {this.getModifierValue('button_additional') && (
          <Button
            className={style.header__button}
            buttonClassName={style.button}
            linkClassName={style.link}
            bind="button_additional"
          />
        )}
      </nav>
    )
  }

  renderBtn = () => {
    const {style} = this.props
    return (
      <button
        type="button"
        className={classNames(style['nav-button'])}
        onClick={this.toggleOpened}
        title="Switch menu"
      >
        <span className={style['nav-button__line']} aria-hidden="true" />
        <span className={style['nav-button__line']} aria-hidden="true" />
        <span className={style['nav-button__line']} aria-hidden="true" />
      </button>
    )
  }

  render() {
    const {components: {Background}, style} = this.props
    const {opened} = this.state
    const twoButtons = this.getModifierValue('button') && this.getModifierValue('button_additional')

    return (
      <header
        className={classNames(style.header, opened && style['header--opened'], twoButtons && style['header--two-buttons'])}
        data-header="target"
      >
        <div className={style.header__inner}>
          {this.renderLogo()}
          {this.renderNav()}
          {this.renderBtn()}
        </div>
        <Background
          bind="background"
          className={classNames(style.header__inner, style['header__inner--fixed'])}
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
  menu: {
    links: [
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
  },
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
    textValue: 'Request a quote',
    type: 'primary',
    size: 'sm',
  },
  button_additional: {
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
    textValue: 'Learn more',
    type: 'secondary',
    size: 'sm',
  },
}

Block.modifierScheme = {
  logo: {defaultValue: true, label: 'Name / logo', type: 'checkbox', sortOrder: 10},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 20},
  button_additional: {defaultValue: false, label: 'Additional button (link)', type: 'checkbox', order: 30},
}

export default Block
