import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = (path) => _.get(['modifier', path], this.props.$block)

  getImageSize = (fullWidth) =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  render() {
    const {components: {Text, Image, Button, SocialIcons, Icon}, mods, style: css} = this.props
    const columnLayout = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text') ||
      this.getModifierValue('socialIcons')
    )
    const showButtonGroups = this.getModifierValue('link') || this.getModifierValue('button')

    const onlyImage = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text') ||
      this.getModifierValue('socialIcons') ||
      this.getModifierValue('link') ||
      this.getModifierValue('button')
    )

    return (
      <section className={classNames(css.section, {[css['section--column']]: columnLayout})}>
        <div className={css.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={css['top-icon']} bind="topIcon" />
          )}
          <article className={css.article}>
            {this.getModifierValue('article-picture') && (
              <div className={css['article__picture-wrapper']}>
                <Image pictureClassName={css.article__picture} bind="picture" size={this.getImageSize(columnLayout)} />
              </div>
            )}
            {!onlyImage && (
              <div className={css.article__content}>
                {this.getModifierValue('title') && (
                  <h1 className={css.article__title}>
                    <Text bind="title" />
                  </h1>
                )}
                {this.getModifierValue('subtitle') && (
                  <p className={css.article__subtitle}>
                    <Text bind="subtitle" />
                  </p>
                )}
                {this.getModifierValue('text') && (
                  <p className={css.article__text}>
                    <Text bind="text" />
                  </p>
                )}
                {this.getModifierValue('socialIcons') && (
                  <div className={css.article__socials}>
                    <h2 className={css['social-title']}>Follow us: </h2>
                    <SocialIcons bind="socialIcons" className={css.socials}/>
                  </div>
                )}
                {showButtonGroups && (
                  <div className={css['btns-group']}>
                    {this.getModifierValue('link') && <Text className={css.link} bind="link" />}
                    {this.getModifierValue('button') && (
                      <Button
                        className={css.button}
                        bind="button"
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons', 'Icon'])($editor.components)

Block.defaultContent = {
  title: 'About The Company',
  'text-1': 'Follow us:',
  subtitle: 'We provide a wide range of services to meet even the most daring requirements. ',
  text:
    'Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services. ',
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the company',
  },
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
    textValue: 'Contact us',
    type: 'primary',
    size: 'md',
  },
  link: '<a href="/">More about us</a>',
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
      marginRight: 20,
      color: '',
      sizes: [10, 20, 30, 40],
      size: '40px',
    },
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'text',
    type: 'checkbox',
    label: 'Company main text',
    defaultValue: true,
  },
  {
    id: 'socialIcons',
    type: 'checkbox',
    label: 'Social media buttons',
    defaultValue: false,
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
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
  {
    id: 'article-picture',
    type: 'hidden',
    label: 'Article picture',
    defaultValue: true,
  },
]

export default Block
