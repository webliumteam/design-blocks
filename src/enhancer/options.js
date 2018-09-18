import $editor from 'weblium/editor'
import options from '../options.json'

const {
  hoistStatics,
  enhancers: {mapProps},
} = $editor

export default hoistStatics(mapProps(_.update('$block.options', _.assign(options))))
