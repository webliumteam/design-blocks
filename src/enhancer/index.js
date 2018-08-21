import $editor from 'weblium/editor'
import withOptions from './options'
import withStyle from './style'
import withTheme from './theme'

const {hoistStatics} = $editor

const composeWithHoistStatics = _.pipe(
  Array.of,
  _.map(hoistStatics),
  _.apply(_.compose),
)

export default composeWithHoistStatics(withStyle, withOptions, withTheme)
