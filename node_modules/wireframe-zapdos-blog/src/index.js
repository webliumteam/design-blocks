import $editor from 'weblium/editor'

import Component from './component'
import style from './style.css'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const Wireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

export default Wireframe
