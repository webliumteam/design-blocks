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

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {
      components: {Text, ContactForm},
      style,
    } = this.props

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text tagName="h1" className={classNames(style.title, 'title', 'text-center')} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="p" className={classNames(style.subtitle, 'subtitle', 'text-center')} bind="subtitle" />
          )}
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
    content:
      'Enter your email and get our latest news, special offers, and useful content about our products and services.',
    type: 'subtitle',
  },
  contactForm: {
    fields: [
      {
        type: 'email',
        id: 'contactForm_email',
        placeholder: 'Email',
        required: true,
      },
    ],
    submitButton: {
      title: 'Subscribe',
      textValue: 'Subscribe',
      type: 'primary',
      size: 'lg',
    },
    className: 'form',
    buttonClassName: 'button',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 10},
}

export default Block
