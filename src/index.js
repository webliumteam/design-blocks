import $editor from 'weblium/editor'

import Component from 'wireframe/component'
import style from './style.css'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps({style}))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
}

export default ExtendedWireframe
