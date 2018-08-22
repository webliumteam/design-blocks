import $editor from 'weblium/editor'
import {updateStatics, withWrapper, evolve} from './utils'

const {
  hoistStatics,
  enhancers: {mapProps},
} = $editor

class ThemeWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    components: PropTypes.object.isRequired,
  }

  checkEnableThemes = () => _.prop('$block.modifier.__enableThemes', this.props)

  enabled = value => (this.checkEnableThemes() ? value : null)

  components = evolve(
    {
      Text: mapProps(_.update(
        'textClassNames',
        _.mergeWith((a, b) => classNames(a, b), {
          'text-block': this.enabled('ui-text-block'),
          'text-content': this.enabled('ui-text-content'),
          'text-left': this.enabled('ui-text-left'),
          'text-center': this.enabled('ui-text-center'),
          'text-right': this.enabled('ui-text-right'),
        }),
      )),
    },
    this.props.components,
  )

  mapProps = _.pipe(
    _.set('$theme.enabled', this.enabled),
    _.set('components', this.components),
  )

  render() {
    return this.props.children(this.mapProps)
  }
}

export default _.compose(
  updateStatics({
    modifierScheme: _.set('__enableThemes', {
      defaultValue: false,
      label: 'Experimental: Enable Themes',
      type: 'checkbox',
      sortOrder: 10001,
      experimental: true,
    }),
  }),
  hoistStatics(withWrapper(ThemeWrapper)),
)
