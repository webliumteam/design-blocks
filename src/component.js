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
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
            <p className={style.text}>
              <Text bind="subtitle" />
            </p>
          </header>
          <ContactForm
            bind="contactForm"
            className={style.form}
            labelClassName={style.form__item}
            fieldClassName={style.form__field}
            buttonClassName={classNames(
              style.button,
              style['button--size-md'],
              style['button--primary'],
              style.form__button,
            )}
          />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'ContactForm'])($editor.components)

Block.defaultContent = {
  title: 'Want to work with us?',
  subtitle: 'Join 13000 clients who already worked with us. Request a quote to get best solutions.',
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
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
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
