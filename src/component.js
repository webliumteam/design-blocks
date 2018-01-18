import $editor from 'weblium/editor'
import classNames from 'classnames'

const {loadFont} = $editor

loadFont(['Rubik', 'Roboto'])

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  };

  getModifierValue = path => _.get(['modifier', path], this.props.$block);

  render() {
    const {components: {Text}, style: css} = this.props
    const alignClass =
      this.getModifierValue('align') !== 'center'
        ? css[`section--${this.getModifierValue('align')}`]
        : ''

    return (
      <section className={classNames(css.section, alignClass)}>
        <div className={css.section__inner}>
          <section className={css.wrapper}>
            {this.getModifierValue('text') && (
              <p className={css.text}>
                <Text bind="text" />
              </p>
            )}
          </section>
          {this.getModifierValue('subheading') && (
            <h2 className={css.subheading}>
              <Text bind="subheading" />
            </h2>
          )}
          {this.getModifierValue('list1') && (
            <h3 className={classNames(css.text, css['text--list'])}>
              <Text bind="list1" />
            </h3>
          )}
          {this.getModifierValue('text2') && (
            <p className={css.text}>
              <Text bind="text2" />
            </p>
          )}
          {this.getModifierValue('list2') && (
            <h3 className={classNames(css.text, css['text--list'])}>
              <Text bind="list2" />
            </h3>
          )}
          {this.getModifierValue('text3') && (
            <p className={css.text}>
              <Text bind="text3" />
            </p>
          )}
          {this.getModifierValue('list3') && (
            <h3 className={classNames(css.text, css['text--list'])}>
              <Text bind="list3" />
            </h3>
          )}
          {this.getModifierValue('text4') && (
            <p className={css.text}>
              <Text bind="text4" />
            </p>
          )}
          {this.getModifierValue('subheading2') && (
            <p className={css.subheading}>
              <Text bind="subheading2" />
            </p>
          )}
          {this.getModifierValue('text5') && (
            <p className={classNames(css.text, css['text--italic'])}>
              <Text bind="text5" />
            </p>
          )}
        </div>
        <button onClick={() => window.history.back()} title="home" className={css['button-home']}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
            <path d="M178.5 140.25v-102L0 216.75l178.5 178.5V290.7c127.5 0 216.75 40.8 280.5 130.05-25.5-127.5-102-255-280.5-280.5z" />
          </svg>
          <span className={css['button-home__label']}>На головну</span>
        </button>
      </section>
    )
  }
}

Block.components = _.pick(['Text'])($editor.components)

Block.defaultContent = {
  title: 'Our Text Title',
  theme: 'dark',
  heading: 'Our Text Heading',
  subtitle:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  subheading:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  subheading2: 'Закликаємо об’єднуватися всіх небайдужих, які ставлять перед собою такі самі цілі.',
  text:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of events that resounded all over Europe; the old regime became, in their imaginary, a paradise lost. This explains why some romantic poets born in the higher classes were keen on seeing themselves as faded aristocrats, expelled from their comfortable milieu by a reverse of fortune or a design of destiny. Byron and Shelley are the prime instances of this vital pose. In The Giaour he writes on a vampiric character: “The common crowd but see the gloom/ Of wayward deeds and fitting doom;/ The close observer can espy/A noble soul, and lineage high.”',
  list1: '1.Незалежний аудит НАБУ.',
  text2:
    'Забезпечити професійний контроль за діяльністю НАБУ - проведення незалежної оцінки (аудиту) ефективності діяльності Національного антикорупційного бюро України. Для цього призначити незалежних членів комісії з числа осіб, які мають значний досвід роботи в органах досудового розслідування, прокуратури, судах, аудиту правоохоронних органів за кордоном чи у міжнародних організаціях, а також мають бездоганну репутацію.',
  list2: '2.Незалежне прослуховування для НАБУ.',
  text3:
    'Внести зміни до Кримінального процесуального кодексу України в частині врегулювання питання надання права Національному бюро на зняття інформації з транспортних телекомунікаційних мереж. Для цього прийняти законопроект №4812 (висновок профільного комітету щодо якого був прийнятий ще 06.07.2016).',
  list3: '3.Вищий антикорупційний суд.',
  text4:
    'Створити Вищий антикорупційний суд із врахуванням усіх рекомендацій Венеціанської комісії від 06.10.2017, зокрема, забезпечити незалежний, прозорий та неупереджений добір суддів за ключової участі міжнародних партнерів.',
  text5:
    'Підписуючи цю Декларацію, особа підтверджує, що не переслідує жодних особистих корисливих чи неправомірних цілей, не представляє інтереси будь-якої політичної партії, іноземної організації, будь-якої третьої сторони та діє виключно від свого імені та в інтересах українського суспільства. Підписант Декларації зобов’язується прикласти усіх зусиль та використати усі надані законодавством можливості для досягнення зазначених вище цілей. Підписант Декларації зобов’язується дотримуватися Конституції та законів України.',
  text6:
    'Підписуючи цю Декларацію, особа підтверджує, що не переслідує жодних особистих корисливих чи неправомірних цілей, не представляє інтереси будь-якої політичної партії, іноземної організації, будь-якої третьої сторони та діє виключно від свого імені та в інтересах українського суспільства. Підписант Декларації зобов’язується прикласти усіх зусиль та використати усі надані законодавством можливості для досягнення зазначених вище цілей. Підписант Декларації зобов’язується дотримуватися Конституції та законів України.',
}

Block.options = {
  invert: true,
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Description',
    defaultValue: true,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Title',
    defaultValue: true,
  },
  {
    id: 'subheading',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: true,
  },
  {
    id: 'subheading2',
    type: 'checkbox',
    label: 'Subtitle-2',
    defaultValue: true,
  },
  {
    id: 'text',
    type: 'checkbox',
    label: 'Main text',
    defaultValue: true,
  },
  {
    id: 'text2',
    type: 'checkbox',
    label: 'Main text-2',
    defaultValue: true,
  },
  {
    id: 'text3',
    type: 'checkbox',
    label: 'Main text-3',
    defaultValue: true,
  },
  {
    id: 'text4',
    type: 'checkbox',
    label: 'Main text-4',
    defaultValue: true,
  },
  {
    id: 'text5',
    type: 'checkbox',
    label: 'Main text-5',
    defaultValue: true,
  },
  {
    id: 'list1',
    type: 'checkbox',
    label: 'List 1',
    defaultValue: true,
  },
  {
    id: 'list2',
    type: 'checkbox',
    label: 'List 2',
    defaultValue: true,
  },
  {
    id: 'list3',
    type: 'checkbox',
    label: 'List 3',
    defaultValue: true,
  },
  {
    id: 'align',
    type: 'radio-button-group',
    name: 'Aligning',
    defaultValue: 'center',
    children: [
      {
        id: 'left',
        label: 'left',
      },
      {
        id: 'center',
        label: 'center',
      },
      {
        id: 'right',
        label: 'right',
      },
    ],
  },
]

export default Block
