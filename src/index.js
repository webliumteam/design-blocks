import $editor from 'weblium/editor'

import Component from 'wireframe-master/src/component'
import style from './style.css'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps({style, mods: {showSubtitle: true}}))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: 'Design block title',
}

export default ExtendedWireframe
