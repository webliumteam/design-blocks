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

  render() {
    const {components: {Text, Button, ContactForm, Background}, style} = this.props
    const arrangeElements = this.getModifierValue('Arrange elements')
    const headerClassModifier = style[`section__header--${arrangeElements}`]

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <div className={classNames(style.section__header, headerClassModifier)}>
            {this.getModifierValue('title') && <Text tagName="h1" className={style.title} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={style.subtitle} bind="subtitle" />}
            {this.getModifierValue('header-button') && (
              <Button
                className={style['header-button']}
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="headerButton"
              />
            )}
          </div>
          <Background className={style.form__wrapper} bind="formBackground">
            {this.getModifierValue('form-title') && <Text tagName="h2" className={style.heading} bind="formTitle" />}
            {this.getModifierValue('form-description') && <Text tagName="p" className={style.subheading} bind="formDescription" />}
            <ContactForm
              bind="contactForm"
              className={style.form}
              descriptionClassName={style['form__item-description']}
              fieldClassName={style.form__field}
              buttonClassName={style.form__button}
            />
          </Background>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'ContactForm', 'Background'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  formBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  title: {
    content: 'BeZee Company',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'Products and services of the highest quality',
    type: 'subtitle',
  },
  formTitle: {
    content: 'Want to work with us?',
    type: 'heading',
  },
  formDescription: {
    content: 'Send a request and get a complete list of our offers!',
    type: 'subheading',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: 'Name',
        placeholder: '',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: 'Phone number ',
        placeholder: '',
        required: true,
      },
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Email',
        placeholder: '',
        required: true,
      },
    ],
    submitButton: {
      title: 'Request a quote',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
  headerButton: {
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
    textValue: 'Our services',
    type: 'secondary',
    size: 'md',
  },
}

Block.modifierScheme = {
  'Arrange elements': {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Header alignment',
    type: 'radio-button-group',
    style: 'buttons',
  },
  title: {defaultValue: true, label: 'Hero title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'form-title': {defaultValue: true, label: 'Form title', type: 'checkbox'},
  'form-description': {defaultValue: true, label: 'Form description', type: 'checkbox'},
  'header-button': {defaultValue: false, label: 'Header button', type: 'hidden'},
}

export default Block
