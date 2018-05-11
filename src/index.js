import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,

  background: {
    type: 'color',
    color: 'light-shade-color?lighten=-2.75',
  },
  why: [
    {
      title: {
        ...Component.defaultContent.why[0].title,
        content: 'Pick a plan',
      },
      description: {
        ...Component.defaultContent.why[0].description,
        content: 'Compare all available plans to choose the one that will best meet your requirements.',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M65.8 96.8H31.3c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4h1.9c3.3 0 5.5-.9 6.8-2.9.4-.7 1.2-2.7 1.2-8.9V20.3c0-3.9-3.1-7.2-6.9-7.2H32c-3.9 0-6.7.3-8.2.8-2 .7-3.7 2.2-5.1 4.3-1.3 2-2.2 4.6-2.5 8-.1 1.3-1.2 2.2-2.4 2.2-.8 0-1.4-.3-1.9-.7-.5-.5-.7-1.1-.7-1.8V8.5c0-2.9 2.3-5.3 5.2-5.3h64.9c2.9 0 5.2 2.4 5.2 5.3V26c0 .6-.2 1.3-.7 1.8-.5.5-1.1.7-1.7.7-1.4 0-2.4-.9-2.5-2.1-.4-3-1-5.2-1.7-6.5-1.2-2.3-2.8-4-4.8-5.1-2-1.1-4.7-1.7-8.1-1.7h-4.1c-3.8 0-6.9 3.2-6.9 7.2v59.8c0 6.8.9 8.8 1.4 9.5 1.4 1.5 3.6 2.3 6.6 2.3h1.8c1.3 0 2.4 1.1 2.4 2.4 0 1.4-1.1 2.5-2.4 2.5zM31.9 10.7h2.3c5.2 0 9.4 4.3 9.4 9.6v59.8c0 5.4-.5 8.6-1.6 10.3-1.7 2.6-4.7 3.9-8.7 4h29.9c-3.4-.1-6-1.2-7.7-3.2-1.4-1.6-2-5.2-2-11.1V20.3c0-5.3 4.2-9.6 9.4-9.6H67c3.8 0 6.9.7 9.3 2 2.4 1.3 4.4 3.4 5.8 6.1.8 1.6 1.4 3.9 1.9 7.2V8.5c0-1.6-1.2-2.9-2.8-2.9H16.4c-1.5 0-2.8 1.3-2.8 2.9V26c.4-3.7 1.4-6.7 3-9 1.7-2.6 3.8-4.3 6.3-5.3 1.8-.6 4.8-1 9-1z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        ...Component.defaultContent.why[1].title,
        content: 'Make a payment',
      },
      description: {
        ...Component.defaultContent.why[1].description,
        content: 'Choose the most suitable payment method. We guarantee the security of all payments.',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M92.5 45h-65c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h65c1.4 0 2.5-1.1 2.5-2.5S93.9 45 92.5 45zM27.5 65h55c1.4 0 2.5-1.1 2.5-2.5S83.9 60 82.5 60h-55c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5zM92.5 75h-65c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h65c1.4 0 2.5-1.1 2.5-2.5S93.9 75 92.5 75zM82.5 90h-55c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h55c1.4 0 2.5-1.1 2.5-2.5S83.9 90 82.5 90zM92.5 10h-65c-1.4 0-2.5 1.1-2.5 2.5v20c0 1.4 1.1 2.5 2.5 2.5h65c1.4 0 2.5-1.1 2.5-2.5v-20c0-1.4-1.1-2.5-2.5-2.5zM90 30H30V15h60v15zM5.7 34.3c.5.5 1.2.7 1.8.7s1.3-.2 1.8-.7l10-10c1-1 1-2.6 0-3.5l-10-10c-1-1-2.6-1-3.5 0-1 1-1 2.6 0 3.5l8.2 8.2-8.2 8.2c-1 1-1 2.6-.1 3.6z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      title: {
        ...Component.defaultContent.why[2].title,
        content: 'Enjoy our products',
      },
      description: {
        ...Component.defaultContent.why[2].description,
        content: 'Get access to all available features and start attracting clients straight away.',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M37.583 50.916c6.243 0 11.084-7.66 11.084-14.25 0-6.755-4.973-12.25-11.084-12.25S26.5 29.911 26.5 36.666c0 6.59 4.841 14.25 11.083 14.25zm0-23.5c4.458 0 8.084 4.149 8.084 9.25 0 5.063-3.73 11.25-8.084 11.25-4.353 0-8.083-6.187-8.083-11.25 0-5.101 3.625-9.25 8.083-9.25z"/><path d="M82.657 67.74c-.201-12.531-9.199-22.657-20.24-22.657-6.896 0-12.989 3.958-16.646 9.979-2.505-1.27-5.274-1.98-8.188-1.98-11.057 0-20.067 10.156-20.242 22.715-.001.041-.008.078-.008.119v1.168c0 3.584 2.916 6.5 6.5 6.5h27.5c3.584 0 6.5-2.916 6.5-6.5v-1.168c0-.059-.008-.117-.01-.176-.001-.053-.005-.104-.006-.156h18.35c3.584 0 6.5-2.916 6.5-6.5v-1.168c0-.059-.008-.117-.01-.176zM54.763 77.775a3.504 3.504 0 0 1-3.43 2.809h-27.5a3.499 3.499 0 0 1-3.245-2.207c-.083-.043-.156-.098-.233-.146.022.004.048.002.07.006-.06-.68-.092-1.371-.092-2.07 0-11.074 7.738-20.084 17.25-20.084s17.25 9.01 17.25 20.084c0 .542-.033 1.075-.07 1.608zm24.834-8a3.504 3.504 0 0 1-3.43 2.809H57.578c-.923-6.718-4.393-12.481-9.246-15.965 3.125-5.154 8.267-8.536 14.085-8.536 9.512 0 17.25 9.009 17.25 20.083 0 .543-.033 1.076-.07 1.609zM62.417 42.916c6.242 0 11.084-7.66 11.084-14.25 0-6.755-4.973-12.25-11.084-12.25s-11.084 5.495-11.084 12.25c0 6.59 4.842 14.25 11.084 14.25zm0-23.5c4.457 0 8.084 4.149 8.084 9.25 0 5.064-3.73 11.25-8.084 11.25s-8.084-6.186-8.084-11.25c0-5.101 3.627-9.25 8.084-9.25z"/></svg>',
        fill: 'brand-color',
      },
    },
  ],
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  title: {defaultValue: false, label: 'Block title', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  icon: {defaultValue: true, label: 'Advantage icon', type: 'checkbox'},
  button: {defaultValue: false, label: 'Primary button', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
}

export default ExtendedWireframe
