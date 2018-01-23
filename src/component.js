import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text, ContactForm, Icon, Button}, style: css} = this.props
    return (
      <section className={css.section}>
        <h1 className={css.title}>
          <Text bind="title" />
        </h1>
        <div className={css.section__inner}>
          <header className={css.section__header}>
            <p className={css.text}>
              <span className={css.text__inner}>
                <Text bind="telTitle" />
              </span>
              <a href="tel:+380673258146" className={css.text__phone}>
                <Text bind="phone" />
              </a>
              <span className={css.text__inner}>
                <Text bind="orForme" />
              </span>
            </p>
          </header>
          <div className={css.section__icon}>
            <Icon bind="icon" />
          </div>
          <ContactForm
            bind="contactForm"
            className={css.form}
            labelClassName={css.form__item}
            fieldClassName={css.form__field}
            buttonClassName={classNames(
              css.button,
              css['button--size-md'],
              css['button--primary'],
              css.form__button,
              css['form__button--custom'],
            )}
          />
        </div>
        <div className={css['button-wrapper']}>
          <Button className={css['button-icon']} bind="button">
            <svg viewBox="0 0 490.656 490.656">
              <path d="M487.536 120.445c-4.16-4.16-10.923-4.16-15.083 0L245.339 347.581 18.203 120.467c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.923 0 15.083l234.667 234.667c2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.136l234.667-234.667c4.159-4.161 4.159-10.924-.001-15.084z" />
            </svg>
          </Button>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'ContactForm', 'Icon', 'Button'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  title: 'СПРОЕКТИРУЕМ УДОБНЫЙ ДИЗАЙН ДЛЯ ВАШЕГО БИЗНЕСА ПО ЦЕНЕ ОТ $10 ЗА КВАДРАТНЫЙ МЕТР',
  background: {},
  theme: 'dark',
  icon: {
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' style='max-width:100%'><path d='M48.156 16.656c-.424.053-.831.201-1.156.469-1.63 1.342-1.39 3.901-1.5 6.156-.139 2.859-.917 5.77-2.344 8.25-1.563 2.72-4.705 4.231-6.531 6.782-.989 1.38-1.478 3.052-2.313 4.53-1.535 2.721-2.398 6.15-4.937 7.97-1.57 1.125-5.594 1.28-5.594 1.28v27.438s5.413.604 7.407.906c3.13.476 10.742 2.907 14.312 2.907h20.969c2.282 0 4.125-1.749 4.125-4.031 0-1.575-.893-2.928-2.188-3.626 2.79-.177 5-2.508 5-5.343a5.3 5.3 0 0 0-3.594-5.031 5.546 5.546 0 0 0 4.407-5.438c0-2.732-1.993-5.011-4.594-5.469C92.34 54.406 95 53.67 95 48.781s-4.741-5.625-26.531-5.625H52.03c-1.179 0-1.63-.912-1.718-1.531-.262-1.842 1.333-3.49 1.937-5.25.677-1.97 1.517-3.891 1.906-5.938.39-2.05.54-4.166.407-6.25-.102-1.571-.086-3.28-.907-4.625-.736-1.204-1.986-2.239-3.343-2.625-.687-.195-1.45-.37-2.157-.28zM5.281 48.72A.29.29 0 0 0 5 49v33.656a.29.29 0 0 0 .281.281h15.407a.29.29 0 0 0 .28-.28V49a.29.29 0 0 0-.28-.281H5.28zm9.969 26.343a3.153 3.153 0 0 1 3.156 3.157 3.153 3.153 0 0 1-3.156 3.156 3.153 3.153 0 0 1-3.156-3.156 3.153 3.153 0 0 1 3.156-3.156z' fill='#fff' fill-rule='evenodd' stroke='#fff'/></svg>",
    id: '12345',
  },
  telTitle: 'бесплатная консультация по тел:',
  phone: '+38 067 325 81 46',
  orForme: 'или ЗАПОЛНИТЕ ФОРМУ',
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
    textValue: '',
  },
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name',
        title: ' ',
        placeholder: 'Ваше имя ',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber ',
        title: ' ',
        placeholder: 'Номер телефона ',
        required: true,
      },
    ],
    submitButton: {
      title: 'ПЕРЕЗВОНИТЕ МНЕ',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

export default Block
