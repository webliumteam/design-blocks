import withFeatures from './features'
import withOptions from './options'
import withStyle from './style'
import withTheme from './theme'

export default _.compose(
  withFeatures,
  withOptions,
  withStyle,
  withTheme,
)
