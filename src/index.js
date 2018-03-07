import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-numbers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...ExtendedWireframe.defaultContent,
  numbers: [
    {
      ...ExtendedWireframe.defaultContent.numbers[0],
      title: {
        content: 'Increase <br>profits by',
        type: 'caption',
      },
    },
    {
      ...ExtendedWireframe.defaultContent.numbers[1],
      title: {
        content: 'Expand market <br>reach for',
        type: 'caption',
      },
    },
    {
      ...ExtendedWireframe.defaultContent.numbers[2],
      title: {
        content: 'Improve customer <br>satisfaction for',
        type: 'caption',
      },
    },
  ],
  topIcon: {
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19 20'><g fill-rule='evenodd'><g transform='translate(-951 -14131)' fill-rule='nonzero'><g transform='translate(375 14111)'><g transform='translate(576 20)'><path d='m17.513 1.6666h-7.4999v-0.83332c0-0.4602-0.37312-0.83332-0.83332-0.83332s-0.83332 0.37312-0.83332 0.83332v0.83332h-7.4999c-0.46023 0-0.83332 0.37312-0.83332 0.83332v13.333c0 0.46016 0.37309 0.83332 0.83332 0.83332h3.6516l-1.0637 2.1274c-0.20582 0.41168-0.038984 0.91223 0.37266 1.118 0.41172 0.20582 0.91223 0.038945 1.118-0.37273l1.4364-2.8727h5.6366l1.4363 2.8727c0.14602 0.29207 0.44027 0.4609 0.74598 0.4609 0.12523 0 0.25238-0.028398 0.37199-0.088164 0.41168-0.20582 0.57848-0.70637 0.37266-1.118l-1.0637-2.1274h3.6516c0.46023 0 0.83332-0.37316 0.83332-0.83332v-13.333c3.91e-5 -0.4602-0.37309-0.83332-0.83328-0.83332zm-2.6372 5.3394l-3.9284 3.9283c-0.15629 0.15629-0.36828 0.24406-0.58922 0.24406-0.22105 0-0.43301-0.087852-0.58926-0.24418l-1.7677-1.7678-3.3391 3.3391c-0.16273 0.16277-0.37598 0.24418-0.58922 0.24418-0.21328 0-0.42656-0.081406-0.58922-0.24418-0.32555-0.32539-0.32555-0.85301-3.907e-5 -1.1784l3.9284-3.9284c0.15629-0.15629 0.3682-0.24406 0.58922-0.24406s0.43301 0.087773 0.58926 0.24406l1.7677 1.7678 3.3391-3.3391c0.32543-0.32539 0.85309-0.32539 1.1785 0 0.32543 0.32547 0.32543 0.85309 0 1.1786z'/></g></g></g></g></svg>",
    fill: 'brand-color',
  },
}

ExtendedWireframe.modifierScheme = {
  body: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'number-title': {
    defaultValue: true,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
