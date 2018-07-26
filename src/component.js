import $editor from 'weblium/editor'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {
      components: {Image},
      style,
    } = this.props

    return (
      <div className={classNames(style.item, className)}>
        {children}
        <Image bind={`collection[${index}].item_image`} />
      </div>
    )
  }

  ui = value => (_.get('$block.modifier.__enableThemes', this.props) ? value : null)

  render() {
    const {
      components: {Text, Button, Collection},
      style,
    } = this.props

    return (
      <section className={classNames(style.section, this.ui('ui-section'))}>
        <div className={classNames(style.section__inner, this.ui('ui-section__inner'))}>
          <header className={classNames(style.section__header, this.ui('ui-section__header'))}>
            <Text
              bind="title"
              className={classNames(style.title, this.ui('ui-title'), this.ui('ui-text-center'))}
              tagName="h2"
            />
            {this.getModifierValue('subtitle') && (
              <Text
                bind="subtitle"
                className={classNames(
                  style.subtitle,
                  this.ui('ui-subtitle'),
                  this.ui('ui-text-center'),
                )}
                tagName="p"
              />
            )}
          </header>
          <div className={classNames(this.ui('ui-section__content'))}>
            <Collection
              className={classNames(style['items-wrapper'])}
              bind="collection"
              Item={this.collectionItem}
            />
          </div>
          <footer className={classNames(style.section__footer, this.ui('ui-section__footer'))}>
            <div className={classNames(this.ui('ui-btns-group'))}>
              <div className={classNames(this.ui('ui-btns-group__inner'))}>
                <Button className={classNames(this.ui('ui-btns-group__item'))} bind="button" />
                <Button
                  className={classNames(this.ui('ui-btns-group__item'))}
                  bind="button_additional"
                />
              </div>
            </div>
          </footer>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'Collection', 'Image'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Hello world',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Type here something',
    type: 'subtitle',
  },
  collection: {
    items: [
      {
        item_image: {
          src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        },
      },
    ],
  },
  button: {
    textValue: 'Request a quote',
  },
  button_additional: {
    type: 'secondary',
    textValue: 'Learn More',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default Wireframe
