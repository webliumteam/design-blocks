import $editor from 'weblium/editor'

import Component from 'wireframe-series-2-why/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-2-why/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path d="M173.077 120.967c-3.9-3.91-10.239-3.91-14.139 0-3.91 3.9-3.91 10.239 0 14.139 3.9 3.91 10.239 3.91 14.139 0 3.91-3.9 3.91-10.239 0-14.139z"/><path d="M427.114 203.03l19.56-40.021c7.155-14.628 1.494-32.056-12.884-39.674l-39.357-20.887-7.695-43.88c-2.806-16.023-17.62-26.787-33.746-24.514l-44.043 6.225-32.002-31.705a2.157 2.157 0 0 0-.084-.082c-11.698-11.323-30.026-11.323-41.725 0a2.157 2.157 0 0 0-.084.082l-32.003 31.705-44.043-6.225c-16.112-2.282-30.939 8.49-33.746 24.512l-7.695 43.882-39.351 20.884c-14.384 7.621-20.045 25.05-12.892 39.673l19.561 40.025-19.56 40.021c-7.155 14.628-1.494 32.056 12.884 39.674l39.357 20.887 7.693 43.871a29.937 29.937 0 0 0 13.065 19.892l-54.489 89.427a10 10 0 0 0 11.127 14.861l44.976-12.051 12.051 44.976a10 10 0 0 0 18.212 2.589l66.162-109.312c5.651 4.907 12.641 7.362 19.632 7.362 6.991 0 13.983-2.456 19.638-7.362l66.162 109.312a9.998 9.998 0 0 0 18.212-2.589l12.051-44.976 44.976 12.051a9.993 9.993 0 0 0 10.592-3.666 9.997 9.997 0 0 0 .535-11.195l-54.486-89.427c6.742-4.433 11.606-11.522 13.063-19.881l7.695-43.882 39.351-20.884c14.384-7.621 20.045-25.05 12.892-39.673l-19.562-40.025zM165.238 476.76l-8.569-31.981c-1.43-5.333-6.912-8.501-12.246-7.07l-30.516 8.176 45.01-73.869.092-.01 44.116-6.234 18.473 17.874-56.36 93.114zm232.856-30.877l-30.517-8.175c-5.337-1.43-10.816 1.737-12.246 7.07l-8.569 31.981-56.359-93.115 18.473-17.875 44.138 6.237.071.008 45.009 73.869zm26.322-180.822l-43.676 23.178a9.99 9.99 0 0 0-5.161 7.104l-8.541 48.706c-.911 5.229-5.799 8.908-11.248 8.154l-48.955-6.919a9.99 9.99 0 0 0-8.352 2.714l-35.523 34.374a9.974 9.974 0 0 1-13.913.007l-35.531-34.381a10.002 10.002 0 0 0-8.352-2.714c-51.167 7.144-49.16 7.15-51.179 6.984l-.018-.001a9.964 9.964 0 0 1-9.009-8.229l-8.539-48.695a9.996 9.996 0 0 0-5.161-7.104l-43.682-23.181c-4.789-2.538-6.672-8.344-4.287-13.223l21.708-44.416a9.997 9.997 0 0 0 0-8.78l-21.71-44.42a9.95 9.95 0 0 1 4.295-13.222l43.676-23.178a9.99 9.99 0 0 0 5.161-7.104l8.539-48.697a9.949 9.949 0 0 1 11.25-8.163l48.955 6.919a9.995 9.995 0 0 0 8.437-2.798l35.48-35.15a9.96 9.96 0 0 1 13.837 0l35.48 35.15a9.988 9.988 0 0 0 8.437 2.798l48.955-6.919a9.952 9.952 0 0 1 11.25 8.165l8.539 48.695a9.996 9.996 0 0 0 5.161 7.104L424.421 141a9.95 9.95 0 0 1 4.288 13.223l-21.708 44.416a9.997 9.997 0 0 0 0 8.78l21.71 44.42a9.95 9.95 0 0 1-4.295 13.222z"/><path d="M275.998 198.03h-9.999v-39.996h9.999c5.513 0 9.999 4.486 9.999 9.999 0 5.521 4.478 9.999 9.999 9.999s9.999-4.478 9.999-9.999c0-16.54-13.457-29.997-29.997-29.997h-9.999v-9.999c0-5.521-4.478-9.999-9.999-9.999-5.521 0-9.999 4.478-9.999 9.999v9.999h-9.999c-16.54 0-29.997 13.457-29.997 29.997v19.998c0 16.54 13.457 29.997 29.997 29.997H246v39.996h-9.999c-5.513 0-9.999-4.486-9.999-9.999 0-5.521-4.478-9.999-9.999-9.999-5.521 0-9.999 4.478-9.999 9.999 0 16.54 13.457 29.997 29.997 29.997H246v9.999c0 5.521 4.478 9.999 9.999 9.999 5.521 0 9.999-4.478 9.999-9.999v-9.999h9.999c16.54 0 29.997-13.457 29.997-29.997v-19.998c.001-16.54-13.456-29.997-29.996-29.997zm-29.998 0h-9.999c-5.513 0-9.999-4.486-9.999-9.999v-19.998c0-5.513 4.486-9.999 9.999-9.999H246v39.996zm39.997 49.995c0 5.513-4.486 9.999-9.999 9.999h-9.999v-39.996h9.999c5.513 0 9.999 4.486 9.999 9.999v19.998z"/><path d="M255.999 78.042c-22.224 0-44.168 5.714-63.462 16.524-4.818 2.699-6.535 8.793-3.836 13.61 2.7 4.82 8.795 6.534 13.61 3.836 16.314-9.141 34.88-13.973 53.687-13.973 60.648 0 109.99 49.341 109.99 109.989s-49.341 109.99-109.99 109.99c-60.648 0-109.989-49.341-109.989-109.99 0-14.573 2.802-28.723 8.327-42.058 2.114-5.102-.308-10.951-5.409-13.065-5.104-2.113-10.951.308-13.065 5.409-6.536 15.772-9.851 32.499-9.851 49.713 0 71.676 58.311 129.988 129.988 129.988 71.676 0 129.988-58.311 129.988-129.988S327.676 78.042 255.999 78.042z"/></svg>',
        fill: 'brand-color',
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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462 66H50C22.43 66 0 88.43 0 116v280c0 27.57 22.43 50 50 50h412c27.57 0 50-22.43 50-50V116c0-27.57-22.43-50-50-50zm-11.197 20l-34 34H241.254c-5.523 0-10 4.478-10 10s4.477 10 10 10h155.549l-28 28h-73.976c-5.523 0-10 4.478-10 10s4.477 10 10 10h53.976l-48.901 48.901c-24.208 24.207-63.596 24.207-87.804 0L61.197 86h389.606zM462 426H50a29.813 29.813 0 0 1-13.703-3.326l47.629-47.629c3.905-3.905 3.905-10.237 0-14.142a9.968 9.968 0 0 0-7.071-2.929 9.97 9.97 0 0 0-7.071 2.929L22.567 408.12A29.82 29.82 0 0 1 20 396V116c0-11.61 6.634-21.693 16.306-26.678.211.258.437.509.678.75L188.8 241.887l-63.146 63.146c-3.905 3.905-3.905 10.237 0 14.143 3.905 3.906 10.237 3.905 14.143 0l63.374-63.375c30.431 25.635 75.228 25.635 105.66 0l166.873 166.874A29.832 29.832 0 0 1 462 426zm30-30a29.82 29.82 0 0 1-2.567 12.12L323.201 241.886 475.017 90.071c.241-.241.466-.491.678-.75C485.366 94.307 492 104.39 492 116v280z"/><path d="M207.4 122.931a10.055 10.055 0 0 0-7.07-2.931c-2.63 0-5.21 1.07-7.07 2.931-1.86 1.859-2.93 4.439-2.93 7.069s1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93c2.64 0 5.21-1.069 7.07-2.93 1.87-1.86 2.93-4.44 2.93-7.07s-1.06-5.21-2.93-7.069zM112.96 331.87a10.081 10.081 0 0 0-7.08-2.93c-2.63 0-5.2 1.07-7.07 2.93a10.066 10.066 0 0 0-2.92 7.07c0 2.64 1.06 5.21 2.92 7.07a10.05 10.05 0 0 0 7.07 2.93c2.64 0 5.22-1.06 7.08-2.93 1.86-1.86 2.92-4.43 2.92-7.07 0-2.63-1.06-5.21-2.92-7.07z"/></svg>',
        fill: 'brand-color',
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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M302.25 45.05c-.13-.64-.32-1.27-.57-1.87a9.87 9.87 0 0 0-2.17-3.25 9.57 9.57 0 0 0-1.52-1.24c-.54-.36-1.12-.67-1.721-.92a9.352 9.352 0 0 0-1.87-.57 9.893 9.893 0 0 0-3.909 0c-.641.12-1.27.32-1.87.57a9.991 9.991 0 0 0-3.25 2.16c-.46.46-.88.97-1.24 1.52a9.87 9.87 0 0 0-.92 1.73 10.098 10.098 0 0 0-.77 3.82c0 .65.07 1.31.2 1.95.13.64.32 1.27.57 1.88.25.6.56 1.18.92 1.72.36.55.78 1.06 1.24 1.52a10.04 10.04 0 0 0 3.25 2.16c.599.25 1.229.45 1.87.57.639.13 1.3.2 1.949.2.661 0 1.311-.07 1.96-.2.641-.12 1.27-.32 1.87-.57.601-.25 1.181-.56 1.721-.92a9.57 9.57 0 0 0 1.52-1.24c.47-.46.88-.97 1.25-1.52.36-.54.67-1.12.92-1.72a9.914 9.914 0 0 0 .759-3.83c0-.65-.059-1.31-.189-1.95zM196.36 463.05c-.13-.64-.32-1.27-.57-1.87a9.87 9.87 0 0 0-.92-1.73 9.57 9.57 0 0 0-1.24-1.52c-.46-.46-.98-.88-1.52-1.24-.55-.36-1.13-.67-1.73-.92s-1.23-.45-1.87-.58c-1.29-.25-2.62-.25-3.91 0-.64.13-1.27.33-1.87.58-.6.25-1.18.56-1.72.92-.55.36-1.06.78-1.52 1.24a9.87 9.87 0 0 0-2.17 3.25 9.84 9.84 0 0 0-.76 3.82 9.84 9.84 0 0 0 .76 3.82 9.87 9.87 0 0 0 2.17 3.25c.46.46.97.88 1.52 1.24.54.36 1.12.67 1.72.92.6.25 1.23.45 1.87.57.65.13 1.31.2 1.96.2 2.63 0 5.21-1.07 7.07-2.93 1.86-1.86 2.93-4.44 2.93-7.07 0-.65-.07-1.31-.2-1.95zM278.376 246H249.5v-48.739c0-5.523-4.477-10-10-10s-10 4.477-10 10V256c0 5.523 4.477 10 10 10h38.876c5.522 0 10-4.477 10-10s-4.478-10-10-10z"/><path d="M431.5 221.83h-26.472a167.675 167.675 0 0 0-7.476-25.689l26.278-16.763a10 10 0 0 0 3.053-13.809l-20.048-31.427a10 10 0 0 0-13.808-3.053l-24.636 15.717a170.506 170.506 0 0 0-18.821-18.948L337.952 9.027A9.999 9.999 0 0 0 328 0H151a10 10 0 0 0-9.953 9.027L129.43 127.859C93.371 158.876 70.5 204.817 70.5 256s22.871 97.124 58.93 128.141l11.617 118.832A10 10 0 0 0 151 512h177a9.999 9.999 0 0 0 9.952-9.027l11.617-118.832c30.538-26.268 51.617-63.24 57.356-105.035H431.5c5.522 0 10-4.477 10-10V231.83c0-5.523-4.478-10-10-10zM156.453 57h98.991c5.523 0 10-4.477 10-10s-4.478-10-10-10h-97.036l1.662-17h158.86l8.997 92.029C302.187 96.161 271.893 87 239.5 87s-62.687 9.161-88.427 25.028L156.453 57zm166.094 398h-98.991c-5.523 0-10 4.477-10 10s4.477 10 10 10h97.036l-1.662 17H160.07l-8.997-92.028C176.813 415.839 207.107 425 239.5 425s62.687-9.161 88.427-25.029L322.547 455zM239.5 405c-82.159 0-149-66.841-149-149s66.841-149 149-149 149 66.841 149 149-66.841 149-149 149zm140.944-242.161l14.908-9.51 9.292 14.565-15.394 9.82a168.988 168.988 0 0 0-8.806-14.875zm41.056 96.267h-13.029a170.351 170.351 0 0 0-.56-17.276H421.5v17.276z"/><path d="M239.5 128.425c-70.345 0-127.575 57.23-127.575 127.575s57.23 127.575 127.575 127.575S367.075 326.345 367.075 256 309.845 128.425 239.5 128.425zm10 234.689v-6.155c0-5.523-4.477-10-10-10s-10 4.477-10 10v6.155c-51.354-4.755-92.358-45.76-97.114-97.114h6.155c5.523 0 10-4.477 10-10s-4.477-10-10-10h-6.155c4.756-51.354 45.76-92.358 97.114-97.114v6.155c0 5.523 4.477 10 10 10s10-4.477 10-10v-6.155c51.354 4.755 92.358 45.76 97.114 97.114h-6.155c-5.522 0-10 4.477-10 10s4.478 10 10 10h6.155c-4.756 51.354-45.76 92.358-97.114 97.114z"/></svg>',
        fill: 'brand-color',
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
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001"><path d="M507.686 2.646a9.995 9.995 0 0 0-9.221-1.127L248.189 96.113c-5.167 1.953-7.771 7.723-5.819 12.89 1.952 5.166 7.728 7.771 12.89 5.818L492 25.342V397.2l-28-12.274V276.694c0-5.523-4.478-10-10-10s-10 4.477-10 10v99.465L240.194 286.82 455.071 71.943a9.998 9.998 0 0 0 .74-13.314 10 10 0 0 0-13.149-2.214L144.798 244.428 36.593 197.47l134.584-50.868c5.167-1.953 7.771-7.724 5.819-12.89-1.953-5.166-7.727-7.772-12.89-5.818L6.465 187.477a9.998 9.998 0 0 0-.446 18.528l132.589 57.539 75.456 133.625a10.005 10.005 0 0 0 11.25 4.754 9.982 9.982 0 0 0 5.041-3.163l.001.01 58.951-68.584 208.679 91.476a9.997 9.997 0 0 0 9.486-.788 10 10 0 0 0 4.529-8.371V10.872a10.004 10.004 0 0 0-4.315-8.226zM215.7 283.029a10.001 10.001 0 0 0-2.929 7.071v64.105l-53.715-95.125 218.531-137.938L215.7 283.029zm17.071 82.246v-59.872l37.379 16.385-37.379 43.487z"/><path d="M216.149 114.512a10.056 10.056 0 0 0-7.069-2.93c-2.63 0-5.21 1.07-7.07 2.93a10.076 10.076 0 0 0-2.93 7.07c0 2.64 1.069 5.21 2.93 7.08 1.86 1.86 4.44 2.92 7.07 2.92s5.21-1.06 7.069-2.92a10.1 10.1 0 0 0 2.931-7.08c0-2.63-1.07-5.21-2.931-7.07zM65.245 318.095a64.174 64.174 0 0 0-9.477.397c-5.485.642-9.411 5.609-8.77 11.095.597 5.091 4.917 8.838 9.92 8.838.389 0 .78-.022 1.176-.069a43.652 43.652 0 0 1 6.492-.272c5.556.209 10.143-4.146 10.323-9.666.183-5.519-4.144-10.141-9.664-10.323zM59.445 474.007a97.97 97.97 0 0 1-5.653-4.547c-4.172-3.618-10.487-3.171-14.107 1.002-3.618 4.172-3.17 10.488 1.002 14.106a117.797 117.797 0 0 0 6.812 5.478 9.958 9.958 0 0 0 5.966 1.981A9.985 9.985 0 0 0 61.492 488c3.299-4.429 2.382-10.694-2.047-13.993zM20 395.36v-3.419c0-5.523-4.478-10-10-10s-10 4.477-10 10v3.419c0 1.657.035 3.338.104 4.997.225 5.376 4.653 9.583 9.984 9.583.141-.001.283-.004.426-.01 5.518-.23 9.804-4.891 9.573-10.409A99.617 99.617 0 0 1 20 395.36zM28.997 339.294c-4.215-3.563-10.527-3.035-14.092 1.184-2.04 2.414-3.912 5-5.566 7.686-2.895 4.704-1.429 10.863 3.275 13.758a9.995 9.995 0 0 0 13.757-3.275 43.38 43.38 0 0 1 3.809-5.26c3.566-4.218 3.036-10.528-1.183-14.093zM31.35 441.2a99.111 99.111 0 0 1-3.152-6.532c-2.216-5.06-8.113-7.365-13.171-5.15-5.06 2.215-7.365 8.112-5.149 13.171a118.606 118.606 0 0 0 3.792 7.86 9.998 9.998 0 0 0 13.515 4.166c4.882-2.582 6.747-8.633 4.165-13.515zM98.875 491.295a94.875 94.875 0 0 1-7.052-1.595c-5.33-1.421-10.815 1.749-12.239 7.084-1.424 5.336 1.748 10.816 7.085 12.24 2.811.75 5.686 1.4 8.544 1.933.619.115 1.234.171 1.843.171 4.722 0 8.923-3.36 9.819-8.171 1.011-5.43-2.57-10.651-8-11.662zM113.486 342.204l-5.638-5.639c-.06-.06-.12-.119-.182-.177-3.916-3.745-10.127-3.691-13.979.16-3.905 3.905-3.905 10.237 0 14.142l.081.08 5.576 5.577a9.972 9.972 0 0 0 7.071 2.929 9.972 9.972 0 0 0 7.071-2.929c3.905-3.905 3.905-10.237 0-14.143zM193.999 469.965c-3.642-4.151-9.959-4.567-14.112-.928a96.702 96.702 0 0 1-5.626 4.569c-4.414 3.319-5.302 9.588-1.983 14.002a9.985 9.985 0 0 0 8.001 3.991 9.961 9.961 0 0 0 6.002-2.007 117.345 117.345 0 0 0 6.788-5.515c4.154-3.641 4.569-9.958.93-14.112zM218.288 428.801c-5.089-2.158-10.954.219-13.11 5.303a95.576 95.576 0 0 1-3.076 6.554c-2.534 4.907-.611 10.939 4.296 13.474a9.956 9.956 0 0 0 4.581 1.117c3.621 0 7.116-1.974 8.893-5.413a116.443 116.443 0 0 0 3.721-7.926c2.154-5.084-.22-10.953-5.305-13.109zM147.426 376.146l-5.657-5.657c-3.904-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237.001 14.142l5.658 5.657c1.952 1.953 4.511 2.929 7.07 2.929s5.119-.977 7.071-2.929c3.905-3.905 3.905-10.237-.001-14.142zM154.228 496.484c-1.46-5.325-6.965-8.458-12.287-7a96.478 96.478 0 0 1-7.051 1.649c-5.422 1.054-8.963 6.302-7.909 11.724.929 4.777 5.114 8.094 9.806 8.094.632 0 1.274-.061 1.918-.186a116.196 116.196 0 0 0 8.521-1.993c5.327-1.46 8.462-6.961 7.002-12.288zM461.069 232.622c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21 1.07-7.07 2.93a10.076 10.076 0 0 0-2.93 7.07c0 2.64 1.069 5.21 2.93 7.07 1.86 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.069-2.93c1.86-1.86 2.931-4.44 2.931-7.07s-1.07-5.21-2.931-7.07z"/></svg>',
        fill: 'brand-color',
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
