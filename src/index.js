import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-about/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-about/src/options.json'
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
    resourceRef: 'bg.jpg',
  },
  topIcon: {
    svg: `
      <svg id="targetWapper" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050.7 768.7">
       <defs>
        <path id="targetPath" fill="none" stroke="none" stroke-miterlimit="10" d="M30.4 623.9l25-54.2 425-202.8-206.9-8.3L320 505.8l191 34.7-480.6 83.4z"/>
       </defs>
        <foreignObject id="targetObject" width="61" height="61">
          <style>
            #target,
            #target path {
              fill: currentColor;
            }
          </style>
          <svg id="target" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612" width="61" height="61"><path fill="currentColor" d="M0 48.316v80.526h32.21V48.316c0-8.874 7.231-16.105 16.105-16.105h80.526V0H48.316C21.678 0 0 21.678 0 48.316zM563.685 0h-80.526v32.21h80.526c8.874 0 16.104 7.231 16.104 16.105v80.526H612V48.316C612 21.678 590.322 0 563.685 0zM32.21 563.685v-80.526H0v80.526C0 590.322 21.678 612 48.316 612h80.526v-32.211H48.316c-8.874 0-16.106-7.23-16.106-16.104zm547.579 0c0 8.874-7.23 16.104-16.104 16.104h-80.526V612h80.526C590.322 612 612 590.322 612 563.685v-80.526h-32.211v80.526zM322.105 209.368h-32.211v80.526h-80.526v32.211h80.526v80.526h32.211v-80.526h80.526v-32.211h-80.526v-80.526z"/></svg>
        </foreignObject>
      </svg>
    `,
    fill: 'currentColor',
  },
  title: {
    ...Component.defaultContent.title,
    type: 'heroTitle',
  },
  'top-caption': {
    ...Component.defaultContent['top-caption'],
    type: 'blockTitle',
  },
  text: {
    ...Component.defaultContent.text,
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  align: {
    ...Component.modifierScheme.align,
    type: 'hidden',
  },
  heading: {defaultValue: false, label: 'Company title', type: 'hidden'},
  subheading: {defaultValue: false, label: 'Company description', type: 'hidden'},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'hidden'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: false, label: 'Additional button', type: 'hidden'},
  'top-caption': {defaultValue: true, label: 'Top caption', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
