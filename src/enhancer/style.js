import $editor from 'weblium/editor'
import style from '../style.css'

const {
  hoistStatics,
  enhancers: {mapProps},
} = $editor

export default hoistStatics(mapProps(_.set('style', style)))
