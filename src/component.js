import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        {_.get('number-title')(modifier) && (
          <h2 className={style.item__title}>
            <Text bind={`numbers[${index}].title`} />
          </h2>
        )}
        <div className={style.item__content}>
          <strong className={style.item__number}>
            <Text bind={`numbers[${index}].value`} />
          </strong>
          {_.get('body')(modifier) && (
            <p className={style.item__text}>
              <Text bind={`numbers[${index}].label`} />
            </p>
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
    return (
      <section className={classNames(style.section, {[style['section--without-button']]: !this.getModifierValue('button')})}>
        <div className={style.section__inner}>
          {this.getModifierValue('title') && (
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>)
          }
          <Collection
            className={style['items-wrapper']}
            bind="numbers"
            Item={this.collectionItem}
            fakeHelpers={{
              count: 2,
              className: style.fake,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={classNames(style.button, style['button--secondary'], style['button--size-md'])}
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
    id: 'number-title',
    type: 'checkbox',
    label: 'Additional information on numbers',
    defaultValue: true,
  },
  {
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Numbers description',
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
