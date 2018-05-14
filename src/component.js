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
    const {components: {Text, ContactForm}, style} = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text tagName="h1" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && <Text tagName="p" className={style.subtitle} bind="subtitle" />}
          <ContactForm
            bind="contactForm"
            className={style.form}
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
  title: {
    content: 'Subscribe Now',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Enter your email and get our latest news, special offers, and useful content about our products and services.',
    type: 'subtitle',
  },
  contactForm: {
    fields: [
      {
        type: 'email',
        id: 'contactForm_email',
        placeholder: 'Email',
        required: false,
      },
    ],
    submitButton: {
      title: 'subscribe',
      textValue: 'subscribe',
      type: 'primary',
      size: 'lg',
    },
    className: 'form',
    buttonClassName: 'button',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: true, label: 'CTA description', type: 'checkbox'},
}

export default Block
