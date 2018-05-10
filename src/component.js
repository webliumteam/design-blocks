import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, ContactForm, Background}, style} = this.props
    return (
      <section className={style.section}>
        <Background className={style.section__inner} bind="formBackground">
          <header className={style.section__header}>
            {this.getModifierValue('title') && <Text tagName="h1" className={style.title} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={style.subtitle} bind="subtitle" />}
          </header>
          <ContactForm
            bind="contactForm"
            className={style.form}
            labelClassName={style.form__item}
            fieldClassName={style.form__field}
            buttonClassName={style.form__button}
          />
        </Background>
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
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default Wireframe
