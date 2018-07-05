import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Text, Button, SocialIcons, Background}, style} = this.props
    const blockAlignment = this.getModifierValue('block-alignment')
    const textAlignmentClass = this.getModifierValue('block-alignment') !== 'right' ? `text-${blockAlignment}` : ''

    return (
      <section className={classNames(style.section, style[`section--${blockAlignment}`])}>
        <div className={style.section__inner}>
          <Background tagName="div" bind="content-bg" className={style.section__content}>
            <div className={style['caption-wrapper']}>
              {this.getModifierValue('caption') && (
                <Text bind="caption" className={classNames(style.caption, 'caption', textAlignmentClass)} tagName="p" />
              )}
            </div>
            {this.getModifierValue('title') && (
              <Text bind="title" className={classNames(style.title, 'title', textAlignmentClass)} tagName="h2" />
            )}
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={classNames(style.subtitle, 'subtitle', textAlignmentClass)} tagName="p" />
              )}
            <div className={style['btns-group']}>
              <Button
                bind="secondary-button"
                className={style.button}
                linkClassName={style.link}
              />
            </div>
            {this.getModifierValue('socials') && (
              <SocialIcons className={style.socials} bind="socialIcons" />
            )}
          </Background>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'SocialIcons', 'Background'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#D8D8D8',
  },
  'content-bg': {
    type: 'color',
    color: '#fff',
  },
  title: {
    content: 'Want to Work With Us?',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'If you have passion for turning client needs into thoughtful solutions that drive value, lets talk.',
    type: 'subtitle',
  },
  caption: {
    content: 'CAREERS',
    type: 'caption',
  },
  'secondary-button': {
    type: 'secondary',
    textValue: 'Request a quote',
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
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      padding: 20,
      color: '#676767',
      sizes: [20, 30, 40],
      size: '40px',
    },
  },
}

Wireframe.modifierScheme = {
  'block-alignment': {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'center', label: 'Center'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Block alignment',
    type: 'radio-button-group',
    style: 'buttons',
    sortOrder: 10,
  },
  caption: {defaultValue: true, label: 'Block caption', type: 'checkbox', sortOrder: 20},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 30},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox', sortOrder: 40},
  socials: {defaultValue: true, label: 'Social media buttons', type: 'checkbox', sortOrder: 50},
}

export default Wireframe
