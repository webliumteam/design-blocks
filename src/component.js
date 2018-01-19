import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Icon}, style: css} = this.props
    return (
      <article className={classNames(css.article, className)}>
        {children}
        <Icon className={css.article__icon} bind={`steps[${index}].icon`} />
        <div className={css.article__content}>
          <h2 className={css.article__title}>
            <Text bind={`steps[${index}].title`} />
          </h2>
          <p className={css.article__text}>
            <Text bind={`steps[${index}].description`} />
          </p>
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          <Collection className={css['articles-wrapper']} bind="steps" Item={this.collectionItem} />
          <h2 className={css.subtitle}>
            <Text bind="description2" />
          </h2>
          <div className={css['btns-group']}>
            <Button
              className={classNames(
                css.button, css['button--primary'],
                css['button--size-md'],
                css['button--custom'],
              )}
              bind="cta"
            />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  theme: 'dark',
  steps: [
    {
      id: '07a5468d-b105-4866-98a5-dcf2cf46db3a',
      title: 'Экономия времени',
      number: '1',
      icon: {
        id: '12748',
        fill: '#AED581',
        preview: 'https://d30y9cdsu7xlg0.cloudfront.net/png/12748-200.png',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="max-width:100%"><g fill="#AED581"><path d="M40.9 64.3L25.4 48.7l2.8-2.8 12.7 12.7 26.9-26.9 2.8 2.9z"/><path d="M48 90C24.8 90 6 71.2 6 48S24.8 6 48 6s42 18.8 42 42-18.8 42-42 42zm0-80c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></g></svg>',
      },
      description:
        'мы создаем индивидуальный проект в котором будут учтены все мелочи',
    },
    {
      id: '12e39a62-f8f4-4bf5-b2a0-5d536eeecd27',
      title: 'Качественный сервис',
      number: '2',
      icon: {
        id: '12748',
        fill: '#AED581',
        preview: 'https://d30y9cdsu7xlg0.cloudfront.net/png/12748-200.png',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="max-width:100%"><g fill="#AED581"><path d="M40.9 64.3L25.4 48.7l2.8-2.8 12.7 12.7 26.9-26.9 2.8 2.9z"/><path d="M48 90C24.8 90 6 71.2 6 48S24.8 6 48 6s42 18.8 42 42-18.8 42-42 42zm0-80c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></g></svg>',
      },
      description:
        'мы умеем слушать и слышать клиента, не настаивая на своих решениях, делаем все максимально так, как хочет заказчик',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3505',
      title: 'Справедливая цена',
      number: '3',
      icon: {
        id: '12748',
        fill: '#AED581',
        preview: 'https://d30y9cdsu7xlg0.cloudfront.net/png/12748-200.png',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="max-width:100%"><g fill="#AED581"><path d="M40.9 64.3L25.4 48.7l2.8-2.8 12.7 12.7 26.9-26.9 2.8 2.9z"/><path d="M48 90C24.8 90 6 71.2 6 48S24.8 6 48 6s42 18.8 42 42-18.8 42-42 42zm0-80c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></g></svg>',
      },
      description:
        'наши цены начинаются от 10$ кв.м. Мы даем гарантии качества',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3509',
      title: '18-летний опыт',
      number: '4',
      icon: {
        id: '12748',
        fill: '#AED581',
        preview: 'https://d30y9cdsu7xlg0.cloudfront.net/png/12748-200.png',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="max-width:100%"><g fill="#AED581"><path d="M40.9 64.3L25.4 48.7l2.8-2.8 12.7 12.7 26.9-26.9 2.8 2.9z"/><path d="M48 90C24.8 90 6 71.2 6 48S24.8 6 48 6s42 18.8 42 42-18.8 42-42 42zm0-80c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></g></svg>',
      },
      description:
        'мы понимаем, что дизайн должен быть не только красивым, но и функциональным',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3506',
      title: 'Полный цикл работ',
      number: '5',
      icon: {
        id: '12748',
        fill: '#AED581',
        preview: 'https://d30y9cdsu7xlg0.cloudfront.net/png/12748-200.png',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="max-width:100%"><g fill="#AED581"><path d="M40.9 64.3L25.4 48.7l2.8-2.8 12.7 12.7 26.9-26.9 2.8 2.9z"/><path d="M48 90C24.8 90 6 71.2 6 48S24.8 6 48 6s42 18.8 42 42-18.8 42-42 42zm0-80c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></g></svg>',
      },
      description:
        'кроме дизайн-проекта, мы занимаемся авторским надзором и производством мебели. У вас не будет болеть об этом голова.',
    },
    {
      id: '5095f30d-1fbc-4809-a8c5-82bb203f3501',
      title: 'Контроль и решение проблем',
      number: '6',
      icon: {
        id: '12748',
        fill: '#AED581',
        preview: 'https://d30y9cdsu7xlg0.cloudfront.net/png/12748-200.png',
        svg:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" style="max-width:100%"><g fill="#AED581"><path d="M40.9 64.3L25.4 48.7l2.8-2.8 12.7 12.7 26.9-26.9 2.8 2.9z"/><path d="M48 90C24.8 90 6 71.2 6 48S24.8 6 48 6s42 18.8 42 42-18.8 42-42 42zm0-80c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17-38-38-38z"/></g></svg>',
      },
      description:
        'мы составляем детальную смету, помогаем с выбором и контролем подрядчика, экономя ваше время',
    },
  ],
  title: 'НАШИ ПРЕИМУЩЕСТВА',
  description:
    'Many people were hoping that if the Democrats won control of Congress they would reverse the online gambling ban, but experts doubt they will even try or that if they do that the will be successful. Once the bill was passed and signed into law.',
  description2:
    'Дизайн-проект - это 20% визуализаций и 80% чертежей - доверьте их профессионалам',
  cta: {
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
    textValue: 'More about out process',
  },
}

export default Block
