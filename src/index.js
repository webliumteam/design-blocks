import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-faq/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  faq: [
    {
      title: 'Alice was beginning to get very tired of sitting by her sister on the bank, and of?',
      description:
        'Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.',
      id: '231733d3-fc14-4e74-8cb2-ba71a90aecdd',
    },
    {
      title: 'Once or twice she had peeped into the book?',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b60',
    },
    {
      title: 'It had no pictures or conversations in it, `and what is the use of a book,\' thought Alice `without pictures or conversation?\'',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b61',
    },
    {
      title: 'So she was considering in her own mind?',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b62',
    },
    {
      title: 'There was nothing so very remarkable in that; nor did Alice think it so very much? ',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b63',
    },
    {
      title: '`Oh dear! Oh dear! I shall be late!’? ',
      description:
        'Click Order button next to the service you want to purchase and leave your contacts in a follow-up form. We will get in touch with shortly to clarify all the details. ',
      id: 'a2479bf5-0f0a-4bda-9f47-1d804ef11b64',
    },
  ],
  title: 'FAQ',
  description:
    'Case nulla deserunt ut eos. Magna persecuti ut vis, ex legimus civibus complectitur mea. Sumo vitae definitionem in nam.',
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" width="20px" height="18px"><path d="M10.7034763,0.0278555305 C5.57498871,0.0278555305 1.41769752,3.86352144 1.41769752,8.59507901 C1.41769752,9.88054176 1.72510158,11.0995034 2.27485327,12.1937698 L0.0783747178,16.1654176 C-0.0437471783,16.3860497 -0.0216252822,16.6582393 0.134266366,16.8564786 C0.25489842,17.0097968 0.437697517,17.0957111 0.626907449,17.0957111 C0.682121896,17.0957111 0.737832957,17.0883973 0.792776524,17.073228 L5.60117381,15.7534989 C7.06537246,16.6437472 8.81860045,17.1623025 10.7034763,17.1623025 C15.8318736,17.1623025 19.9892551,13.3266817 19.9892551,8.59507901 C19.9892551,3.86352144 15.8318736,0.0278555305 10.7034763,0.0278555305 Z M10.6879007,12.9965237 C10.1810384,12.9965237 9.76889391,12.5842438 9.76889391,12.0774718 C9.76889391,11.5706998 10.1811287,11.1584199 10.6879007,11.1584199 C11.194763,11.1584199 11.6069526,11.5707449 11.6069526,12.0774718 C11.6070429,12.5841986 11.1948081,12.9965237 10.6879007,12.9965237 Z M11.6507449,8.62455982 C11.5300226,8.70708804 11.4465914,8.76790068 11.4014447,8.80609481 L11.4014447,9.76645598 C11.4014447,10.1597743 11.0813093,10.4797743 10.6880361,10.4797743 C10.2945824,10.4797743 9.97462754,10.1597743 9.97462754,9.76645598 L9.97462754,8.7317833 C9.97462754,8.04189616 10.4781038,7.69778781 10.8457788,7.44659142 C11.2425734,7.17548533 11.5046953,6.99638826 11.5046953,6.43706546 C11.5046953,5.98672686 11.1384199,5.62036117 10.6880361,5.62036117 C10.2376072,5.62036117 9.87137698,5.98672686 9.87137698,6.43706546 C9.87137698,6.83042889 9.55128668,7.15042889 9.15792325,7.15042889 C8.76455982,7.15042889 8.44446953,6.83042889 8.44446953,6.43706546 C8.44446953,5.20004515 9.45092551,4.19363431 10.687991,4.19363431 C11.924921,4.19363431 12.931377,5.20004515 12.931377,6.43706546 C12.9314673,7.74957111 12.1297517,8.29738149 11.6507449,8.62455982 Z" id="Shape"></path></svg>',
    fill: '#32bbcb',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  'secondary-button': {defaultValue: false, label: 'Secondary button', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'FAQ description', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
