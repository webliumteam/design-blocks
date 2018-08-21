import $editor from 'weblium/editor'
import options from '../options.json'

const {enhancers: {mapProps}} = $editor

const withOptions = mapProps(_.set('$block.options', options))

export default withOptions
