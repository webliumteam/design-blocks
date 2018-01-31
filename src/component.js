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

  setStylesForBody = () => {
    const {opened} = this.state
    const nodes = [document.getElementsByTagName('html')[0], document.body]

    if (opened) {
      nodes.forEach(setStyleProperties([['overflow-y', 'hidden'], ['height', '100%']]))
    } else {
      nodes.forEach(resetStyleProperties(['overflow-y', 'height']))
    }
  }


  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  toggleOpened = () => this.setState({opened: !this.state.opened}, this.setStylesForBody)

  wrapImage = Component => <div className={this.props.style.image__wrapper}>{Component}</div>

  render() {
    const {components: {Logo, Menu, Button}, style: css} = this.props
    const {opened} = this.state

    return (
      <header className={classNames(css.header, opened && css['header--nav-open'])} data-header="target">
        <div className={css.header__inner}>
          {this.getModifierValue('logo') && <Logo bind="logo" className={css.logo} textClassName={css.logo__title} />}
          <nav className={css.nav}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
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

Block.components = _.pick(['Logo', 'Menu', 'Button'])($editor.components)

Block.defaultContent = {
  logo: {
    text: {
      value: 'Company Logo',
      tagName: 'h2',
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

Block.modifierScheme = [
  {
    id: 'logo',
    type: 'checkbox',
    label: 'Company name',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Primary Button',
    defaultValue: true,
  },
]

export default Block
