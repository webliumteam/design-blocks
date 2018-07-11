import $editor from 'weblium/editor'
import Wave from './dynamic-bg/waves'
import Particles from 'react-particles-js'
import canusedom from 'can-use-dom'

import {bubble, lines, nasa, snow} from './dynamic-bg/presets'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  snowValues = {}
  linesValue = {}

  state = {
    mobile: false,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  componentWillMount() {
    canusedom && window.innerWidth < 800 && this.setState({mobile: true})

    this.snowValues = {
      speed: canusedom && window.innerWidth < 800 ? 1 : 3,
      val: canusedom && window.innerWidth < 800 ? 100 : 400,
      distance: canusedom && window.innerWidth < 800 ? 70 : 200,
    }

    this.linesValue = {
      val: canusedom && window.innerWidth < 800 ? 10 : 30,
      distance: canusedom && window.innerWidth < 800 ? 70 : 300,
    }

    this.getPreset(this.getModifierValue('dTorusBufferGeometryynamic'))
  }

  componentDidMount() {
    canusedom && window.innerWidth < 800 && this.setState({mobile: true})
  }

  getPreset = (value) => {
    switch (value) {
      case 'lines':
        return lines(this.linesValue)
      case 'bubble':
        return bubble()
      case 'snow':
        return snow(this.snowValues)
      case 'nasa':
        return nasa()
      default:
        console.log('no preset')
    }
  }

  render() {
    const {
      components: {Text, Button},
      style: css,
    } = this.props
    const showButtonGroups =
      this.getModifierValue('primary-btn') || this.getModifierValue('secondary-btn')
    const alignClass =
      this.getModifierValue('align') !== 'left'
        ? css[`section--${this.getModifierValue('align')}`]
        : ''
    const themeAlignClass =
      this.getModifierValue('align') !== 'left' ? `text-${this.getModifierValue('align')}` : ''
    return (
      <section className={classNames(css.section, alignClass)}>
        <div className={css.section__inner}>
          {this.getModifierValue('caption-decorator') && (
            <div className={css['caption-decorator']}>
              <Text bind="topCaption" className="body" />
            </div>
          )}
          <Text
            bind="title"
            tagName="h1"
            className={classNames(css.title, 'hero-title', themeAlignClass)}
          />
          {this.getModifierValue('subtitle') && (
            <Text bind="subtitle" tagName="p" className={classNames(css.subtitle, 'subtitle')} />
          )}
          {showButtonGroups && (
            <div className={classNames(css['btns-group'], 'btns-group')}>
              <div className={classNames(css['btns-group__inner'], 'btns-group__inner')}>
                {this.getModifierValue('primary-btn') && (
                  <Button
                    linkClassName={css.link}
                    className={classNames(css.button, 'butttton')}
                    bind="cta-1"
                  />
                )}
                {this.getModifierValue('secondary-btn') && (
                  <Button
                    linkClassName={css.link}
                    className={classNames(css.button, 'butttton')}
                    bind="cta-2"
                  />
                )}
              </div>
            </div>
          )}
        </div>
        {this.getModifierValue('dynamic') !== 'none' ? (
          this.getModifierValue('dynamic') === 'waves' ? (
            <Wave
              {...{
                color: '#fff',
                separation: 50,
                height: 30,
                amountX: 50,
                amountY: 50,
                speed: 0.3,
                className: css['vawe-canvas'],
                scale: 0.5,
              }}
            />
          ) : (
            <Particles
              canvasClassName={css.canvas}
              params={this.getPreset(this.getModifierValue('dynamic'))}
            />
          )
        ) : null}
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  title: {
    content: 'Quantum Company',
    type: 'heroTitle',
  },
  subtitle: {
    content: 'We can execute even the most unpredictable ideas! ',
    type: 'subtitle',
  },
  'cta-1': {
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
    type: 'primary',
    size: 'lg',
  },
  'cta-2': {
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
    textValue: 'Learn more',
    type: 'secondary',
    size: 'lg',
  },
  topCaption: 'welcome',
}

Block.modifierScheme = {
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'left',
    name: 'Aligning',
    type: 'radio-button-group',
    style: 'buttons',
  },
  dynamic: {
    children: [
      {id: 'none', label: 'None'},
      {id: 'waves', label: 'Waves'},
      {id: 'lines', label: 'Lines'},
      {id: 'snow', label: 'Snow'},
      {id: 'nasa', label: 'Space'},
      {id: 'bubble', label: 'Circles'},
    ],
    defaultValue: 'none',
    name: 'Dynamic background',
    type: 'radio-button-group',
    style: 'column',
  },
  subtitle: {defaultValue: true, label: 'Title description', type: 'checkbox'},
  'primary-btn': {defaultValue: true, label: 'Primary button', type: 'checkbox'},
  'secondary-btn': {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  'caption-decorator': {defaultValue: false, label: 'Pretitle', type: 'hidden'},
  undefined: {type: 'separator'},
}

export default Block
