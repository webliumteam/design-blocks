import $editor from 'weblium/editor'
import SvgTopLeft from './svg-top-left'
import SvgBottomRight from './svg-bottom-right'
import BigPink from './big-pink'
import BigBlue from './big-blue'
import ParallaxMousemove from './lib'
import css from './style.css'

class Wireframe extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  setRef = (ref) => {
    this.container = ref
  }

  render() {
    const {
      components: {Text, Button},
      style,
    } = this.props

    return (
      <section className={classNames(style.section, 'section')} ref={this.setRef}>
        <ParallaxMousemove containerClassName={classNames(style.section__inner, 'section__inner')}>
          <div className={style.wrapper}>
            <Text bind="title" className={classNames(style.title, 'title')} tagName="h2" />
            {this.getModifierValue('subtitle') && (
              <Text
                bind="subtitle"
                className={classNames(style.subtitle, 'subtitle')}
                tagName="p"
              />
            )}
            <Button className={style.btn} bind="button" />
          </div>
          <div className={style['decor-wrapper']}>
            <ParallaxMousemove.Layer
              hoverArea={this.container}
              className={css['svg-big-pink']}
              config={{
                xFactor: 0.02,
                yFactor: -0.03,
                springSettings: {
                  stiffness: 16,
                  damping: 10,
                },
              }}
            >
              <BigPink />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              hoverArea={this.container}
              className={css['svg-top']}
              config={{
                xFactor: 0.02,
                yFactor: -0.12,
                springSettings: {
                  stiffness: 16,
                  damping: 10,
                },
              }}
            >
              <SvgTopLeft />
            </ParallaxMousemove.Layer>

            <ParallaxMousemove.Layer
              hoverArea={this.container}
              className={css['svg-big-blue']}
              config={{
                xFactor: 0.01,
                yFactor: 0.03,
                springSettings: {
                  stiffness: 16,
                  damping: 10,
                },
              }}
            >
              <BigBlue />
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer
              hoverArea={this.container}
              className={css['svg-bottom']}
              config={{
                xFactor: 0.02,
                yFactor: -0.12,
                springSettings: {
                  stiffness: 16,
                  damping: 10,
                },
              }}
            >
              <SvgBottomRight />
            </ParallaxMousemove.Layer>
          </div>
        </ParallaxMousemove>
      </section>
    )
  }
}

Wireframe.components = _.pick(['Text', 'Button', 'Background'])($editor.components)

Wireframe.defaultContent = {
  title: {
    content: 'Your digital agency for 1/10 of cost',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Finally, the website you need at a price you can afford!',
    type: 'subtitle',
  },
  button: {
    textValue: 'Get started for free',
  },
}

Wireframe.modifierScheme = {
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox'},
}

export default Wireframe
