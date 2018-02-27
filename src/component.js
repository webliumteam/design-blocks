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

  getOptionValue = (path, defaultValue = false) => _.getOr(defaultValue, ['options', path], this.props.$block)

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

  render() {
    const {components: {Logo, Text, SocialIcons, Menu}, style: css} = this.props
    const {opened} = this.state
    const menuAlignment = this.getModifierValue('menu-alignment')
    const menuModifierClass = css[`nav__list--${menuAlignment}`]
    const logoStatus = !this.getModifierValue('logo')

    return (
      <header className={classNames(css.header, opened && css['header--nav-open'])} data-header="target">
        <div className={css.header__contacts}>
          <div className={css['header__contacts-inner']}>
            <Text tagName="p" className={css.subtitle} bind="subtitle" />
            <div className={css.header__socials}>
              <SocialIcons bind="socialIcons" className={css.socials} />
            </div>
          </div>
        </div>
        <div className={css.header__menu}>
          <div className={classNames(css['header__menu-inner'], logoStatus && css['header__menu-inner--logo-hidden'])}>
            {this.getModifierValue('logo') && (
              <Logo
                bind="logo"
                className={css.logo}
                textClassName={css.logo__title}
                maxWidth={this.getOptionValue('logo-max-width')}
                maxHeight={this.getOptionValue('logo-max-height')}
              />
            )}
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
            <nav className={css.nav}>
              <Menu
                className={classNames(css.nav__list, menuModifierClass)}
                itemClassName={css.nav__item}
                linkClassName={css.nav__link}
                onClickItem={this.closeMenu}
                bind="menu"
              />
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

Block.components = _.pick(['Text', 'Logo', 'SocialIcons', 'Menu'])($editor.components)

Block.defaultContent = {
  logo: {
    text: {
      value: 'Quantum Company',
      tagName: 'h2',
      fontSize: 32,
      maxWidth: 165,
      maxHeight: 80,
    },
  },
  subtitle: {
    content: '<a href="tel:+16877042511">+ 1-687-704-2511</a>',
    type: 'subtitle',
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
  email: {
    content: '<a href="mailto:ourcompany@a.weblium.com">ourcompany@a.weblium.com</a>',
    type: 'text',
  },
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
      sizes: [20, 30, 40, 50],
      size: 40,
    },
  },
}

Block.modifierScheme = {
  'social-icons': {defaultValue: true, label: 'Social icons', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Logo', type: 'checkbox'},
  'menu-alignment': {
    children: [
      {id: 'right', label: 'Right'},
      {id: 'center', label: 'Center'},
      {id: 'left', label: 'Left'},
    ],
    defaultValue: 'right',
    style: 'column',
    name: 'Menu alignment',
    type: 'radio-button-group',
  },
}

export default Block
