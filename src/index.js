import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-cta/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  title: {
    ...Component.defaultContent.title,
    content: 'Get in Touch',
    type: 'blockTitle',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'We are available 24/7 by fax, e-mail, or by phone. You can also use our quick contact form to ask a question<br/>about our services and products. We would be happy to answer your questions or offer any help.',
    type: 'subtitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
