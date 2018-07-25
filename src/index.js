import $editor from 'weblium/editor'

import Component from 'wireframe-series-3-pricing_old/src/component'
import style from './style.css'

import defaultOptions from 'wireframe-series-3-pricing_old/src/options.json'
import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', {...defaultOptions, ...options}))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  collection: {
    ...Component.defaultContent.collection,
    items: [
      {
        ...Component.defaultContent.collection.items[0],
        item_icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M13 0a5.512 5.512 0 0 0-4.078 1.817A5.52 5.52 0 0 0 7.525 6H7.5v48.958A5.048 5.048 0 0 0 12.542 60H52.5V0H13zM9.5 54.958V9.998a4.973 4.973 0 0 0 3 1.002v46.996a3.043 3.043 0 0 1-3-3.038zM50.5 58h-36V11h3v25.201c0 .682.441 1.262 1.099 1.444.137.037.273.056.408.056.015 0 .029-.005.044-.006.045-.001.088-.012.133-.017a1.438 1.438 0 0 0 .437-.122c.094-.043.18-.097.263-.159.036-.027.073-.05.106-.08.111-.099.212-.211.292-.346l4.217-7.028 4.217 7.029a1.47 1.47 0 0 0 1.55.687c.045-.008.089-.002.134-.014a1.486 1.486 0 0 0 1.099-1.444V11h19v47zM29.64 9.483l-.003.007-.137.274v.042l-.1.23.1.152V34.39l-5-8.333-5 8.333V10.236L21.118 7h9.764L29.64 9.483zM32.118 9l2-4H19.882l-2 4h-4.67c-1.894 0-3.516-1.379-3.693-3.14a3.46 3.46 0 0 1 .887-2.701A3.503 3.503 0 0 1 13 2h37.5v1h-5a1 1 0 1 0 0 2h5v1h-4a1 1 0 1 0 0 2h4v1H32.118z"/></svg>',
          fill: 'brand-color',
        },
        item_caption: {
          ...Component.defaultContent.collection.items[0].item_caption,
          content: 'For <br>all period',
        },
      },
      {
        ...Component.defaultContent.collection.items[1],
        item_icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M52.994 21c0-7.169-3.617-13.505-9.116-17.296l-.002-.015-.145-.095-.011-.007-.228-.15a21.223 21.223 0 0 0-1.385-.831c-.165-.091-.337-.171-.505-.258a21.164 21.164 0 0 0-1.775-.818c-.395-.16-.796-.305-1.199-.44-.178-.059-.352-.125-.531-.18a20.798 20.798 0 0 0-1.726-.445c-.17-.036-.343-.062-.514-.094a20.974 20.974 0 0 0-1.396-.213c-.188-.022-.375-.045-.564-.062A21.139 21.139 0 0 0 31.994 0c-.647 0-1.289.04-1.927.098-.181.017-.359.039-.539.06-.488.057-.972.132-1.452.222-.155.029-.311.054-.464.087-1.245.265-2.46.644-3.635 1.131-.122.051-.241.104-.362.157-.484.211-.96.441-1.428.689-.1.053-.201.104-.301.158-.573.316-1.137.649-1.683 1.02l-.43.293-.001.041a21.38 21.38 0 0 0-1.88 1.527l-2.869-2.869-.707.707C9.603 8.037 7.006 14.314 7.006 21s2.597 12.963 7.312 17.678c4.481 4.481 10.375 7.044 16.688 7.288V55h-10v5h22v-5h-10v-9.035c6.304-.249 12.19-2.811 16.666-7.287l.707-.707-2.869-2.869C50.905 31.37 52.994 26.43 52.994 21zM21.752 5.022a18.903 18.903 0 0 1 2.739-1.471c.094-.041.19-.079.284-.118.458-.189.924-.36 1.399-.513.087-.028.172-.06.259-.086a18.891 18.891 0 0 1 1.669-.43c.089-.019.179-.031.269-.048.472-.092.95-.164 1.433-.219A19.075 19.075 0 0 1 31.994 2c.578 0 1.148.036 1.713.087a19.112 19.112 0 0 1 2.05.291c.095.019.188.046.283.066a19.216 19.216 0 0 1 1.821.494c.488.159.971.332 1.441.529.124.052.244.113.367.167a19.35 19.35 0 0 1 1.604.803c.082.046.159.099.241.146-3.112 1.126-4.898 2.451-6.924 5.083a2.14 2.14 0 0 0-.291.513 2.053 2.053 0 0 0-.358-.298c-.71-.466-1.648-.451-2.792.047L31 9.945c-1.393.155-2.398.268-2.479 2.032a2.459 2.459 0 0 0 1.187 2.188c.146.088.297.157.451.208.019.037.04.074.064.111l.234.334c-.498-.135-.981-.205-1.455-.274-.602-.087-1.169-.17-1.732-.386-2.15-.824-3.737-4.443-4.896-7.085-.223-.508-.435-.99-.646-1.492.01-.192.018-.377.024-.559zm14.117 21.894c-1.877-1.554-2.585-3.797-1.805-5.714.401-.983-.004-2.077-.964-2.649-.037-.134-.071-.39-.096-.568-.068-.514-.151-1.133-.454-1.726.164.121.35.215.551.277.181.056.229.102.257.183.249.858.824 1.495 1.577 1.746.723.239 1.521.089 2.19-.416.198-.148.232-.176.997.193.523.253 1.174.568 2.079.668.532.559.951 1.271 1.355 1.961.629 1.069 1.278 2.176 2.389 2.753.369.191.141 1.378-.679 3.525-.075.198-.146.385-.208.555-1.039.819-1.676 1.731-2.294 2.615-.566.812-1.102 1.578-1.959 2.315-1.324 1.14-2.393 1.792-3.756 2.19 1.41-2.519 3.027-6.081.82-7.908zm-4.371-14.837l-.682.403h-.001c-.019 0-.084-.021-.156-.093a.447.447 0 0 1-.138-.37c.184-.029.444-.059.7-.087l.471-.054.147-.068c.75-.349 1.003-.258 1.003-.258.002.001.211.211.185 1.152l-.009.317a2.542 2.542 0 0 0-.751-.152 1.095 1.095 0 0 0-.174-.235l-.595-.555zm.451 3.42a2.37 2.37 0 0 0-.438-.286 5.589 5.589 0 0 0-.547-.232l.29-.049c.2-.033.384-.053.54-.062.017.216.068.429.155.629zM19.885 6.372c.015.038.02.081.038.118.197.425.402.894.619 1.388 1.373 3.131 3.081 7.026 6.011 8.149.771.296 1.51.403 2.161.498.707.103 1.318.191 1.91.481.027.015.077.049.076.045.202.296.264.755.322 1.198.094.701.21 1.574 1.024 2.005.104.055.185.147.166.193-1.118 2.743-.183 5.888 2.381 8.01.44.364.858 1.55-1.289 5.393a2.024 2.024 0 0 0 .226 2.31 2.04 2.04 0 0 0 2.26.613c1.522-.543 2.815-1.327 4.32-2.622 1.048-.901 1.71-1.85 2.294-2.686.618-.885 1.152-1.649 2.074-2.329l.285-.245.097-.285c.073-.214.17-.467.275-.743.699-1.834 1.869-4.902-.269-6.014-.6-.311-1.057-1.09-1.586-1.99-.44-.751-.94-1.602-1.632-2.328-.308-.322-.734-.526-1.236-.593-.539-.069-.986-.286-1.42-.495-.784-.38-1.858-.898-3.07.009-.08.062-.231.152-.356.116-.092-.031-.215-.153-.289-.407-.217-.747-.685-1.226-1.467-1.496.108-.333.09-.668-.046-.96l.115.018c.898.132 1.57-.054 2.006-.555.449-.515.538-1.251.265-2.188-.005-.016 0-.062.026-.096 1.889-2.456 3.39-3.522 6.425-4.564.301-.103.56-.279.772-.498 4.616 3.469 7.62 8.973 7.62 15.178 0 10.477-8.523 19-19 19s-19-8.523-19-19c.001-5.878 2.686-11.141 6.892-14.628zM41.006 57v1h-18v-1h18zm6.529-19.045c-9.013 8.271-23.073 8.038-31.804-.691C11.395 32.927 9.006 27.151 9.006 21c0-5.815 2.135-11.296 6.033-15.541l1.44 1.439C13.084 10.63 10.994 15.57 10.994 21c0 11.579 9.421 21 21 21 5.43 0 10.37-2.09 14.101-5.484l1.44 1.439z"/></svg>',
          fill: 'brand-color',
        },
      },
      {
        ...Component.defaultContent.collection.items[2],
        item_icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.986 59.986"><path d="M59.972 20.164a1.005 1.005 0 0 0-.054-.531c-.009-.024-.011-.049-.022-.072-.008-.017-.022-.03-.031-.047-.009-.017-.013-.035-.023-.052l-10-16a1.026 1.026 0 0 0-.161-.197l-.003-.002a.983.983 0 0 0-.297-.185c-.014-.006-.023-.018-.038-.024-.011-.004-.023-.002-.034-.005a.98.98 0 0 0-.314-.057h-38a.977.977 0 0 0-.31.056c-.011.003-.022.001-.032.005-.015.005-.024.017-.038.023a.997.997 0 0 0-.287.175c-.005.005-.012.008-.017.012a1.006 1.006 0 0 0-.163.198l-10 16c-.01.016-.014.035-.023.052-.009.017-.023.03-.031.047-.011.023-.013.048-.023.072a.988.988 0 0 0 .025.789c.009.018.012.038.022.056.016.029.04.051.058.078.014.021.022.044.039.064l28.989 35.986a.043.043 0 0 0 .006.007l.005.007c.003.004.008.005.011.009a.982.982 0 0 0 .384.277.987.987 0 0 0 .383.087c.114 0 .229-.02.343-.061.017-.006.028-.02.045-.027.051-.021.091-.055.137-.084a.968.968 0 0 0 .206-.163c.014-.015.035-.022.048-.038l29-36c.016-.02.024-.044.039-.064.019-.027.042-.049.058-.078.01-.018.013-.038.022-.056a.945.945 0 0 0 .045-.115c.014-.047.028-.093.036-.142zM32.095 4.993h15.459l-4.86 13.045L32.095 4.993zm8.797 14H19.095L29.993 5.58l10.899 13.413zm-23.67-.868L12.423 4.993h15.469l-10.67 13.132zm24.371 2.868L29.818 52.599 18.269 20.993h23.324zm7.628-14.747l7.967 12.748H44.472l4.749-12.748zm-38.465.013l4.653 12.734H2.798l7.958-12.734zm5.384 14.734l10.839 29.664L3.083 20.993H16.14zm16.25 30.43l11.337-30.43h13.176L32.39 51.423z"/></svg>',
          fill: 'brand-color',
        },
      },
    ],
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  subtitle: {defaultValue: true, label: 'Pricing description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
}

export default ExtendedWireframe
