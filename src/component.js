import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, ContactForm}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <header className={style.section__header}>
            {this.getModifierValue('title') && (
              <h1 className={style.title}>
                <Text bind="title" />
              </h1>
            )}
            {this.getModifierValue('subtitle') && (
              <p className={style.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
          <ContactForm
            bind="contactForm"
            className={style.form}
            labelClassName={style.form__item}
            fieldClassName={style.form__field}
            buttonClassName={style.form__button}
          />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'ContactForm'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  title: 'Want to increase profits?',
  subtitle: 'Complete the form below and receive a full analysis of your business within 2 days!',
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
    label: 'Title description',
    defaultValue: true,
  },
]

export default Block
