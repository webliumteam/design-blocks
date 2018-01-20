import $editor from 'weblium/editor'

import Component from './component'
import style from './style.css'

const {enhancers: {withProps}, hoistStatics} = $editor

const Wireframe = hoistStatics(withProps(_.pipe(_.set('style', style))))(Component)

export default Wireframe
