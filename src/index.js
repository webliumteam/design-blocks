import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-blog/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-blog/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  blog: [
    {
      ...Component.defaultContent.blog[0],
      category: {
        ...Component.defaultContent.blog[0].category,
        content: 'CREATIVE PROCESS',
      },
      date: {
        ...Component.defaultContent.blog[0].date,
        content: 'SEPTEMBER 22, 2017',
      },
    },
    {
      ...Component.defaultContent.blog[1],
      category: {
        ...Component.defaultContent.blog[1].category,
        content: 'CREATIVE PROCESS',
      },
      date: {
        ...Component.defaultContent.blog[1].date,
        content: 'SEPTEMBER 22, 2017',
      },
    },
    {
      ...Component.defaultContent.blog[2],
      category: {
        ...Component.defaultContent.blog[2].category,
        content: 'CREATIVE PROCESS',
      },
      date: {
        ...Component.defaultContent.blog[2].date,
        content: 'SEPTEMBER 22, 2017',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M0,6.54382812 L0,17.6307812 C0,18.7113281 0.8759375,19.5873047 1.95652344,19.5873047 L18.0434766,19.5873047 C19.1240234,19.5873047 20,18.7113672 20,17.6307812 L20,6.54382812 L0,6.54382812 Z M10.2173828,15.6742578 L3.26085938,15.6742578 C2.90082031,15.6742578 2.60867188,15.3821094 2.60867188,15.0220703 C2.60867188,14.6620313 2.90082031,14.3698828 3.26085938,14.3698828 L10.2173828,14.3698828 C10.5774219,14.3698828 10.8695703,14.6620312 10.8695703,15.0220703 C10.8695703,15.3821094 10.5774219,15.6742578 10.2173828,15.6742578 Z M16.7391406,13.0655469 L3.26085937,13.0655469 C2.90082031,13.0655469 2.60867187,12.7733984 2.60867187,12.4133594 C2.60867187,12.0533203 2.90082031,11.7611719 3.26085937,11.7611719 L16.7391016,11.7611719 C17.0991406,11.7611719 17.3912891,12.0533203 17.3912891,12.4133594 C17.3912891,12.7734375 17.0991797,13.0655469 16.7391406,13.0655469 Z M16.7391406,10.456875 L3.26085937,10.456875 C2.90082031,10.456875 2.60867187,10.1647266 2.60867187,9.8046875 C2.60867187,9.44464844 2.90082031,9.1525 3.26085937,9.1525 L16.7391016,9.1525 C17.0991406,9.1525 17.3912891,9.44464844 17.3912891,9.8046875 C17.3912891,10.1647266 17.0991797,10.456875 16.7391406,10.456875 Z" id="Shape"></path><path d="M18.0434766,0.0220703125 L1.95652344,0.0220703125 C0.8759375,0.0220703125 0,0.898046875 0,1.97859375 L0,5.23945313 L20,5.23945313 L20,1.97859375 C20,0.898046875 19.1240625,0.0220703125 18.0434766,0.0220703125 Z M3.26085938,3.93511719 C2.90070313,3.93511719 2.60867188,3.643125 2.60867188,3.28292969 C2.60867188,2.92277344 2.90066406,2.63074219 3.26085938,2.63074219 C3.62105469,2.63074219 3.91304688,2.92273438 3.91304688,3.28292969 C3.91304688,3.643125 3.62105469,3.93511719 3.26085938,3.93511719 Z M5.86957031,3.93511719 C5.50941406,3.93511719 5.21738281,3.643125 5.21738281,3.28292969 C5.21738281,2.92277344 5.509375,2.63074219 5.86957031,2.63074219 C6.22976562,2.63074219 6.52175781,2.92273438 6.52175781,3.28292969 C6.52175781,3.643125 6.22972656,3.93511719 5.86957031,3.93511719 Z M8.47824219,3.93511719 C8.11808594,3.93511719 7.82605469,3.643125 7.82605469,3.28292969 C7.82605469,2.92277344 8.11804688,2.63074219 8.47824219,2.63074219 C8.83839844,2.63074219 9.13042969,2.92273438 9.13042969,3.28292969 C9.13042969,3.643125 8.8384375,3.93511719 8.47824219,3.93511719 Z" id="Shape"></path></svg>',
    fill: 'brand-color',
  },
  subtitle: {
    ...Component.defaultContent.subtitle,
    content: 'Learn high-level insights from industry experts and opinion leaders. Get to know all the best practices to boost your business.',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'block-button': {defaultValue: true, label: 'Block button', type: 'checkbox'},
  'post-description': {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  'post-image': {defaultValue: false, label: 'Post image', type: 'hidden'},
  'post-link': {defaultValue: false, label: 'Post link', type: 'hidden'},
  'post-publish-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
