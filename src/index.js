import $editor from 'weblium/editor'

import Component from './component'
import style from './style.css'

const {enhancers: {withProps}, hoistStatics} = $editor

const Wireframe = hoistStatics(withProps({style}))(Component)

export default Wireframe
