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
              {this.getModifierValue('text-left') && (
                <small className={css.footer__meta}>
                  <Text bind="copyright" />
                </small>
              )}
              {this.getModifierValue('text-right') && (
                <small className={css.footer__meta}>
                  <Text bind="additional" />
                </small>
              )}
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
      value: 'CompanyLogo',
    },
  },
  copyright: 'Produced by Weblium.com.',
  additional: 'All rights Reserved',
  menu: [
    {
      id: '10c06b19-6e0d-4ad1-b1d5-213501dd321c',
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
      id: '29f03a3e-117d-490e-963c-ace78d85258f',
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
      id: '8914ae89-ca69-4b81-8d70-68fefdb22f49',
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
      id: '2bf3b2aa-061b-42af-afd2-48301733a536',
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
      id: 'a24bbd34-4a84-451d-82bf-929f35264e2d',
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
