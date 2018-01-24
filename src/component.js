import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  render() {
    const {components: {Text, ContactForm}, style: css} = this.props

    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          <div className={css.section__main}>
            <div className={css['map-wrapper']}>
              <h3 className={css.contacts__title}>
                <Text bind="formTitle" />
              </h3>
              <p className={css.contacts__desc}>
                <Text bind="formDesc" />
              </p>
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
            <div className={css.contacts}>
              <ul className={css['contacts-list']}>
                <li className={css['contacts-list__item']}>
                  <h3 className={css.contacts__title}>
                    <Text bind="address-title" />
                  </h3>
                  <p className={css.contacts__desc}>
                    <Text bind="address-content" />
                  </p>
                </li>
                <li className={css['contacts-list__item']}>
                  <h3 className={css.contacts__title}>
                    <Text bind="phone-title" />
                  </h3>
                  <p className={css.contacts__desc}>
                    <Text bind="phone-content" />
                    <br />
                    <Text bind="skype" />
                  </p>
                </li>
                <li className={css['contacts-list__item']}>
                  <h3 className={css.contacts__title}>
                    <Text bind="email-title" />
                  </h3>
                  <p className={css.contacts__desc}>
                    <Text bind="email-content" />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'ContactForm'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  title: 'КОНТАКТНАЯ ИНФОРМАЦИЯ',
  logo: 'Company Logo',
  'address-title': 'Skype',
  'phone-title': 'Phone',
  'email-title': 'Время работы: 10:00 — 20:00',
  'address-content': 'Украина, г. Киев, ул. Смольная, 9Б БЦ «Глория», 3 этаж, офис 307',
  'phone-content': '+38-067-325-81-46',
  skype: 'Skype: ask@your-best.design',
  'email-content': '* в нерабочее время отправляйте заявку и мы перезвоним Вам как только увидим ее',
  formTitle: 'ОСТАЛИСЬ ВОПРОСЫ?',
  formDesc: 'Оставьте Ваши контакты и мы перезвоним в течении нескольких минут.',
  contactForm: {
    fields: [
      {
        type: 'text',
        id: 'contactForm_name1',
        title: ' ',
        placeholder: 'Ваше имя',
        required: true,
      },
      {
        type: 'phone',
        id: 'contactForm_phoneNumber2 ',
        title: ' ',
        placeholder: 'Номер телефона',
        required: true,
      },
      {
        type: 'textArea',
        id: 'contactForm_email3',
        title: ' ',
        placeholder: 'Укажите какой дизайн вы хотите',
        required: true,
      },
    ],
    submitButton: {
      title: 'ОТПРАВИТЬ ЗАЯВКУ',
    },
    className: 'form',
    buttonClassName: 'button button--size-md button--primary form__button',
  },
}

export default Block
