import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Icon}, style} = this.props
    const alignClass =
      this.getModifierValue('align') !== 'center'
        ? style[`section--${this.getModifierValue('align')}`]
        : ''

    return (
      <section className={classNames(style.section, alignClass)}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <div className={style['top-icon-wrapper']}>
              <Icon className={style['top-icon']} bind="topIcon" />
            </div>
          )}
          <header className={style.section__header}>
            {this.getModifierValue('title') && (
              <h1 className={style.title}>
                <Text bind="title" />
              </h1>
            )}
            {this.getModifierValue('subtitle') && (
              <p className={style.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
          {this.getModifierValue('heading') && (
            <h2 className={style.heading}>
              <Text bind="heading" />
            </h2>
          )}
          {this.getModifierValue('subheading') && (
            <p className={style.subheading}>
              <Text bind="subheading" />
            </p>
          )}
          {this.getModifierValue('text') && (
            <p className={style.text}>
              <Text bind="text" />
            </p>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Icon'])($editor.components)

Block.defaultContent = {
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
  },
  title: 'Our Text Title',
  heading: 'Our Text Heading',
  subtitle:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  subheading:
    'Join 13000 clients who already worked with us. Request a quote to get best solutions in your area.',
  text:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of events that resounded all over Europe; the old regime became, in their imaginary, a paradise lost. This explains why some romantic poets born in the higher classes were keen on seeing themselves as faded aristocrats, expelled from their comfortable milieu by a reverse of fortune or a design of destiny. Byron and Shelley are the prime instances of this vital pose. In The Giaour he writes on a vampiric character: “The common crowd but see the gloom/ Of wayward deeds and fitting doom;/ The close observer can espy/A noble soul, and lineage high.”',
}

Block.modifierScheme = [
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Description',
    defaultValue: false,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Title',
    defaultValue: false,
  },
  {
    id: 'subheading',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: false,
  },
  {
    id: 'text',
    type: 'checkbox',
    label: 'Main text',
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
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default Block
