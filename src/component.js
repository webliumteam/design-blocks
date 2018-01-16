import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Button}, style: css} = this.props
    const showButtonGroups = this.getModifierValue('primary-btn') || this.getModifierValue('secondary-btn')
    const alignClass = this.getModifierValue('align') !== 'left'
      ? css[`section--${this.getModifierValue('align')}`]
      : ''

    return (
      <section className={classNames(css.section, alignClass)}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          {this.getModifierValue('subtitle') && (
            <p className={css.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
          {showButtonGroups && (
            <div className={css['btns-group']}>
              {this.getModifierValue('primary-btn') && (
                <Button
                  className={classNames(css.button, css['button--primary'], css['button--size-lg'])}
                  bind="cta-1"
                />
              )}
              {this.getModifierValue('secondary-btn') && (
                <Button
                  className={classNames(css.button, css['button--secondary'], css['button--size-lg'])}
                  bind="cta-2"
                />
              )}
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button'])($editor.components)

Block.defaultContent = {
  title: 'Type something',
  subtitle: 'Type something',
  'cta-1': {
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
    textValue: 'Main button (L)',
  },
  'cta-2': {
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
    textValue: 'Additional button (L)',
  },
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Subtitle',
    defaultValue: true,
  },
  {
    id: 'primary-btn',
    type: 'checkbox',
    label: 'Primary button',
    defaultValue: true,
  },
  {
    id: 'secondary-btn',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
  {
    id: 'align',
    type: 'radio-button-group',
    name: 'Aligning',
    defaultValue: 'left',
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
