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

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Background tagName="div" bind="content-bg" className={style.section__content}>
            <div className={style['caption-wrapper']}>
              {this.getModifierValue('caption') && (
                <Text bind="caption" className={style.caption} tagName="p" />
              )}
            </div>
            {this.getModifierValue('title') && (
              <Text bind="title" className={style.title} tagName="h2" />
            )}
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
            <Button
              bind="secondary-button"
              className="button"
              linkClassName="link"
            />
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
  caption: {defaultValue: true, label: 'Block caption', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  socials: {defaultValue: true, label: 'Social icons', type: 'checkbox'},
}

export default Wireframe
