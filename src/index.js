import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-cover/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-cover/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '50% 50%',
    },
    resourceRef: 'cover-bg.jpg',
    overlay: {
      type: 'color',
      color: 'dark-accent-color',
      opacity: 0.76,
    },
  },
  'cta-1': {
    ...Component.defaultContent['cta-1'],
    type: 'primary',
  },
  'cta-2': {
    ...Component.defaultContent['cta-2'],
    type: 'link',
    iconEnabled: true,
    iconAlignment: 'left',
    icon: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g fill="#fff"><path d="M18.656 5.002c-1.335-2.312-3.49-3.966-6.069-4.657s-5.273-.336-7.585.999A9.93 9.93 0 0 0 .345 7.413a9.93 9.93 0 0 0 .999 7.585 9.93 9.93 0 0 0 6.069 4.657 9.943 9.943 0 0 0 7.585-.998c2.312-1.335 3.966-3.49 4.657-6.069s.336-5.274-.999-7.586zm-.006 7.316a8.898 8.898 0 0 1-4.172 5.437c-2.071 1.196-4.485 1.514-6.795.895s-4.241-2.101-5.437-4.172a8.896 8.896 0 0 1-.895-6.795 8.898 8.898 0 0 1 4.172-5.437 8.9 8.9 0 0 1 6.795-.895 8.898 8.898 0 0 1 5.437 4.172 8.896 8.896 0 0 1 .895 6.795z"/><path d="M14.796 9.057L8.369 5.346a1.077 1.077 0 0 0-1.089 0 1.08 1.08 0 0 0-.545.943v7.421c0 .394.204.746.545.943a1.079 1.079 0 0 0 1.09 0l6.427-3.711a1.08 1.08 0 0 0 .545-.943 1.08 1.08 0 0 0-.546-.942zm-.521.985l-6.427 3.711c-.008.005-.024.014-.048 0s-.024-.033-.024-.042V6.29c0-.009 0-.028.024-.042a.053.053 0 0 1 .025-.007c.011 0 .019.005.024.007l6.427 3.711c.008.005.024.014.024.042 0 .027-.017.036-.025.041zm1.87-4.79a7.851 7.851 0 0 0-5.105-2.948.52.52 0 1 0-.141 1.031 6.8 6.8 0 0 1 4.423 2.553.518.518 0 0 0 .73.093.52.52 0 0 0 .093-.729z"/></g></svg>',
    },
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
}

export default ExtendedWireframe
