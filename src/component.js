import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text, Menu, Logo}, style: css} = this.props

    return (
      <footer className={css.footer}>
        <div className={css.footer__inner}>
          <Logo bind="logo" className={css.logo} />
          <nav className={css.nav}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
            />
            <a
              href="tel:+380673258146"
              className={classNames(css.footer__button, css.button, css['button--primary'])}
            >
              <Text bind="phone" />
            </a>
          </nav>
          <section className={css.footer__bottom}>
            <small className={css.footer__meta}>
              <Text bind="copyright" />
            </small>
          </section>
        </div>
      </footer>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Logo'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  title: 'CompanyLogo',
  theme: 'dark',
  phone: '3-8067-32-58-146',
  logo: {
    text: {
      value: 'Your logo',
    },
    image: {
      resourceRef: null,
      width: null,
      height: null,
      proportion: 1,
    },
    tagName: 'a',
  },
  subtitle: 'CompanySlogan',
  copyright: 'Produced by Weblium.com. All rights Reserved',
  menu: [
    {
      id: '10c06b19-6e0d-4ad1-b1d5-213501dd321c',
      metadata: {
        displayName: 'О НАС',
        clickAction: {
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
        displayName: 'УСЛУГИ',
        clickAction: {
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
        displayName: 'ПРЕИМУЩЕСТВА',
        clickAction: {
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
        displayName: 'ОТЗЫВЫ КЛИЕНТОВ',
        clickAction: {
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
        displayName: 'КОНТАКТЫ',
        clickAction: {
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

export default Block
