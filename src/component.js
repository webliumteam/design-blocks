import $editor from 'weblium/editor'
import DecoratorSvg from './decorator'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)


  render() {
    const {
      components: {Text, Button, Collection},
      style,
    } = this.props

    return (
      <section className={classNames(style.section, 'section')}>
        <div className={classNames(style.section__inner, 'section__inner')}>
          <div className={style.wrapper}>
            <Text
              bind="title"
              className={classNames(style.title, 'title')}
              tagName="h2"
            />
            {this.getModifierValue('subtitle') && (
              <Text
                bind="subtitle"
                className={classNames(style.subtitle, 'subtitle')}
                tagName="p"
              />
            )}
            <Button className={style.btn} bind="button" />
          </div>
          <div className={style['decor-wrapper']}>
            <DecoratorSvg />
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'Collection', 'Image', 'Background'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Your digital agency for 1/10 of cost',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Finally, the website you need at a price you can afford!',
    type: 'subtitle',
  },
  button: {
    textValue: 'Get started for free',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default Wireframe
