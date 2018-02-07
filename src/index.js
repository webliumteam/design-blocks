import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-pricing/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Comment.defaultContent,
  background: {
    type: 'image',
    position: {
      type: 'cover',
      cover: '70% 100%',
    },
    resourceRef: 'paint-bg.jpg',
  },
  'plan-list-1': [
    {
      id: 'f94f2f82-0727-4237-9f19-97a34f210e55',
      text: 'No Floor Plan Design',
    },
    {
      id: '51b10491-1f3f-4a36-ac3f-e295f010589a',
      text: 'Default Materials',
    },
    {
      id: '0e123e72-fccb-48d7-ba4f-5107126f7fd3',
      text: 'Up to 3 Rooms',
    },
    {
      id: '0e321e72-fccb-48d7-ba4f-5107126f7fd3',
      text: 'Basic Consultancy',
    },
  ],
  'plan-list-2': [
    {
      id: 'f94f2f82-0727-4237-9f19-97a3gfx10e55',
      text: 'Floor Plan Design',
    },
    {
      id: '51b10491-1f3f-4a36-ac3f-e295jxgfxj0589a',
      text: 'Premium Materials',
    },
    {
      id: '0e123e72-fccb-48d7-ba4f-51071jgfxf7fd3',
      text: 'Up to 5 Rooms',
    },
    {
      id: '0e321e72-fccb-48d7-ba4f-510jgfx6f7fd3',
      text: 'Unlimited Channels',
    },
    {
      id: '0e321e72-fccb-48d7-ba4f-510ngxf6f7fd3',
      text: 'Premium Consultancy',
    },
    {
      id: '241e72-fccb-48d7-ba4f-510jgfx6f7fd3',
      text: '24/7 Customer Support',
    },
  ],
  'plan-list-3': [
    {
      id: 'f94f2f82-0727-4237-9f19-97a3gbf1d650e55',
      text: 'Floor Plan Design',
    },
    {
      id: '51b10491-1f3f-4a36-ac3f-e295jxngfj0589a',
      text: 'Free Materials',
    },
    {
      id: '0e123e72-fccb-48d7-ba4f-51071jgfxf7fd3',
      text: 'Up to 10 Rooms',
    },
    {
      id: '0e321e72-fccb-48d7-ba4f-510ngxf6f7fd3',
      text: 'Pro Consultancy',
    },
  ],
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: 'Pricing',
  'plan-title-1': 'Basic',
  'plan-title-2': 'Premium',
  'plan-title-3': 'Pro',
  'plan-icon-1': {
    id: '12345',
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
  },
  'plan-icon-2': {
    id: '12345',
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
  },
  'plan-icon-3': {
    id: '12345',
    svg:
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 16'><path d='M22.48 1.054L5.808 12.977 3.245 4.833l3.055 2.1c.437.297 1.02.262 1.416-.083l4.803-4.186 2.45 2.072 1.93-1.374L13.255.274c-.437-.366-1.076-.366-1.506.007L6.87 4.537 1.807 1.06C1.398.78.864.793.468 1.076c-.395.29-.562.8-.416 1.27l4.026 12.83c.11.35.39.628.736.745.118.042.243.062.368.062.236 0 .472-.076.673-.214L21.23 4.77l-2.102 8.18-3.415-2.356-1.986 1.423 5.456 3.758c.306.214.7.262 1.056.13.353-.13.616-.427.714-.786L24.25 2.283c.12-.463-.07-.96-.464-1.23-.396-.262-.91-.262-1.305 0z'></path></svg>",
  },
  description: '100% money back guarantee. Cancel if you are not satisfied',
  'plan-price-text-1': 'For all period',
  'plan-price-text-2': 'per month',
  'plan-price-text-3': 'per month',
  'plan-price-count-1': 'Free',
  'plan-price-count-2': '$50',
  'plan-price-count-3': '$100',
  'plan-cta-1': {
    type: 'secondary',
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Select plan',
  },
  'plan-cta-2': {
    type: 'primary',
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Select plan',
  },
  'plan-cta-3': {
    type: 'secondary',
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Select plan',
  },
  cta: {
    actionConfig: {
      action: 'link',
      actions: {
        link: {
          type: '',
          innerPage: '',
          url: '',
        },
      },
    },
    textValue: 'Additional button (M)',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'additional-btn': {defaultValue: false, label: 'Secondary button', type: 'hidden'},
  'block-title': {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'plan-additional-info': {
    defaultValue: true,
    label: 'Product additional information',
    type: 'checkbox',
  },
  'plan-button': {defaultValue: true, label: 'Package button', type: 'checkbox'},
  'plan-description': {defaultValue: true, label: 'Product description', type: 'checkbox'},
  'plan-icon': {defaultValue: false, label: 'Product icon', type: 'hidden'},
  'plan-price': {defaultValue: true, label: 'Product price', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
