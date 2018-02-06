import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  wrapImage = Component => <div className={this.props.style.image__wrapper}>{Component}</div>

  render() {
    const {components: {Text, Image, Button, SocialIcons}, style: css} = this.props
    const columnLayout = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text') ||
      this.getModifierValue('socialIcons')
    )
    const showButtonGroups = this.getModifierValue('link') || this.getModifierValue('button')
    const ImageComponent = (
      <Image
        pictureClassName={css.article__picture}
        bind="picture"
        size={this.getImageSize(columnLayout)}
      />
    )
    return (
      <section className={classNames(css.section, {[css['section--column']]: columnLayout})}>
        <div className={css.section__inner}>
          <article className={css.article}>
            {this.getOptionValue('image_wrapper')
              ? this.wrapImage(ImageComponent)
              : ImageComponent}
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
                  <SocialIcons bind="socialIcons" />
                </div>
              )}
              {showButtonGroups && (
                <div className={css['btns-group']}>
                  {this.getModifierValue('link') && <Button className={css.link} bind="link" />}
                  {this.getModifierValue('button') && (
                    <Button
                      className={classNames(
                        css.button,
                        css['button--primary'],
                        css['button--size-md'],
                      )}
                      bind="button"
                    />
                  )}
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  title: 'About The Company',
  'text-1': 'Follow us:',
  subtitle:
    'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  text:
    'We are in it for the long haul—for our customers and for our world. Our customers can be found in virtually every corner of the earth, and we realize our success comes directly from helping our customers be successful. We take seriously our responsibility to give back to the communities in which we work and live.',
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
  },
  link: {
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
    textValue: 'More about us',
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
      padding: 20,
      color: '',
      sizes: [10, 20, 30, 40],
      size: '40px',
    },
  },
}

Block.modifierScheme = {
  button: {defaultValue: true, label: 'Contact us button', type: 'checkbox'},
  link: {defaultValue: false, label: 'About us link', type: 'checkbox'},
  socialIcons: {defaultValue: false, label: 'Social media buttons', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}


export default Block
