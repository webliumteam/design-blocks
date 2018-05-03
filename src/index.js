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
    color: '#f7f7f7',
  },
  title: {
    content: 'Why Choose Us',
    type: 'blockTitle',
  },
  why: [
    {
      title: {
        content: 'First Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="51" height="47" viewBox="0 0 51 47"><image id="pedestal.svg" width="51" height="47" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAvCAMAAAB5awL4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABg1BMVEUAAAD/zlT/zlT/zlT2u0L2u0L2u0L+zFL2u0L2u0L2u0L2u0L2u0L2u0L2u0L+zVP2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L2u0L+zFL/zVP2u0L2u0L2u0L2u0L2u0L2u0L2u0L9y1H+zFL3vEP/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT/zlT2u0L2u0JDSlRDSlRDSlRQUlNRU1NDSlRDSlRDSlT/zlT/zlS/oVS8n1T/zlT/zlT/zlT/zlT/zlT8blH8blH8blH/zVT8blH8blH8dVH8blH8blH8blFDSlRDSlTTZlLYZ1JDSlRDSlRDSlRDSlRDSlT/zlT2u0L+zFL8yVHxuUb7yFDzu0joqj3xuEbyukfxt0b8x03vtUT5xU79yU/5wUf6w0n2vENZWFJDSlS5nVT8blH/yFT8dFHZZ1LcsFTctVTZbFIAAACljBQWAAAAZHRSTlMAjeCiApzA96gJGzPnsnDuo/kInaW1Ojkk/FPDyLHYBDX77fRKc41/lgM+7/ZOIOr1LyXU3jEEZMD8/chwCZCge97g8vOO3fBYoPP5Z+4L8BABHCDyodDTge3wDDDZ8xDN5avEbZFM/wAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBBIPOB8JA9/OAAABP0lEQVRIx+3RZVPDMBjA8TCg+HB3d3cdBB2uw4b3AcZwG85Xp3asKVzylBe7427/F+1dkt+lSQn5UYTDXCTB5JCZRMujoiVJimGNMhIbxzHxoHTMGnUogbdRIiQ5k7WlJ6c+3ThTIDWNZ9JBMs5z5j83zpMBmdwDZQFk6+bCf6mbnFzI499CPhRYTCEUFfNNSSmUGUb/tnKACtF1V8KVttZ3faO9b6FK/Eur75irvq+pFRtSV28iDY0IodTU/E1aWnGEkLZ2g3R0YgkhXd09vXJf/8AgnqgNPbjsAdWALTM8QikdfRxTnnQcaSYCwSaRhobETLmnn4LNuGcRZk62NC82C1azGDa/mqXlFXOrGLP2zPSCMZ5/bNY95jZQ5pWZ3vyD2QqbkJpt784b0/uHpU9mete7R/YDdjsgh7bN0RcvhPh7kbP7YwAAAABJRU5ErkJggg=="/></svg>',
      },
    },
    {
      title: {
        content: 'Second Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" height="51" viewBox="0 0 36 51"><image id="watches.svg" width="36" height="51" xlink:href="data:img/png;base64,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"/></svg>',
      },
    },
    {
      title: {
        content: 'Third Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="51" viewBox="0 0 45 51"><image id="envelope.svg" width="45" height="51" xlink:href="data:img/png;base64,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"/></svg>',
      },
    },
    {
      title: {
        content: 'Fourth Reason',
        type: 'heading',
      },
      description: {
        content: 'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning ',
        type: 'text',
        brightness: 40,
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52" height="46" viewBox="0 0 52 46"><image id="paper-plane.svg" width="52" height="46" xlink:href="data:img/png;base64,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"/></svg>',
      },
    },
  ],
  button: {
    ...Component.defaultContent.button,
    textValue: 'Main button (L)',
    type: 'primary',
    size: 'lg',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  'button-secondary': {defaultValue: false, label: 'Additional button', type: 'hidden'},
}

export default ExtendedWireframe
