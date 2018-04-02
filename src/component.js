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

  renderLogo = () => {
    const {components: {Logo}, style: css} = this.props
    return (
      <Logo
        bind="logo"
        className={css.logo}
        textClassName={css.logo__title}
        maxWidth={this.getOptionValue('logo-max-width')}
        maxHeight={this.getOptionValue('logo-max-height')}
      />
    )
  }

  renderBtn = () => {
    const {style: css} = this.props
    return (
      <button
        type="button"
        className={css['nav-button']}
        data-header="triger"
        onClick={this.toggleOpened}
      >
        <span className={css['nav-button__line']} />
        <span className={css['nav-button__line']} />
        <span className={css['nav-button__line']} />
      </button>
    )
  }

  renderMenu = () => {
    const {components: {Menu}, style: css} = this.props
    return (
      <nav className={css.nav}>
        <Menu
          className={css.nav__list}
          itemClassName={css.nav__item}
          linkClassName={css.nav__link}
          onClickItem={this.closeMenu}
          bind="menu"
        />
      </nav>
    )
  }

  renderInfo = () => {
    const {components: {Text}, style: css} = this.props
    return (
      <div className={css['header__company-info']}>
        {this.getModifierValue('company-slogan') && (
          <Text tagName="div" className={css.header__slogan} bind="slogan" />
        )}
        {this.getModifierValue('company-contacts') && (
          <Text tagName="div" className={css.header__email} bind="email" />
        )}
      </div>
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
          {this.renderBtn()}
          {this.renderMenu()}
          {this.renderInfo()}
        </div>
        <Background bind="background" className={classNames(css.header__inner, css['header__inner--fixed'])}>
          {this.renderLogo()}
          {this.renderBtn()}
          {this.renderMenu()}
          {this.renderInfo()}
        </Background>
      </header>
    )
  }
}

Block.components = _.pick(['Text', 'Logo', 'Menu', 'Button', 'Background'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#fff',
  },
  logo: {
    text: {
      value: 'Quantum Company',
      tagName: 'h2',
      fontSize: 40,
    },
  },
  slogan: {
    content: 'Solutions & Support',
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
      id: 'careers',
      metadata: {
        displayName: 'Careers',
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
      id: 'team',
      metadata: {
        displayName: 'Team',
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
  email: {
    content: '<a href="mailto:ourcompany@a.weblium.com">ourcompany@a.weblium.com</a>',
    type: 'text',
  },
}

Block.modifierScheme = {
  'company-slogan': {defaultValue: true, label: 'Company slogan', type: 'checkbox'},
  'company-contacts': {defaultValue: true, label: 'Contact information', type: 'checkbox'},
}

export default Block
