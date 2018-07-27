import {Motion, spring} from 'react-motion'
/* eslint-disable */
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isReady: false}
  }

  componentDidMount() {
    this.setState({isReady: true})
    window.addEventListener('resize', this.adjustContainer, false)
  }

  adjustContainer = e => {
    this.setState({height: spring(e.currentTarget.innerHeight)})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustContainer, false)
  }

  render() {
    const {children} = this.props

    if (this.state.isReady) {
      if (this.props.fullHeight) {
        this.props.containerStyle.height = window.innerHeight
      }
      return (
        <div
          ref="container"
          style={this.props.containerStyle}
          className={this.props.containerClassName}
        >
          {children}
        </div>
      )
    } else {
      return <div>Parallax hover is not yet ready.</div>
    }
  }

  static Layer = class extends React.Component {
    constructor(props) {
      super(props)
      this.resizeTimeout = false
      this.config = this.props.config
      this.state = {
        toStyle: {
          y: 0,
          x: 0,
        },
      }
    }

    componentDidMount() {
      this.props.hoverArea
        ? this.props.hoverArea.addEventListener('mousemove', this.updatePosition, false)
        : window.addEventListener('mousemove', this.updatePosition, false)
    }

    updatePosition = e => {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null
          const xFactor = this.config.xFactor
          const yFactor = this.config.yFactor
          var getYFromCenter = yFactor * (e.view.innerHeight / 2 - e.clientY)
          var getXFromCenter = xFactor * (e.view.innerWidth / 2 - e.clientX)
          this.setState({
            toStyle: {
              y: spring(getYFromCenter, this.config.springSettings),
              x: spring(getXFromCenter, this.config.springSettings),
            },
          })
        }, 75)
      }
    }

    componentWillUnmount() {
      this.props.hoverArea
        ? this.props.hoverArea.removeEventListener('mousemove', this.updatePosition, false)
        : window.removeEventListener('mousemove', this.updatePosition, false)
    }

    render() {
      const {children} = this.props
      return (
        <Motion defaultStyle={this.props.layerStyle} style={this.state.toStyle}>
          {({x, y}) => {
            return (
              <div
                ref="layer"
                style={{
                  transform: `translate3d(${x}px, ${y}px, 0)`,
                  ...this.props.layerStyle,
                }}
                className={this.props.className}
              >
                {children}
              </div>
            )
          }}
        </Motion>
      )
    }
  }
}
