import $editor from 'weblium/editor'

class Block extends React.Component {

  getModifierValue(path) {
    return _.get(['modifier', path], this.props.$block)
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text}, style: css} = this.props
    return (
      <div className={classNames(css.item, className)}>
        {children}
        {this.getModifierValue('numbers-title') && (
          <h2 className={css.item__title}>
            <Text bind={`numbers[${index}].title`} />
          </h2>
        )}
        <div className={css.item__content}>
          {this.getModifierValue('numbers') && (
            <strong className={css.item__number}>
              <Text bind={`numbers[${index}].value`} />
            </strong>)
          }
          <p className={css.item__text}>
            <Text bind={`numbers[${index}].label`} />
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, mods, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          {this.getModifierValue('title') && (
            <h1 className={css.title}>
              <Text bind="title" />
            </h1>)
          }
          <Collection
            className={css['items-wrapper']}
            bind="numbers"
            Item={this.collectionItem}
            fakeHelpers={{
              count: 2,
              className: css.fake,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={css['btns-group']}>
              <Button
                className={classNames(css.button, css['button--secondary'], css['button--size-md'])}
                bind="cta"
              />
            </div>)
          }
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button'])($editor.components)

Block.defaultContent = {
  numbers: [
    {
      title: '…send more than',
      label: 'Billion messages',
      value: '180',
      id: '554d7318-3c82-4dd4-87e9-b0b92299199f',
    },
    {
      title: '…to more than',
      label: 'Billion connected devices',
      value: '6.5',
      id: 'aa002eee-2755-4850-b18a-c990cfa03e37',
    },
    {
      title: '…with',
      label: 'Uptime in the last 6 months',
      value: '99.98%',
      id: '84957801-e554-42e1-ab7b-323f483e3f81',
    },
  ],
  title: 'Each month we…',
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
    textValue: 'Medium button',
  },
}

Block.modifierScheme = [
  {
    id: 'numbers-title',
    type: 'checkbox',
    label: 'Numbers title',
    defaultValue: true,
  },
  {
    id: 'numbers',
    type: 'checkbox',
    label: 'Numbers',
    defaultValue: true,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Button',
    defaultValue: true,
  },
]

export default Block
