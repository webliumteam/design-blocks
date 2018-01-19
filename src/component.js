import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <article className={classNames(css.item, className)}>
        {children}
        <div className={css.item__inner}>
          <Image
            pictureClassName={css.item__pic}
            imgClassName={css.item__img}
            bind={`testimonials[${index}].picture`}
            size={{'max-width: 479px': 300, 'min-width: 768px': 300, 'min-width: 480px': 300}}
          />
          <div className={css.item__contacts}>
            <h2 className={css.item__title}>
              <Text bind={`testimonials[${index}].title`} />
            </h2>
          </div>
          <p className={css.item__position}>
            <Text bind={`testimonials[${index}].position`} />
          </p>
          <p className={css.item__desc}>
            <Text bind={`testimonials[${index}].description`} />
          </p>
          <time className={css.item__time}>
            <Text bind={`testimonials[${index}].date`} />
          </time>
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Text}, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          <p className={css.subtitle}>
            <Text bind="position" />
          </p>
          <Slider className={css['items-wrapper']} bind="testimonials" Item={this.collectionItem} />
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button', 'Image'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  testimonials: [
    {
      id: 'bf40db18-b817-4a19-bd5b-b72cfacce814',
      title: 'ЕКАТЕРИНА',
      position: 'сеть розничных магазинов',
      description:
        "“Наша компания сотрудничала с Your-Best.Design в рамках разработки дизайн проектов бренд зон для сети 'Эпицентр'. Результатом работы довольны, все получилось стильно и функционально.”",
      date: 'October 28, 2017',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'ЕКАТЕРИНА',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      title: 'АННА',
      position: 'сеть ЖК',
      description:
        'Выражаю благодарность компании Your-best.Design за разработку дизайна шоу-румов для нашего жилого комплекса! Отличная работа, всё оперативно и со вкусом! Воплощаем в жизнь!',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'АННА',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f4cc',
      title: 'АЛЕКСАНДР',
      position: 'владелец арт-пространства',
      description:
        'Давно сотрудничаю с компанией Your-Best.Design. Благодарна за оперативность и креативность. Отдельное спасибо за визуализацию нашего арт-пространства! Очень стильно! Именно то, что мы хотели!',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'АЛЕКСАНДР',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-228b72e124cc',
      title: 'ИРИНА',
      position: 'управляющая апарт-отеля',
      description:
        'Была на промо-консультации, которую они предлагают бесплатно. На удивление проконсультировали очень хорошо, предложили много интересных вариантов. чувствуется что люди действительно настоящие профессионалы. Огромное спасибо за уделенное время. В итоге заказали у них все под ключ (с ремонтом и авторским надзором) - остались очень довольны. Они немногие из тех, кто соблюдают все договоренности и даже сроки! Спасибо!',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'ИРИНА',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-228b72e5f4cc',
      title: 'МИХАИЛ',
      position: 'со-владелец ресторана',
      description:
        'Мы делали дизайн-проект с компанией Your-Best.Design, очень понравилось работать с данной компанией, ребята профессионалы, знают свое дело, учитывают все пожелания, дают практические советы, что очень важно, когда сам делаешь ремонт впервые. Качество работ на высоком уровне. Рекомендую!',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'МИХАИЛ',
      },
    },
  ],
  title: 'ОТЗЫВЫ КЛИЕНТОВ',
  theme: 'dark',
  position:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
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
    textValue: 'Additional button (M)',
  },
}

export default Block
