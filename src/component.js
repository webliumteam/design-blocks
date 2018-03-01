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
    const {components: {Text, ContactForm, Background}, style: css} = this.props
    const headerAlignment = this.getModifierValue('header-alignment')
    const headerClassModifier = css[`section__header--${headerAlignment}`]

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <header className={classNames(css.section__header, headerClassModifier)}>
            {this.getModifierValue('title') && <Text tagName="h1" className={css.title} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={css.subtitle} bind="subtitle" />}
          </header>
          <Background className={css.form__wrapper} bind="formBackground">
            {this.getModifierValue('form-title') && <Text tagName="h2" className={css.heading} bind="formTitle" />}
            {this.getModifierValue('form-description') && <Text tagName="p" className={css.subheading} bind="formDescription" />}
            <ContactForm
              bind="contactForm"
              className={css.form}
              labelClassName={css.form__item}
              fieldClassName={css.form__field}
              buttonClassName={css.form__button}
            />
          </Background>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'ContactForm', 'Background'])($editor.components)

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
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'form-title': {defaultValue: true, label: 'Form title', type: 'checkbox'},
  'form-description': {defaultValue: true, label: 'Form description', type: 'checkbox'},
  'header-alignment': {
    children: [
      {id: 'right', label: 'Right'},
      {id: 'left', label: 'Left'},
    ],
    defaultValue: 'left',
    name: 'Header alignment',
    type: 'radio-button-group',
    style: 'buttons',
  },
}

export default Block
