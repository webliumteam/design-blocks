import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text}, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <header className={css.section__header}>
            <h1 className={css.title}>
              <Text bind="title" />
            </h1>
            {this.getModifierValue('subtitle') && (
              <p className={css.subtitle}>
                <Text bind="subtitle" />
              </p>
            )}
          </header>
          {this.getModifierValue('heading') && (
            <h2 className={css.heading}>
              <Text bind="heading" />
            </h2>
          )}
          {this.getModifierValue('subheading') && (
            <p className={css.subheading}>
              <Text bind="subheading" />
            </p>
          )}
          {this.getModifierValue('text') && (
            <p className={css.text}>
              <Text bind="text" />
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
    id: 'text',
    type: 'checkbox',
    label: 'Main text',
    defaultValue: true,
  },
]

export default Block
