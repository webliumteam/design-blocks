import $editor from 'weblium/editor'
import style from '../style.css'

const {
  enhancers: {mapProps},
} = $editor

const withStyle = mapProps(_.set('style', style))

export default withStyle
