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
          {this.getModifierValue('title') && (
            <div className={css.logo}>
              <Logo
                bind="logo"
                textClassName={css.logo__title}
              />
              {this.getModifierValue('subtitle') && (
                <p className={css.logo__subtitle}>
                  <Text bind="subtitle" />
                </p>
              )}
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
          <section className={css.footer__bottom}>
            <small className={css.footer__meta}>
              <Text bind="copyright" />
            </small>
            <small className={css.footer__meta}>
              <Text bind="additional" />
            </small>
          </section>
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
  subtitle: 'CompanySlogan',
  copyright: 'Produced by Weblium.com. All rights Reserved',
  additional: 'Demo preview for {Template name} {Concept name}',
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

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Company name',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Company slogan',
    defaultValue: true,
  },
]

export default Block
