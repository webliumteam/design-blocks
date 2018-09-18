import $editor from 'weblium/editor'
import tippy from 'tippy.js/dist/tippy.all.min.js'
import tippyStyles from 'tippy.js/dist/tippy.css'
import tippyStylesTheme from 'tippy.js/dist/themes/light.css'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    $theme: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  componentDidMount = () => {
    tippy('.tippy-mark', {
      theme: 'light',
      size: 'big',
      arrow: true,
    })
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {
      components: {Text, Image},
      style,
    } = this.props

    return (
      <section className={classNames(style.section, this.props.$theme.enabled('w-section'))}>
        <div className={classNames(style.section__inner, this.props.$theme.enabled('w-section__inner'))}>
          <header className={classNames(style.section__header, this.props.$theme.enabled('w-section__header'))}>
            <Text
              bind="title"
              className={classNames(style.title, this.props.$theme.enabled('w-title'), this.props.$theme.enabled('w-text-center'))}
              tagName="h2"
            />
          </header>
          <div className={classNames(this.props.$theme.enabled('w-section__content'))}>
            <div className={style['map-wrapper']}>
              <Image
                bind="picture"
                pictureClassName={style.map}
                size={
                  {
                    'min-width: 320px': 1060,
                  }
                }
                resize={{disable: true}}
              />
              <div className={classNames(style.point, style.canada, 'tippy', 'tippy-mark')} title="Canada" />
              <div className={classNames(style.point, style.usa, 'tippy', 'tippy-mark')} title="USA" />
              <div className={classNames(style.point, style.usa2, 'tippy', 'tippy-mark')} title="USA" />
              <div className={classNames(style.point, style.russia, 'tippy', 'tippy-mark')} title="Russia" />
              <div className={classNames(style.point, style.arabia, 'tippy', 'tippy-mark')} title="Saudi Arabia" />
              <div className={classNames(style.point, style.spain, 'tippy', 'tippy-mark')} title="Spain" />
              <div className={classNames(style.point, style.uk, 'tippy', 'tippy-mark')} title="UK" />
              <div className={classNames(style.point, style.germany, 'tippy', 'tippy-mark')} title="Germany" />
              <div className={classNames(style.point, style.italy, 'tippy', 'tippy-mark')} title="Italy" />
              <div className={classNames(style.point, style.hungary, 'tippy', 'tippy-mark')} title="Hungary" />
              <div className={classNames(style.point, style.israel, 'tippy', 'tippy-mark')} title="Israel" />
              <div className={classNames(style.point, style.india, 'tippy', 'tippy-mark')} title="India" />
              <div className={classNames(style.point, style.ukraine, 'tippy', 'tippy-mark')} title="Ukraine" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Image'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Our clients during last 72 hours',
    type: 'blockTitle',
  },
  picture: {
    resourceRef: 'map-image1x.png',
    alt: 'Picture about the company',
  },
}

export default Wireframe
