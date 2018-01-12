import $editor from 'weblium/editor'

import Component from 'wireframe-master/src/component'
import style from './style.css'

import mods from './mods.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps({style, mods}))(Component)

export default ExtendedWireframe
