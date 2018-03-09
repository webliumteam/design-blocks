import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-why/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)


ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  background: {
    type: 'color',
    color: '#fafbfc',
  },
  topIcon: {
    svg: "<svg viewBox='0 0 20 20' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><g fill-rule='nonzero'><path d='M9.996 4.927a5.21 5.21 0 0 0-5.204 5.204c0 1.176.385 2.286 1.114 3.21.143.182.299.363.45.539.456.528.927 1.075 1.096 1.696.02.072.025.255.023.356a.67.67 0 0 0 .191.487c.128.131.3.203.483.203h3.665a.67.67 0 0 0 .483-.203.67.67 0 0 0 .192-.487c-.002-.087.004-.24.023-.312.172-.619.697-1.236 1.16-1.78.147-.173.286-.336.414-.498a5.138 5.138 0 0 0 1.114-3.21 5.21 5.21 0 0 0-5.204-5.205zM9.962 3.978a.855.855 0 0 0 .854-.854V.862a.855.855 0 0 0-1.709 0v2.262c0 .472.383.854.855.854zM17.274 2.754a.855.855 0 0 0-1.209-.029l-1.673 1.597a.855.855 0 1 0 1.18 1.236l1.673-1.596a.855.855 0 0 0 .029-1.208zM19.137 8.36h-2.155a.855.855 0 0 0 .002 1.71h.001l2.153-.006a.853.853 0 1 0 0-1.704zM5.554 5.53a.855.855 0 0 0-.028-1.208L3.853 2.725a.855.855 0 1 0-1.18 1.237l1.673 1.596a.852.852 0 0 0 1.208-.028zM3.01 8.36H.855.855a.852.852 0 1 0-.002 1.706l2.153.004h.002a.855.855 0 0 0 .001-1.71zM11.842 17.819H8.138a.628.628 0 0 0-.626.627v.911c0 .346.28.627.626.627h3.704a.628.628 0 0 0 .627-.627v-.911a.627.627 0 0 0-.627-.627z'/></g></svg>",
    fill: 'brand-color',
  },
  articles: [
    {
      ...Component.defaultContent.articles[0],
      icon: {
        svg: '<svg viewBox="0 0 40 48" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="M29.707 27.111a12.205 12.205 0 0 0 2.497-7.434c0-3.322-1.303-6.437-3.67-8.77a12.229 12.229 0 0 0-8.823-3.544 12.236 12.236 0 0 0-8.543 3.638 12.24 12.24 0 0 0-3.594 8.562 12.198 12.198 0 0 0 2.51 7.568c2.708 3.555 4.2 7.91 4.2 12.263v4.762a3.835 3.835 0 0 0 3.83 3.831h3.564a3.836 3.836 0 0 0 3.831-3.83v-4.763c0-4.4 1.442-8.648 4.198-12.283zm-18.366-.937a10.633 10.633 0 0 1-2.188-6.597c.052-5.782 4.798-10.553 10.58-10.635 2.9-.04 5.63 1.056 7.693 3.09a10.659 10.659 0 0 1 3.199 7.645c0 2.362-.753 4.603-2.176 6.48-2.904 3.83-4.468 8.298-4.532 12.94H15.86c-.066-4.597-1.665-9.175-4.519-12.923zm4.521 17.447v-.639l8.069.924v.25c0 .132-.014.26-.036.385l-8.033-.92zm0-2.228v-.717h8.069v1.641l-8.069-.924zm2.253 5.016a2.253 2.253 0 0 1-1.972-1.166l6.796.778a2.24 2.24 0 0 1-1.26.387h-3.564z"/><path d="M12.082 20.865a8.08 8.08 0 0 1-.087-1.262.79.79 0 1 0-1.58-.014 9.7 9.7 0 0 0 .105 1.508.79.79 0 1 0 1.562-.232zm4.646 11.991a.791.791 0 0 0 .75-1.036 25.047 25.047 0 0 0-3.876-7.368 7.976 7.976 0 0 1-.739-1.166.79.79 0 1 0-1.402.725c.251.487.55.957.885 1.398a23.472 23.472 0 0 1 3.632 6.904.79.79 0 0 0 .75.543zM28.184 22.38a.79.79 0 0 0-1.038.413 7.897 7.897 0 0 1-.962 1.647.79.79 0 0 0 1.259.954 9.487 9.487 0 0 0 1.154-1.976.79.79 0 0 0-.413-1.038zm-8.295-10.597c4.352 0 7.894 3.541 7.894 7.894 0 .248-.012.497-.034.741a.79.79 0 0 0 1.572.145c.027-.292.04-.59.04-.886 0-5.223-4.249-9.473-9.472-9.473a.79.79 0 0 0 0 1.579zm0-5.783a.79.79 0 0 0 .789-.79V.79a.79.79 0 0 0-1.579 0v4.42c0 .437.354.79.79.79zm-7.987 1.56a.79.79 0 1 0 1.367-.79l-2.21-3.827a.79.79 0 1 0-1.367.79l2.21 3.827zM36.76 28.644l-3.827-2.21a.79.79 0 1 0-.79 1.368l3.828 2.21a.79.79 0 0 0 .79-1.367l-.001-.001zM3.017 10.986l3.827 2.21a.79.79 0 0 0 .79-1.367l-3.828-2.21a.79.79 0 1 0-.79 1.367zm35.897 8.039h-4.421a.79.79 0 0 0 0 1.58h4.42a.79.79 0 0 0 0-1.58zm-32.84.79a.79.79 0 0 0-.79-.79H.864a.79.79 0 0 0 0 1.58h4.42a.79.79 0 0 0 .79-.79zm26.465-6.514c.134 0 .27-.034.394-.106l3.827-2.21a.79.79 0 0 0-.79-1.367l-3.827 2.21a.79.79 0 0 0 .396 1.473zM6.844 26.434l-3.827 2.21a.79.79 0 0 0 .79 1.367l3.827-2.21a.79.79 0 0 0-.79-1.367zM26.797 7.85a.79.79 0 0 0 1.078-.29l2.21-3.827a.79.79 0 0 0-1.368-.79l-2.21 3.828a.79.79 0 0 0 .29 1.078z"/></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.articles[1],
      icon: {
        svg:
        "<svg viewBox='0 0 48 36' width='48' height='36' xmlns='http://www.w3.org/2000/svg'><g fill-rule='nonzero'><path d='M32.72 19.18c0-4.807-3.912-8.719-8.72-8.719-4.808 0-8.72 3.912-8.72 8.72 0 4.807 3.912 8.719 8.72 8.719 4.808 0 8.72-3.912 8.72-8.72zm-15.828 0A7.116 7.116 0 0 1 24 12.073a7.116 7.116 0 0 1 7.108 7.109A7.116 7.116 0 0 1 24 26.289a7.116 7.116 0 0 1-7.108-7.108z'/><path d='M24.805 24.137A.805.805 0 0 0 24 23.33a4.155 4.155 0 0 1-4.15-4.15.805.805 0 0 0-1.612 0A5.768 5.768 0 0 0 24 24.942c.445 0 .805-.36.805-.805zM24 15.03a4.155 4.155 0 0 1 4.15 4.15.805.805 0 0 0 1.612 0A5.768 5.768 0 0 0 24 13.42a.805.805 0 0 0 0 1.61z'/><path d='M47.195 3.264H14.043V.822a.805.805 0 0 0-.806-.805H4.334a.805.805 0 0 0-.805.805v2.442H.805A.805.805 0 0 0 0 4.069v30.223c0 .445.36.806.805.806h46.39c.444 0 .805-.361.805-.806V4.07a.805.805 0 0 0-.805-.805zM5.14 1.627h7.292v1.637H5.14V1.627zm41.25 3.247v2.49h-2.124v-.92a.805.805 0 0 0-.805-.805h-7.263a.805.805 0 0 0-.806.806v.919h-7.256A12.464 12.464 0 0 0 24 6.66c-1.449 0-2.84.248-4.136.703H1.61v-2.49h44.778zm-33.3 14.307c0-6.016 4.895-10.91 10.91-10.91 6.015 0 10.91 4.894 10.91 10.91 0 6.015-4.895 10.909-10.91 10.909-6.015 0-10.91-4.894-10.91-10.91zm3.667 10.206H1.61V8.974h15.145c-3.19 2.272-5.276 6-5.276 10.207 0 4.206 2.085 7.935 5.277 10.206zM36.52 19.181c0-4.207-2.085-7.935-5.276-10.207h4.148v3.328c0 .445.36.805.806.805h7.263c.444 0 .805-.36.805-.805V8.974h2.123v20.413H31.243c3.192-2.271 5.277-6 5.277-10.206zm.483-7.684V7.25h5.652v4.247h-5.652zM1.611 33.487v-2.49h18.254c1.295.455 2.687.703 4.135.703s2.84-.248 4.135-.702H46.39v2.489H1.611z'/><path d='M7.32 11.965a2.683 2.683 0 0 0-2.68 2.68 2.683 2.683 0 0 0 2.68 2.68 2.683 2.683 0 0 0 2.68-2.68 2.683 2.683 0 0 0-2.68-2.68zm0 3.749a1.07 1.07 0 0 1 0-2.138 1.07 1.07 0 0 1 0 2.138z'/></g></svg>",
        fill: 'light-accent-color',
      },
    },
    {
      ...Component.defaultContent.articles[2],
      icon: {
        svg:
          "<svg viewBox='0 0 38 48' width='38' height='48' xmlns='http://www.w3.org/2000/svg'><g fill-rule='nonzero'><path d='M18.699 18.66c-4.381 0-7.945 3.565-7.945 7.946 0 4.38 3.564 7.945 7.945 7.945 4.38 0 7.945-3.564 7.945-7.945s-3.564-7.946-7.945-7.946zm0 14.247a6.308 6.308 0 0 1-6.302-6.301 6.308 6.308 0 0 1 6.302-6.302A6.308 6.308 0 0 1 25 26.606a6.308 6.308 0 0 1-6.301 6.301z'/><path d='M18.699 21.706a4.906 4.906 0 0 0-4.9 4.9c0 2.702 2.198 4.9 4.9 4.9 2.702 0 4.9-2.198 4.9-4.9 0-2.702-2.198-4.9-4.9-4.9zm0 1.643c.236 0 .467.026.689.075l-3.14 5.321a3.242 3.242 0 0 1-.805-2.14 3.26 3.26 0 0 1 3.256-3.256zm0 6.513c-.383 0-.75-.067-1.09-.189l3.247-5.503a3.249 3.249 0 0 1 1.099 2.436 3.26 3.26 0 0 1-3.256 3.256z'/><path d='M33.737 31.762a40.258 40.258 0 0 0-3.274-4.823 58.36 58.36 0 0 0-1.263-5.906C27.241 13.723 23.9 6.76 19.27.341a.822.822 0 0 0-1.334 0c-4.63 6.42-7.972 13.381-9.93 20.692a58.364 58.364 0 0 0-1.263 5.907 40.23 40.23 0 0 0-3.274 4.822C1.176 35.723.014 39.298.014 42.386c0 .454.368.822.822.822 2.879 0 5.797-.285 6.434-.35.6.116 1.2.223 1.802.321l-.37 3.356a.822.822 0 0 0 .727.907 83.537 83.537 0 0 0 18.321 0 .822.822 0 0 0 .727-.907l-.37-3.351c.61-.1 1.22-.208 1.83-.327.636.066 3.554.351 6.433.351a.822.822 0 0 0 .822-.822c0-3.088-1.163-6.663-3.455-10.624zM18.603 2.244a63.88 63.88 0 0 1 4.967 8.44 11.734 11.734 0 0 1-9.934 0 63.878 63.878 0 0 1 4.967-8.44zM6.307 30.33a52.202 52.202 0 0 0 .08 10.96c-1.014.09-2.826.23-4.698.265.31-4.139 2.818-8.546 4.618-11.225zm20.445 15.563a82.045 82.045 0 0 1-16.326 0l.273-2.471a59.047 59.047 0 0 0 15.78.004l.273 2.467zm2.408-4.562a57.43 57.43 0 0 1-21.115 0c-.769-6.485-.249-13.167 1.548-19.873a59.589 59.589 0 0 1 3.34-9.288 13.382 13.382 0 0 0 11.339 0 59.582 59.582 0 0 1 3.34 9.288c1.798 6.706 2.318 13.388 1.548 19.873zm1.66-.042c.41-3.606.436-7.27.078-10.962 1.8 2.676 4.31 7.084 4.619 11.228a69.82 69.82 0 0 1-4.698-.266z'/></g></svg>",
        fill: 'dark-accent-color',
      },
    },
  ],
  title: {
    content: 'Why Choose Us',
    type: 'blockTitle',
  },
  'button-2': {
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
    textValue: 'Request a quote',
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  'button-primary': {defaultValue: true, label: 'Button', type: 'checkbox'},
  'item-description': {defaultValue: true, label: 'Advantages description', type: 'checkbox'},
  'item-heading': {defaultValue: true, label: 'Advantages title', type: 'checkbox'},
  'item-icon': {defaultValue: true, label: 'Advantages icon', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'top-icon': {defaultValue: true, label: 'Top icon decorator', type: 'checkbox'},
}

export default ExtendedWireframe
