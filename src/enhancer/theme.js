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

  mapProps = _.set('$theme.enabled', this.enabled)

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
