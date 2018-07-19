import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  ui = value => _.get('$block.modifier.__enableThemes', this.props) ? value : null

  render() {
    const {components: {Text, Button}, style} = this.props
    const headerContent = this.getModifierValue('title') || this.getModifierValue('subtitle')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {headerContent && (
            <div className={style.section__header}>
              {this.getModifierValue('title') && (
                <Text tagName="h1" className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'), this.ui('ui-text-md-left'))} bind="title" />
              )}
              {this.getModifierValue('subtitle') && (
                <Text tagName="p" className={classNames(style.subtitle, this.ui('ui-subtitle'), this.ui('ui-text-center'), this.ui('ui-text-md-left'))} bind="subtitle" />
              )}
            </div>
          )}
          <div className={style['btns-group']}>
            <Button
              className={style.button}
              linkClassName={style.link}
              bind="cta"
            />
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button'])($editor.components)

Wireframe.defaultContent = {
  background: {
    type: 'color',
    color: 'light-accent-color',
  },
  title: {
    content: 'Want to work with us?',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Press the button and receive a full analysis of your business within 2 days!',
    type: 'text',
  },
  cta: {
    textValue: 'Request a quote',
    type: 'primary',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'hidden', sortOrder: 10},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox', sortOrder: 20},
}

export default Wireframe
