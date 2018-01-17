import $editor from 'weblium/editor'

const {loadFont} = $editor

loadFont(['Rubik', 'Roboto'])
class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  };

  getModifierValue = path => _.get(['modifier', path], this.props.$block);

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-widt0-h: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570};

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
      <section className={classNames(css.section, {[css['section--column']]: columnLayout})}>
        <div className={css.section__inner}>
          <article className={css.article}>
            <div className={css.article__picture}>
              <iframe
                title="Декларація небайдужих"
                width="100%"
                height="100%"
                src="https://youtu.be/3BBPLyGptak"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
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
                        css['button--size-lg'],
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
  theme: 'dark',
  title: 'Декларація небайдужих',
  'text-1': 'Follow us:',
  subtitle:
    'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  text:
    'Ми переконані, що корупція є найбільшою внутрішньою загрозою для нашої держави та її майбутнього, так само як російська агресія – зовнішньою. Починаючи з 2014 року новій владі, за активної допомоги активістів та Заходу вдалося зробити перші кроки у боротьбі з корупцією. Такого в нашій країні ще не було з часів проголошення Незалежності. ',
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
    textValue: 'Детальніше',
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

Block.options = {
  invert: true,
}

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
