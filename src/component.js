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
    const {components: {Logo, Text, SocialIcons, Menu, Background}, style: css} = this.props
    const {opened} = this.state
    const menuAlignment = this.getModifierValue('menu-alignment')
    const menuModifierClass = css[`nav--${menuAlignment}`]
    const logoStatus = !this.getModifierValue('logo')
    const topLineStatus = this.getModifierValue('text') || this.getModifierValue('social-icons')

    return (
      <header className={classNames(css.header, opened && css['header--nav-open'])} data-header="target">
        <Background tagName="div" bind="mainBackground">
          {topLineStatus && (
            <div className={css['header__top-line']}>
              <div className={css['header__top-line-inner']}>
                {this.getModifierValue('text') && <Text tagName="p" className={css.header__text} bind="topLineText" />}
                {this.getModifierValue('social-icons') && (
                  <div className={css.header__socials}>
                    <SocialIcons bind="socialIcons" className={css.socials} />
                  </div>
                )}
              </div>
            </div>
          )}
          <div className={css.header__main}>
            <div className={classNames(css['header__main-inner'], logoStatus && css['header__main-inner--logo-hidden'])}>
              {this.getModifierValue('logo') && (
                <div className={css['logo-wrapper']}>
                  <Logo
                    bind="logo"
                    className={css.logo}
                    textClassName={css.logo__title}
                    maxWidth={this.getOptionValue('logo-max-width')}
                    maxHeight={this.getOptionValue('logo-max-height')}
                  />
                </div>
              )}
              <button
                type="button"
                className={css['nav-button']}
                data-header="trigger"
                onClick={this.toggleOpened}
              >
                <span className={css['nav-button__line']} />
                <span className={css['nav-button__line']} />
                <span className={css['nav-button__line']} />
              </button>
              <nav className={classNames(css.nav, menuModifierClass)}>
                <Menu
                  className={css.nav__list}
                  itemClassName={css.nav__item}
                  linkClassName={css.nav__link}
                  onClickItem={this.closeMenu}
                  bind="menu"
                />
              </nav>
            </div>
          </div>
        </Background>
      </header>
    )
  }
}

Block.components = _.pick(['Text', 'Logo', 'SocialIcons', 'Menu', 'Background'])($editor.components)

Block.defaultContent = {
  mainBackground: {
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
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
}

Block.modifierScheme = {
  text: {defaultValue: true, label: 'Text', type: 'checkbox'},
  'social-icons': {defaultValue: true, label: 'Social icons', type: 'checkbox'},
  logo: {defaultValue: true, label: 'Logo', type: 'checkbox'},
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
}

export default Block
