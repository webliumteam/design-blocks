import withOptions from './options'
import withStyle from './style'

export default _.compose(
  withOptions,
  withStyle,
)
