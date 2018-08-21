import $editor from 'weblium/editor'

const {
  enhancers: {mapProps},
} = $editor

const withTheme = (Component) => {
  Component.modifierScheme = _.set(
    '__enableThemes',
    {defaultValue: false, label: 'Experimental: Enable Themes', type: 'checkbox', sortOrder: 10001, experimental: true},
    Component.modifierScheme
  )
  return mapProps((props) =>
    _.set('$theme.enabled', (value) => (_.prop('$block.modifier.__enableThemes', props) ? value : null), props)
  )(Component)
}

export default withTheme
