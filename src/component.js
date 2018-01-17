import $editor from 'weblium/editor'
import css from './style.css'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  };

  getModifierValue = path => _.get(['modifier', path], this.props.$block);

  render() {
    const {components: {Text, Menu, Button}, style: css} = this.props

    return (
      <footer className={css.footer}>
        <div className={css.footer__inner}>
          <nav className={css.nav}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
            />
            <div className={css.nav__right}>
              <div className={css.flex}>
                <Text bind="text1" className={css.text} />
                <Text bind="text2" className={classNames(css.text, css['text--value'])} />
              </div>
              <Button className={classNames(css.button)} bind="button" />
            </div>
          </nav>
        </div>
      </footer>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Button'])($editor.components)

Block.defaultContent = {
  theme: 'dark',
  button: {
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
    textValue: 'Долучитись',
  },
  text1: 'Наразi долучилось: ',
  text2: '1347 людей',
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
        displayName: '«Додаток до декларації»',
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
        displayName: 'Ініціативна група',
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
