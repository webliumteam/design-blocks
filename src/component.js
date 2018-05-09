import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text}, style} = this.props
    return (
      <div className={classNames(style.item, className)}>
        {children}
        {_.get('number-title')(modifier) && <Text tagName="h2" className={style.item__title} bind={`numbers[${index}].title`} />}
        <div className={style.item__content}>
          <Text tagName="strong" className={style.item__number} bind={`numbers[${index}].value`} />
          {_.get('body')(modifier) && <Text tagName="p" className={style.item__text} bind={`numbers[${index}].label`} />}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Collection, Text, Button, Icon}, style, $block} = this.props
    return (
      <section
        className={classNames(style.section, {
          [style['section--without-button']]: !this.getModifierValue('button'),
        })}
      >
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {this.getModifierValue('title') && <Text tagName="h1" className={style.title} bind="title" />}
          <Collection
            className={style['items-wrapper']}
            bind="numbers"
            Item={this.collectionItem}
            fakeHelpers={{
              count: 2,
              className: style.fake,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  numbers: [
    {
      title: {
        content: 'Increased profits by',
        type: 'subtitle',
      },
      label: {
        content: 'for our customers',
        type: 'text',
      },
      value: {
        content: '75%',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Expanded market reach by',
        type: 'subtitle',
      },
      label: {
        content: 'for our clients',
        type: 'text',
      },
      value: {
        content: '30%',
        type: 'blockTitle',
      },
    },
    {
      title: {
        content: 'Improved customer satisfaction by',
        type: 'subtitle',
      },
      label: {
        content: 'for our users',
        type: 'text',
      },
      value: {
        content: '89%',
        type: 'blockTitle',
      },
    },
  ],
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Our Results in Numbers',
    type: 'blockTitle',
  },
  cta: {
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
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  'number-title': {
    defaultValue: true,
    label: 'Additional information on numbers',
    type: 'checkbox',
  },
  body: {defaultValue: true, label: 'Numbers description', type: 'checkbox'},
  button: {defaultValue: true, label: 'Button', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
