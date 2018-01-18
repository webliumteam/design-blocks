import $editor from 'weblium/editor'

const {loadFont} = $editor

loadFont(['Rubik', 'Roboto'])
class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-widt0-h: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

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
          <header className={css.header}>
            <nav className={css.nav}>
              <a href="/" className={css.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332 72">
                  <path fill="none" stroke="#fff" strokeWidth="2" d="M1 1h330v70H1z" />
                  <path
                    d="M44.823 43.281h1.609l.632-3.6H49.3v-1.515h-1.969l.44-2.514h2.2v-1.511H48.04l.642-3.656h-1.609l-.641 3.656h-1.705l.641-3.656h-1.6l-.642 3.656h-2.312v1.512h2.039l-.439 2.514h-2.259v1.512h2l-.632 3.6h1.608l.633-3.6h1.7zm-.369-7.629h1.705l-.439 2.514h-1.7zm19.081 5.511h-1.494V30.484h-8.385l-.369 5.643a13.163 13.163 0 0 1-.576 3.124 4.137 4.137 0 0 1-1.208 1.912h-.967l.141 5.256h2.5v-3.138h7.717v3.147h2.434zm-7.594-5.177l.22-3.366H59.4v8.543h-4.878a11.272 11.272 0 0 0 1.415-5.177zm16.673-.316h-5.062v-3.05h5.924v-2.136h-8.561v12.8h8.578v-2.121h-5.941v-3.445h5.062V35.67zm9.9 7.611h3.146L81.3 36.54l3.946-6.056h-3.217L78.9 35.608h-1.2v-5.124h-2.636v12.8H77.7v-5.232h1.521zm5.985-12.8l-.22 5.871a11.857 11.857 0 0 1-.54 3.617 1.726 1.726 0 0 1-1.42 1.147l-.439.044v2.118h.685a4.048 4.048 0 0 0 2.356-.62 3.752 3.752 0 0 0 1.31-1.925 14.112 14.112 0 0 0 .58-3.6l.211-4.518h3.41v10.666h2.645v-12.8H88.5zm19.151 12.8h2.8l-4.79-12.8h-2.443l-4.764 12.8h2.8l.879-2.637h4.623zm-3.208-9.562l1.609 4.79h-3.2zm12.158 5.054a5.365 5.365 0 0 0 3.564-1.085 3.675 3.675 0 0 0 1.287-2.966 4.174 4.174 0 0 0-.589-2.21 3.88 3.88 0 0 0-1.683-1.5 5.772 5.772 0 0 0-2.535-.527h-4.993v12.8h2.637v-4.512h2.312zm-2.312-6.152h2.412a2.067 2.067 0 0 1 1.529.6 2.107 2.107 0 0 1 .554 1.52 1.79 1.79 0 0 1-.549 1.406 2.315 2.315 0 0 1-1.6.492h-2.356V32.62zm15.522 10.661h2.8l-4.79-12.8h-2.443l-4.764 12.8h2.8l.879-2.637h4.623zm-3.21-9.563l1.608 4.79h-3.2zm7.092 9.562h9.519v3.085h2.461l.176-5.2H144.1V30.484h-2.65v10.679h-5.124V30.484h-2.637v12.8zm16.577-12.8h-2.637v12.8h2.637v-12.8zm11 12.8v-12.8h-4.527a5.273 5.273 0 0 0-3.436 1.046 3.955 3.955 0 0 0 .747 6.293l-2.734 5.458h2.848l2.311-4.614h2.145v4.614h2.646zm-4.464-10.661h1.819v4.052h-1.819a2.238 2.238 0 0 1-1.569-.483 2.029 2.029 0 0 1-.523-1.556 1.815 1.815 0 0 1 2.092-2.013zm21.542-2.136h-2.637v5.186h-5.142v-5.186h-2.636v12.8h2.636V37.8h5.142v5.484h2.637v-12.8zm10 5.186h-5.063v-3.05h5.924v-2.136h-8.561v12.8h8.579v-2.121h-5.942v-3.445h5.063V35.67zm10.775-5.186h-8.376v12.8h4.816a5.241 5.241 0 0 0 3.494-1.147 3.751 3.751 0 0 0 1.314-2.993 3.628 3.628 0 0 0-1.323-2.949 5.446 5.446 0 0 0-3.581-1.094h-2.057V32.62h5.713v-2.136zm-3.551 6.741a2.378 2.378 0 0 1 1.578.523 1.736 1.736 0 0 1 .576 1.375 1.921 1.921 0 0 1-.6 1.485 2.292 2.292 0 0 1-1.613.554h-2.1v-3.936h2.162zm14.587 6.056h2.81l-4.79-12.8h-2.447l-4.763 12.8h2.8l.879-2.637h4.628zm-3.2-9.562l1.6 4.79h-3.2zM216.71 39v-8.516h-2.64v12.8h2.64l5.12-8.5v8.5h2.65v-12.8h-2.65zm3.82-11.874a1.105 1.105 0 0 1-.33.857 1.279 1.279 0 0 1-.9.3 1.305 1.305 0 0 1-.91-.3 1.105 1.105 0 0 1-.33-.857h-1.8a2.352 2.352 0 0 0 .84 1.892 3.763 3.763 0 0 0 4.41-.009 2.381 2.381 0 0 0 .83-1.883h-1.81zm18.31 14.036h-1.49V30.484h-8.39l-.37 5.643a13.446 13.446 0 0 1-.57 3.124 4.2 4.2 0 0 1-1.21 1.912h-.97l.14 5.256h2.5v-3.138h7.72v3.147h2.43zm-7.59-5.177l.22-3.366h3.24v8.543h-4.88a11.3 11.3 0 0 0 1.42-5.177zm10.94-5.5h-2.84l4.49 9.123-.32.835a1.424 1.424 0 0 1-.57.712 1.765 1.765 0 0 1-.89.193 4.7 4.7 0 0 1-.69-.035l.03 2.118.92.035a3.266 3.266 0 0 0 3.04-1.731l.36-.694 4.48-10.556h-2.85l-2.33 6.047zm22.9 12.8h3.3l-3.93-6.873 3.73-5.924h-3.27l-2.78 5.159h-1.28v-5.163h-2.64v5.159h-1.31l-2.85-5.159h-3.27l3.79 5.933-3.99 6.864h3.29l2.79-5.212h1.55v5.212h2.64v-5.212h1.52zm7-4.28v-8.521h-2.64v12.8h2.64l5.12-8.5v8.5h2.65v-12.8h-2.65zm12.38-8.517h-3.03l3.73 6.346-3.82 6.451h3.06l2.46-4.482 2.46 4.482h3.07l-3.82-6.451 3.73-6.346h-3.04l-2.4 4.412z"
                    dataName="#декларація небайдужих"
                  />
                </svg>
              </a>
            </nav>
          </header>
          <article className={css.article}>
            <div className={css.article__picture}>
              <iframe
                title="Декларація небайдужих"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vf2b5bK6ThE"
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
