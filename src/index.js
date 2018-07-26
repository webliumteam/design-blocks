import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-pricing_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-zapdos-pricing_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  leftBackground: {
    type: 'color',
    color: '#f7f7f7',
  },
  centerBackground: {
    type: 'color',
    color: 'brand-color',
  },
  rightBackground: {
    type: 'color',
    color: '#f7f7f7',
  },
  'plan-icon-1': {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M50,23c11.9,0,22.2,8.5,24.6,20.3l0.5,2.3l2.3,0.1C85.6,46.2,92,53,92,61.2C92,69.9,84.9,77,76.2,77H27.5   C16.7,77,8,68.3,8,57.5c0-10,7.5-18.3,17.4-19.3L27,38l0.7-1.4C32.1,28.2,40.6,23,50,23 M50,20c-10.9,0-20.2,6.2-24.9,15.2   C13.8,36.3,5,45.9,5,57.5C5,69.9,15.1,80,27.5,80h48.8C86.6,80,95,71.6,95,61.2c0-9.9-7.7-18-17.4-18.6C74.9,29.8,63.7,20,50,20   L50,20z"></path></g></svg>',
    fill: 'brand-color',
  },
  'plan-icon-2': {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><g><g><path d="M7.5,17.035c-0.777,0-1.51-0.303-2.061-0.854l-4.232-4.232C0.429,11.17,0,10.135,0,9.035S0.429,6.899,1.207,6.12    l4.879-4.879C6.853,0.474,7.915,0.035,9,0.035s2.147,0.44,2.914,1.207l4.232,4.232C16.697,6.024,17,6.756,17,7.535    s-0.303,1.511-0.854,2.061l-6.586,6.586C9.01,16.731,8.277,17.035,7.5,17.035z M9,1.035c-0.822,0-1.626,0.333-2.207,0.914    L1.914,6.828C1.324,7.417,1,8.201,1,9.035s0.324,1.617,0.914,2.207l4.232,4.232c0.725,0.723,1.982,0.723,2.707,0l6.586-6.586    C15.801,8.527,16,8.046,16,7.535s-0.199-0.992-0.561-1.354l-4.232-4.232C10.626,1.368,9.822,1.035,9,1.035z"></path></g><g><path d="M4.5,10.034c-0.384,0-0.769-0.146-1.061-0.438c-0.585-0.585-0.585-1.536,0-2.121l4-4c0.584-0.585,1.537-0.585,2.121,0    c0.585,0.585,0.585,1.536,0,2.121l-4,4C5.269,9.888,4.884,10.034,4.5,10.034z M8.5,4.035c-0.128,0-0.256,0.048-0.354,0.146l-4,4    c-0.195,0.195-0.195,0.512,0,0.707c0.195,0.195,0.512,0.195,0.707,0l4-4c0.195-0.195,0.195-0.512,0-0.707    C8.756,4.083,8.628,4.035,8.5,4.035z"></path></g><g><path d="M23.5,24.035H20c-0.133,0-0.26-0.053-0.354-0.146l-0.854-0.854H17.5c-0.276,0-0.5-0.224-0.5-0.5v-1.293l-2.207-2.207H13.5    c-0.276,0-0.5-0.224-0.5-0.5v-1.293l-1-1l-0.646,0.646c-0.195,0.195-0.512,0.195-0.707,0l-1-1c-0.195-0.195-0.195-0.512,0-0.707    s0.512-0.195,0.707,0L11,15.828l0.646-0.646c0.195-0.195,0.512-0.195,0.707,0l1.5,1.5C13.947,16.775,14,16.902,14,17.035v1h1    c0.133,0,0.26,0.053,0.354,0.146l2.5,2.5C17.947,20.775,18,20.902,18,21.035v1h1c0.133,0,0.26,0.053,0.354,0.146l0.854,0.854H23    v-2.793l-7.854-7.854c-0.195-0.195-0.195-0.512,0-0.707l0.646-0.646l-0.646-0.646c-0.195-0.195-0.195-0.512,0-0.707    s0.512-0.195,0.707,0l1,1c0.195,0.195,0.195,0.512,0,0.707l-0.646,0.646l7.646,7.646C23.947,19.775,24,19.902,24,20.035v3.5    C24,23.811,23.776,24.035,23.5,24.035z"></path></g><g><path d="M21,21.535c-0.128,0-0.256-0.049-0.354-0.146l-7-7c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0l7,7    c0.195,0.195,0.195,0.512,0,0.707C21.256,21.486,21.128,21.535,21,21.535z"></path></g></g></svg>',
    fill: 'currentColor',
  },
  'plan-icon-3': {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" x="0px" y="0px" viewBox="0 0 128 128" xml:space="preserve"><g><path fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" d="M55,90h67c2.2,0,4-1.8,4-4V16c0-2.2-1.8-4-4-4H6   c-2.2,0-4,1.8-4,4v70c0,2.2,1.8,4,4,4h7"></path><circle cx="64" cy="20" r="2"></circle><line fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" x1="55" y1="106" x2="88" y2="106"></line><path fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" d="M77,90l0.9,11c0,0,0,3,4,5"></path><circle fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" cx="64" cy="82" r="2"></circle></g><path fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" d="M22,116h24c4.4,0,8-3.6,8-8V63c0-4.4-3.6-8-8-8H22  c-4.4,0-8,3.6-8,8v45C14,112.4,17.6,116,22,116z"></path><path fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" d="M34,79L34,79c2.2,0,4,1.8,4,4v15c0,2.2-1.8,4-4,4  l0,0c-2.2,0-4-1.8-4-4V83C30,80.8,31.8,79,34,79z"></path><line fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" x1="34" y1="108" x2="34" y2="115"></line><line fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" x1="27" y1="108" x2="27" y2="115"></line><line fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" x1="41" y1="108" x2="41" y2="115"></line><circle fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="10" cx="34" cy="67" r="4"></circle></svg>',
    fill: 'brand-color',
  },
  'plan-cta-1': {
    ...Component.defaultContent['plan-cta-1'],
    type: 'secondary',
  },
  'plan-cta-2': {
    ...Component.defaultContent['plan-cta-2'],
    textValue: 'Request a quote',
    type: 'secondary',
  },
  'plan-cta-3': {
    ...Component.defaultContent['plan-cta-3'],
    type: 'secondary',
  },
  'plan-price-count-1': {
    ...Component.defaultContent['plan-price-count-1'],
    type: 'heroTitle',
  },
  'plan-price-count-2': {
    ...Component.defaultContent['plan-price-count-2'],
    type: 'heroTitle',
  },
  'plan-price-count-3': {
    ...Component.defaultContent['plan-price-count-3'],
    type: 'heroTitle',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-btn': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'plan-icon': {defaultValue: true, label: 'Product icon', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
}

export default ExtendedWireframe
