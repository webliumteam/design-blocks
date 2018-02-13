import $editor from 'weblium/editor'
import classNames from 'classnames'
import {people} from './people.js'

const {loadFont} = $editor

loadFont(['Rubik', 'Roboto'])

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text}, style: css} = this.props
    const alignClass =
      this.getModifierValue('align') !== 'center'
        ? css[`section--${this.getModifierValue('align')}`]
        : ''

    return (
      <section
        className={classNames(
          css.section,
          alignClass,
          this.getModifierValue('group') && css['section--group'],
        )}
      >
        <div className={css.section__inner}>
          <section className={css.wrapper}>
            {this.getModifierValue('listTitle') && (
              <h1 className={css['list-title']}>
                <Text bind="listTitle" />
              </h1>
            )}
            {this.getModifierValue('list') && (
              <ol className={css.list}>
                {people.map(({link, title}) => (
                  <li className={css.list__item}>
                    <span className={css['list__item-inner']}>{title}</span>
                    <a href={link} className={css.list__link} target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123">
                        <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 0 0-1.96 1.961v15.803a1.96 1.96 0 0 0 1.96 1.96H36.57v39.876a1.96 1.96 0 0 0 1.96 1.96h16.352a1.96 1.96 0 0 0 1.96-1.96V54.287h14.654a1.96 1.96 0 0 0 1.96-1.96l.006-15.803a1.963 1.963 0 0 0-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 0 0 1.959-1.96V1.98A1.96 1.96 0 0 0 72.089.02z" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ol>
            )}

            {this.getModifierValue('text') && (
              <p className={css.text}>
                <Text bind="text" />
              </p>
            )}
          </section>
          {this.getModifierValue('titleBlock') && (
            <h1 className={classNames(css.text, css['text--title'])}>
              <Text bind="titleBlock" />
            </h1>
          )}
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
      </section>
    )
  }
}

Block.components = _.pick(['Text'])($editor.components)

Block.defaultContent = {
  title: 'Our Text Title',
  theme: 'dark',
  heading: 'Our Text Heading',
  listTitle: 'Ініціативна група',
  subtitle:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  subheading:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  subheading2: 'Закликаємо об’єднуватися всіх небайдужих, які ставлять перед собою такі самі цілі.',
  titleBlock: 'Ініціативна група',
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

Block.modifierScheme = {
  subtitle: {
    type: 'checkbox',
    label: 'Description',
    defaultValue: true,
  },
  titleBlock: {
    type: 'checkbox',
    label: 'Ініціативна група',
    defaultValue: true,
  },
  heading: {
    type: 'checkbox',
    label: 'Title',
    defaultValue: true,
  },
  subheading: {
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: true,
  },
  subheading2: {
    type: 'checkbox',
    label: 'Subtitle-2',
    defaultValue: true,
  },
  text: {
    type: 'checkbox',
    label: 'Main text',
    defaultValue: true,
  },
  text2: {
    type: 'checkbox',
    label: 'Main text-2',
    defaultValue: true,
  },
  text3: {
    type: 'checkbox',
    label: 'Main text-3',
    defaultValue: true,
  },
  text4: {
    type: 'checkbox',
    label: 'Main text-4',
    defaultValue: true,
  },
  text5: {
    type: 'checkbox',
    label: 'Main text-5',
    defaultValue: true,
  },
  list: {
    type: 'checkbox',
    label: 'Initiators',
    defaultValue: false,
  },
  listTitle: {
    type: 'checkbox',
    label: 'Initiators title',
    defaultValue: false,
  },
  list1: {
    type: 'checkbox',
    label: 'List 1',
    defaultValue: true,
  },
  list2: {
    type: 'checkbox',
    label: 'List 2',
    defaultValue: true,
  },
  group: {
    type: 'checkbox',
    label: 'Group',
    defaultValue: false,
  },
  list3: {
    type: 'checkbox',
    label: 'List 3',
    defaultValue: true,
  },
  align: {
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
}

export default Block
