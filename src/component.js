import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = (path) => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) => _.getOr(defaultValue, ['options', path], this.props.$block)

  getImageSize = (fullWidth) =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  render() {
    const {
      components: {Text, Image, Button, SocialIcons, Icon},
      mods,
      style: css,
    } = this.props
    const columnLayout = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text') ||
      this.getModifierValue('additional-text') ||
      this.getModifierValue('socialIcons')
    )
    const showButtonGroups = this.getModifierValue('additional-button') || this.getModifierValue('button')

    const onlyImage = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text') ||
      this.getModifierValue('additional-text') ||
      this.getModifierValue('socialIcons') ||
      this.getModifierValue('additional-button') ||
      this.getModifierValue('button')
    )

    const getTitle = this.getModifierValue('title') && (
      <Text tagName="h1" className={classNames(css.article__title, 'title')} bind="title" />
    )

    const getIconDecorator = this.getModifierValue('top-icon') && <Icon className={css['top-icon']} bind="topIcon" />

    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 46
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 100

    const arrange = this.getModifierValue('arrange-elements')

    return (
      <section
        className={classNames(
          css.section,
          {[css['section--column']]: columnLayout},
          arrange && css['section--reverse']
        )}
      >
        <div className={css.section__inner}>
          {this.getOptionValue('icon-decorator-in-top') && getIconDecorator}
          {this.getOptionValue('title-in-top') && getTitle}
          <div className={css.article}>
            {this.getModifierValue('article-picture') && (
              <Image
                wrapperClassName={css['article__picture-wrapper']}
                pictureClassName={css.article__picture}
                imgClassName={css.article__image}
                bind="picture"
                size={this.getImageSize(columnLayout)}
                resize={{min: getMinResize, max: getMaxResize, disable: this.getOptionValue('disable-resizer')}}
              />
            )}
            {!onlyImage && (
              <div className={css.article__content}>
                {!this.getOptionValue('icon-decorator-in-top') && getIconDecorator}
                {!this.getOptionValue('title-in-top') && getTitle}
                {this.getModifierValue('subtitle') && (
                  <Text tagName="p" className={classNames(css.article__subtitle, 'subtitle')} bind="subtitle" />
                )}
                {this.getModifierValue('text') && (
                  <Text tagName="p" className={classNames(css.article__text, 'body')} bind="text" />
                )}
                {this.getModifierValue('additional-text') && (
                  <Text tagName="p" className={classNames(css['article__additional-text'])} bind="text-2" />
                )}
                {this.getModifierValue('socialIcons') && (
                  <div className={css.article__socials}>
                    {!this.getOptionValue('hidden-social-heading') && (
                      <Text tagName="h2" className={classNames(css['social-title'], 'heading')} bind="social-title" />
                    )}
                    <SocialIcons bind="socialIcons" className={css.socials} />
                  </div>
                )}
                {showButtonGroups && (
                  <div className={css['btns-group']}>
                    {this.getModifierValue('button') && (
                      <Button buttonClassName={css.button} linkClassName={css.link} bind="button-1" />
                    )}
                    {this.getModifierValue('additional-button') && (
                      <Button buttonClassName={css.button} linkClassName={css.link} bind="button-2" />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons', 'Icon'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'About The Company',
    type: 'blockTitle',
  },
  'social-title': {
    content: 'Follow us:',
    type: 'heading',
  },
  subtitle: {
    content: 'We provide a wide range of services to meet even the most daring requirements. ',
    type: 'subtitle',
  },
  text: {
    content:
      'Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding.',
    type: 'text',
  },
  'text-2': {
    content:
      'We are devoted to creating unique and innovative solutions along with the high-quality supporting services.',
    type: 'text',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the company',
  },
  'button-1': {
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
    textValue: 'Learn more',
    type: 'secondary',
    size: 'md',
  },
  'button-2': {
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
  },
  socialIcons: {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
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
    ],
    target: '_blank',
    design: {
      border: 'circle',
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: '#9b9b9b',
      sizes: [20, 30, 40],
      size: 30,
    },
  },
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  'arrange-elements': {
    defaultValue: false,
    name: 'Arrange elements',
    type: 'swap',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 10},
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 20},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox', sortOrder: 30},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'checkbox', sortOrder: 40},
  button: {defaultValue: true, label: 'Additional button / link', type: 'checkbox', sortOrder: 50},
  'additional-button': {defaultValue: false, label: 'Button / link', type: 'checkbox', sortOrder: 60},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  'article-picture': {defaultValue: true, label: 'Article picture', type: 'hidden'},
  'additional-text': {defaultValue: false, label: 'Additional text', type: 'hidden'},
}

export default Block
