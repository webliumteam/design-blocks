import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {
      components: {Text, Button, SocialIcons, Icon},
      style,
    } = this.props

    const showButtonGroups =
      this.getModifierValue('button') || this.getModifierValue('additional-button')

    const alignClass =
      this.getModifierValue('align') !== 'left'
        ? style[`section--${this.getModifierValue('align')}`]
        : ''
    const textAlignmentClass =
      this.getModifierValue('block-alignment') !== 'right' ? `text-${alignClass}` : ''

    return (
      <section className={classNames(style.section, alignClass)}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={classNames(style['top-icon'], 'icon')} bind="topIcon" />
          )}

          <article className={style.article}>
            {this.getModifierValue('top-caption') && (
              <Text bind="top-caption" className={classNames(style['caption-decorator'], 'body', textAlignmentClass)} tagName="div" />
            )}
            {this.getModifierValue('title') && (
              <Text
                bind="title"
                className={classNames(style.article__title, 'title', textAlignmentClass)}
                tagName="h1"
              />
            )}
            {this.getModifierValue('heading') && (
              <Text
                bind="heading"
                className={classNames(style.article__heading, 'heading', textAlignmentClass)}
                tagName="h2"
              />
            )}
            {this.getModifierValue('subheading') && (
              <Text
                bind="subheading"
                className={classNames(style.article__subheading, 'subheading', textAlignmentClass)}
                tagName="p"
              />
            )}
            {this.getModifierValue('text') && (
              <Text
                bind="text"
                className={classNames(style.article__text, 'body', textAlignmentClass)}
                tagName="p"
              />
            )}
            {this.getModifierValue('social-icons') && (
              <div className={style['socials-wrapper']}>
                <SocialIcons bind="social-icons" className={style.socials} />
              </div>
            )}
            {showButtonGroups && (
              <div className={classNames(style['btns-group'], 'btns-group')}>
                <div className="btns-group__inner">
                  {this.getModifierValue('button') && (
                    <Button className={classNames(style.button, 'button')} linkClassName={style.link} bind="button-1" />
                  )}
                  {this.getModifierValue('additional-button') && (
                    <Button className={classNames(style.button, 'button')} linkClassName={style.link} bind="button-2" />
                  )}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'SocialIcons', 'Icon'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
  },
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'About Us',
    type: 'blockTitle',
  },
  heading: {
    content: 'A whole bulk of services',
    type: 'heading',
  },
  subheading: {
    content: 'We provide a whole bulk of services to ensure stable growth of the company',
    type: 'subheading',
  },
  text: {
    content:
      'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.<br><br> We create unique and innovative solutions for our customers along with the high-quality support services and personal approach to any case. Feel free to entrust your business to our experts, and you’ll see the difference! ',
    type: 'text',
  },
  'button-1': {
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  'social-icons': {
    networks: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'http://facebook.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'youtube',
        name: 'YouTube',
        url: 'http://youtube.com/',
      },
    ],
    target: '_blank',
    design: {
      border: 'softRect',
      innerFill: true,
      preset: 'preset001',
      offset: 15,
      color: '#9b9b9b',
      sizes: [10, 20, 30, 40],
      size: 30,
    },
  },
  'top-caption': {
    content: 'sed cursus feugiat',
    type: 'text',
  },
}

Block.modifierScheme = {
  align: {
    children: [
      {id: 'left', label: 'Left'},
      {id: 'center', label: 'Center'},
      {id: 'right', label: 'Right'},
    ],
    defaultValue: 'left',
    name: 'Block alignment',
    type: 'radio-button-group',
    sortOrder: 10,
  },
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 20},
  heading: {defaultValue: false, label: 'Block subtitle', type: 'checkbox', sortOrder: 30},
  subheading: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 40},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox', sortOrder: 50},
  'social-icons': {
    defaultValue: true,
    label: 'Social media buttons',
    type: 'checkbox',
    sortOrder: 60,
  },
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 70},
  'additional-button': {
    defaultValue: true,
    label: 'Additional button (link)',
    type: 'checkbox',
    sortOrder: 80,
  },
  'top-caption': {defaultValue: false, label: 'Top caption', type: 'hidden', sortOrder: 90},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden', sortOrder: 100},
}

export default Block
