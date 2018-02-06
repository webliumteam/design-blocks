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
          {this.getModifierValue('caption-decorator') && (
            <div className={css['caption-decorator']}>
              <Text bind="topCaption" />
            </div>
          )}
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
                  linkClassName={css.link}
                  buttonClassName={css.button}
                  bind="cta-1"
                />
              )}
              {this.getModifierValue('secondary-btn') && (
                <Button
                  linkClassName={css.link}
                  buttonClassName={css.button}
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
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  title: 'Quantum Company',
  subtitle: 'We can execute even the most unpredictable ideas! ',
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
    textValue: 'Request a quote',
    type: 'primary',
    size: 'lg',
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
    textValue: 'Learn more',
    type: 'secondary',
    size: 'lg',
  },
  topCaption: 'welcome',
}

Block.modifierScheme = {
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
  },
  'caption-decorator': {defaultValue: false, label: 'Pretitle', type: 'hidden'},
  'primary-btn': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'secondary-btn': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  undefined: {type: 'separator'},
}


export default Block
