import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Icon}, style} = this.props
    const alignClass =
      this.getModifierValue('align') !== 'center'
        ? style[`section--${this.getModifierValue('align')}`]
        : ''

    return (
      <section className={classNames(style.section, alignClass)}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          <header className={style.section__header}>
            {this.getModifierValue('title') && <Text tagName="h1" className={style.title} bind="title" />}
            {this.getModifierValue('subtitle') && <Text tagName="p" className={style.subtitle} bind="subtitle" />}
          </header>
          {this.getModifierValue('heading') && <Text tagName="h2" className={style.heading} bind="heading" />}
          {this.getModifierValue('subheading') && <Text tagName="p" className={style.subheading} bind="subheading" />}
          {this.getModifierValue('text') && <Text tagName="p" className={style.text} bind="text" />}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Icon'])($editor.components)

Block.defaultContent = {
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Our Values',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'We are a customer-oriented company, and our values drive us to achieve more.',
    type: 'subtitle',
  },
  heading: {
    content: 'High Standards',
    type: 'heading',
  },
  subheading: {
    content: 'We always aim to establish long-term relationships with customers. That’s why we believe that quality always comes first. This notion is the cornerstone of our mission, solidified by the highest standards we apply in every operation.',
    type: 'subheading',
  },
  text: {
    content: 'We always work hard to improve our goods and services to achieve higher results for our clients. We love challenging tasks that require an innovative approach. Thus, if your business needs a unique solution, we are ready to fine-tune our existing products to meet all your demands.<br>Our company is a group of devotees sharing mutual priorities and values. We know that only those committed to their work can provide the best-quality products and services. That’s why every person that wants to join our team should undergo rigorous selection.',
    type: 'text',
  },
}

Block.modifierScheme = {
  align: {
    children: [
      {id: 'left', label: 'left'},
      {id: 'center', label: 'center'},
      {id: 'right', label: 'right'},
    ],
    defaultValue: 'center',
    name: 'Aligning',
    type: 'radio-button-group',
    style: 'buttons',
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Description', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Subtitle', type: 'checkbox'},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
