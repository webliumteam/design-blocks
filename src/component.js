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

    if (!reset && opened && document.body.offsetWidth < 992) {
      nodes.forEach(setStyleProperties([['overflow-y', 'hidden'], ['height', '100%']]))
    } else if (!reset && opened && document.body.offsetWidth >= 992) {
      nodes.forEach(resetStyleProperties(['overflow-y']))
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

  renderLogo = () => {
    const {components: {Logo, Text}, style} = this.props
    const companyInfo = this.getModifierValue('logo') || this.getModifierValue('subtitle')

    return (
      companyInfo && (
        <div className={style['company-info']}>
          {this.getModifierValue('logo') && (
          <Logo
            bind="logo"
            className={style.logo}
            textClassName={style.logo__title}
            maxWidth={this.getOptionValue('logo-max-width')}
            maxHeight={this.getOptionValue('logo-max-height')}
          />
        )}
          {this.getModifierValue('subtitle') && (
          <Text tagName="p" className={style.subtitle} bind="subtitle" />
        )}
        </div>
      )
    )
  }

  renderNav = () => {
    const {components: {Menu}, style} = this.props
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

  renderIcon = () => {
    const {components: {SocialIcons}, style} = this.props
    return (
      <div className={style.header__socials}>
        <SocialIcons bind="socialIcons" className={style.socials} />
      </div>
    )
  }

  render() {
    const {components: {Background}, style} = this.props
    const {opened} = this.state

    return (
      <header
        className={classNames(style.header, opened && style['header--opened'])}
        data-header="target"
      >
        <div className={style.header__inner}>
          <div className={style.header__wrapper}>
            {this.renderLogo()}
            {this.renderBtn()}
            {this.renderNav()}
            {this.renderIcon()}
          </div>
        </div>
        <Background
          bind="background"
          className={classNames(style.header__inner, style['header__inner--fixed'])}
        >
          {this.renderBtn()}
          {this.renderLogo()}
          {this.renderNav()}
          {this.renderIcon()}
        </Background>
      </header>
    )
  }
}

Block.components = _.pick(['Logo', 'Menu', 'Button', 'Background', 'SocialIcons', 'Text'])($editor.components)

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
  subtitle: {
    type: 'subtitle',
    content: 'Company slogan',
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
  logo: {defaultValue: true, label: 'Company name', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Company slogan', type: 'checkbox'},
}

export default Block
