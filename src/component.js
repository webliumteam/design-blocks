import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  content = () => {
    const {components: {Text, ContactForm}, style} = this.props

    return [
      <header className={style.section__header}>
        {this.getModifierValue('title') && <Text tagName="h1" className={classNames(style.title, 'wt-title', 'wt-text-center')} bind="title" />}
        {this.getModifierValue('subtitle') && <Text tagName="p" className={classNames(style.subtitle, 'wt-subtitle', 'wt-text-center')} bind="subtitle" />}
      </header>,
      <ContactForm
        bind="contactForm"
        className={style.form}
        fieldClassName={style.form__field}
        buttonClassName={style.form__button}
      />,
    ]
  }

  render() {
    const {components: {Background}, style} = this.props
    const formBackground = this.getModifierValue('background')
    return (
      <section className={classNames(style.section, !formBackground && style['section--background-hidden'])}>
        {formBackground ? (
          <Background className={style.section__inner} bind="formBackground">
            {this.content()}
          </Background>
        ) : (
          <div className={classNames(style.section__inner, style['section__inner--background-hidden'])}>
            {this.content()}
          </div>
        )}
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'ContactForm', 'Background'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  formBackground: {
    type: 'color',
    color: 'light-shade-color',
  },
  title: {
    content: 'Want to increase profits?',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Complete the form below and receive a full analysis of your business within 2 days!',
    type: 'subtitle',
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
        title: 'Phone number',
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
}

Wireframe.modifierScheme = {
  background: {defaultValue: true, label: 'Form background', type: 'checkbox', sortOrder: 10},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 20},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox', sortOrder: 30},
}

export default Wireframe
