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

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  setStylesForBody = (reset = false) => {
    const {opened} = this.state
    const nodes = [document.getElementsByTagName('html')[0], document.body]

    if (!reset && opened) {
      nodes.forEach(setStyleProperties([['overflow-y', 'hidden'], ['height', '100%']]))
    } else {
      nodes.forEach(resetStyleProperties(['overflow-y', 'height']))
    }
  }

  toggleOpened = () => this.setState({opened: !this.state.opened}, this.setStylesForBody)

  closeMenu = () => {
    this.setStylesForBody(true)
    this.setState({opened: false})
  }

  renderTopLine = () => {
    const {components: {Text, SocialIcons}, style} = this.props
    const topLineStatus = this.getModifierValue('text') || this.getModifierValue('social-icons')
    return (
      topLineStatus && (
        <div className={style['header__top-line']}>
          <div className={style['header__top-line-inner']}>
            {this.getModifierValue('text') && (
              <Text tagName="p" className={style.header__text} bind="topLineText" />
            )}
            {this.getModifierValue('social-icons') && (
              <div className={style.header__socials}>
                <SocialIcons bind="socialIcons" className={style.socials} />
              </div>
            )}
          </div>
        </div>
      )
    )
  }

  renderLogo = () => {
    const {components: {Logo}, style} = this.props
    return (
      this.getModifierValue('logo') && (
        <div className={style['logo-wrapper']}>
          <Logo
            bind="logo"
            className={style.logo}
            textClassName={style.logo__title}
            maxWidth={this.getOptionValue('logo-max-width')}
            maxHeight={this.getOptionValue('logo-max-height')}
          />
        </div>
      )
    )
  }

  renderBtn = () => {
    const {style} = this.props
    return (
      <button
        type="button"
        className={style['nav-button']}
        data-header="trigger"
        onClick={this.toggleOpened}
      >
        <span className={style['nav-button__line']} />
        <span className={style['nav-button__line']} />
        <span className={style['nav-button__line']} />
      </button>
    )
  }

  renderMenu = () => {
    const {components: {Menu}, style} = this.props
    const menuAlignment = this.getModifierValue('menu-alignment')
    const menuModifierClass = style[`nav--${menuAlignment}`]
    return (
      <nav className={classNames(style.nav, menuModifierClass)}>
        <Menu
          className={style.nav__list}
          itemClassName={style.nav__item}
          linkClassName={style.nav__link}
          submenuClassName={style.nav__submenu}
          onClickItem={this.closeMenu}
          bind="menu"
        />
      </nav>
    )
  }

  render() {
    const {components: {Background}, style} = this.props
    const {opened} = this.state
    const logoStatus = !this.getModifierValue('logo')
    const hideAllModification =
      !this.getModifierValue('logo') &&
      !this.getModifierValue('text') &&
      !this.getModifierValue('social-icons')
    const hideAllClass = hideAllModification && style['header--hide-all-modifications']

    return (
      <header
        className={classNames(style.header, opened && style['header--opened'], hideAllClass)}
        data-header="target"
      >
        <div className={style.header__inner}>
          {this.renderTopLine()}
          <div
            className={classNames(
              style.header__main,
              logoStatus && style['header__main--logo-hidden'],
            )}
          >
            {this.renderLogo()}
            {this.renderBtn()}
            {this.renderMenu()}
          </div>
        </div>
        <Background
          bind="background"
          className={classNames(style.header__inner, style['header__inner--fixed'])}
        >
          {this.renderTopLine()}
          <div
            className={classNames(
              style.header__main,
              logoStatus && style['header__main--logo-hidden'],
            )}
          >
            {this.renderLogo()}
            {this.renderBtn()}
            {this.renderMenu()}
          </div>
        </Background>
      </header>
    )
  }
}

Block.components = _.pick(['Text', 'Logo', 'SocialIcons', 'Menu', 'Background'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#f2f2f2',
  },
  logo: {
    text: {
      value: 'Quantum Company',
      tagName: 'h2',
      fontSize: 32,
      maxWidth: 165,
      maxHeight: 80,
    },
  },
  topLineText: {
    content: '<a href="tel:+16877042511">+ 1-687-704-2511</a>',
    type: 'text',
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
      id: 'development',
      metadata: {
        displayName: 'Development',
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
  socialIcons: {
    networks: [
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: false,
      preset: 'preset001',
      offset: 7.5,
      color: '#303C42',
      sizes: [30, 40],
      size: 30,
    },
  },
}

Block.modifierScheme = {
  'menu-alignment': {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'center', label: 'Center'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'right',
    name: 'Menu alignment',
    type: 'radio-button-group',
    style: 'buttons',
  },
  text: {defaultValue: true, label: 'Contact information', type: 'checkbox'},
  'social-icons': {defaultValue: true, label: 'Social buttons', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Company name', type: 'checkbox'},
}

export default Block
