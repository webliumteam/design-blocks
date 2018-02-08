import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-faq/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  faq: [
    {
      title: 'Alice was beginning to get very tired of sitting by her sister on the bank, and of?',
      description:
        'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.',
      id: '231733d3-fc14-4e74-8cb2-ba71a90aecdd',
    },
    {
      title: 'Once or twice she had peeped into the book?',
      description:
        'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b60',
    },
    {
      title: "It had no pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?'",
      description:
        'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b61',
    },
    {
      title: 'Once or twice she had peeped into the book?',
      description:
        'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b62',
    },
    {
      title: 'There was nothing so very remarkable in that; nor did Alice think it so very much?',
      description:
        'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b63',
    },
    {
      title: '`Oh dear! Oh dear! I shall be late?’ ',
      description:
        'So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy- chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b64',
    },
  ],
  title: 'FAQ',
  description:
    'Alice was beginning to get very tired of sitting by her sister <br>on the bank, and of having nothing',
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
    textValue: 'Medium button',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

ExtendedWireframe.modifierScheme = []

export default ExtendedWireframe
