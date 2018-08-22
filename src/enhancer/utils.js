export const updateStatics = updaters => (Component) => {
  _.forEach.convert({cap: false})((fn, key) => {
    /* eslint-disable no-param-reassign */
    Component[key] = fn(Component[key])
    /* eslint-enable no-param-reassign */
  }, updaters)
  return Component
}

export const withWrapper = Wrapper => Component => props => (
  <Wrapper {...props}>{mapProps => <Component {...mapProps(props)} />}</Wrapper>
)
