import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Text, SocialIcons}, style} = this.props
    const header = this.getModifierValue('title') || this.getModifierValue('subtitle')
    const alignment = this.getModifierValue('itemsAlignment')

    return (
      <section className={classNames(style.section, style[`section--${alignment}`])}>
        <div className={style.section__inner}>
          {header && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={style.title} tagName="h2" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text bind="subtitle" className={style.subtitle} tagName="p" />
              )}
            </div>
          )}
          <div className={style['socials-wrapper']}>
            <SocialIcons bind="socialIcons" className={style.socials} />
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'SocialIcons'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Follow us',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Join us in social media and stay tuned!',
    type: 'subtitle',
  },
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
      {
        id: 'pinterest',
        name: 'Pinterest',
        url: 'http://pinterest.com/',
      },
      {
        id: 'googlePlus',
        name: 'Google +',
        url: 'https://plus.google.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: '#9b9b9b',
      sizes: [20, 30, 40],
      size: 30,
    },
  },
}

Wireframe.modifierScheme = {
  itemsAlignment: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'center',
    name: 'Items alignment',
    type: 'radio-button-group',
    style: 'buttons',
  },
  title: {defaultValue: true, label: 'Title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
}

export default Wireframe
