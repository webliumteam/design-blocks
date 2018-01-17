import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  render() {
    const {
      components: {Text, Image, Button, SocialIcons},
      $block: {options},
      style: css,
    } = this.props
    const columnLayout = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text') ||
      this.getModifierValue('socialIcons')
    )
    const showButtonGroups = this.getModifierValue('link') || this.getModifierValue('button')

    return (
      <header className={css.header}>
        <nav className={css.nav}>
          <a href="/" className={css.logo}>
            #декларація небайдужих
          </a>
        </nav>
      </header>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons'])($editor.components)

Block.defaultContent = {}

Block.modifierScheme = [
  {
    id: 'text',
    type: 'checkbox',
    label: 'Company main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'About us link',
    defaultValue: false,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Contact us button',
    defaultValue: true,
  },
  {
    id: 'socialIcons',
    type: 'checkbox',
    label: 'Social media buttons',
    defaultValue: false,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
]

export default Block
