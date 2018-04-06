import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        <div className={style.item__desc}>
          <Text bind={`events[${index}].heading`} style={style.item__heading} tagName="h2" />
          <Text bind={`events[${index}].desc-caption`} style={style['item__desc-caption']} tagName="p" />
        </div>
        <time className={style.date}>
          <Text bind={`events[${index}].day`} className={style.date__day} tagName="span" />
          <span className={style.date__text}>
            <Text bind={`events[${index}].month`} className={style.date__month} tagName="span" />
            <Text bind={`events[${index}].week-day`} className={style['date__week-day']} tagName="span" />
          </span>
        </time>
        <div className={style.loc}>
          <Text bind={`events[${index}].address`} className={style.loc__address} tagName="p" />
          <Text bind={`events[${index}].time`} className={style.loc__time} />
        </div>
        <Button
          className={style.button}
          linkClassName={style.link}
          bind={`events[${index}].cta`}
        />
      </div>
    )
  }

  render() {
    const {components: {Text, Button, Collection}, style, $block} = this.props

    return (
      <section className="section">
        <div className="section__inner">
          <div className="section__header">
            <Text bind="title" className={style.title} tagName="h1" />
            {this.getModifierValue('subtitle') && (
              <Text bind="subtitle" className={style.subtitle} tagName="p" />
            )}
          </div>
          <Collection
            className={style['items-wrapper']}
            bind="steps"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                linkClassName={style.link}
                buttonClassName={style.button}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Events',
    type: 'blockTitle',
  },
}

Wireframe.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
}

export default Wireframe
