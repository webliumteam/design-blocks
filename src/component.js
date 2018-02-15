import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Menu, Logo}, style: css} = this.props

    return (
      <footer className={css.footer}>
        <div className={css.footer__inner}>
          <div className={css.footer__main}>
            {this.getModifierValue('title') && (
              <div className={css.logo}>
                <Logo bind="logo" textClassName={css.logo__title} />
              </div>
            )}
            <nav className={css.nav}>
              <Menu
                className={css['nav-list']}
                itemClassName={css['nav-list__item']}
                linkClassName={css['nav-list__link']}
                bind="menu"
              />
            </nav>
          </div>
          {(this.getModifierValue('text-left') || this.getModifierValue('text-right')) && (
            <section className={css.footer__bottom}>
              {this.getModifierValue('text-left') && <Text tagName="small" className={css.footer__meta} bind="copyright" />}
              {this.getModifierValue('text-right') && <Text tagName="small" className={css.footer__meta} bind="additional" />}
            </section>
          )}
        </div>
      </footer>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Logo'])($editor.components)

Block.defaultContent = {
  logo: {
    text: {
      value: 'Company Logo',
      fontSize: 24,
    },
  },
  copyright: {
    content: 'Produced by Weblium.com.',
    type: 'caption',
  },
  additional: {
    content: 'All rights Reserved',
    type: 'caption',
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
      id: 'contacts-us',
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
}

Block.modifierScheme = {
  'text-left': {defaultValue: true, label: 'Left text', type: 'checkbox'},
  'text-right': {defaultValue: true, label: 'Right text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Company name', type: 'checkbox'},
}


export default Block
