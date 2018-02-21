import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Button, SocialIcons}, style} = this.props

    const showButtonGroups = this.getModifierValue('button') || this.getModifierValue('additional-button')

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <article className={style.article}>
            <div className={style.article__content}>
              <Text bind="title" className={style.article__title} tagName="h1" />
              <Text bind="heading" className={style.article__heading} tagName="h2" />
              <Text bind="subheading" className={style.article__subtitle} tagName="p" />
              <Text bind="text" className={style.article__text} tagName="p" />
              {this.getModifierValue('social-icons') && (
                <div className={style.article__socials}>
                  {!this.getOptionValue('hidden-social-heading') && <Text tagName="h2" className={style['social-title']} bind="social-title" />}
                  <SocialIcons bind="social-icons" className={style.socials} />
                </div>
              )}
              {showButtonGroups && (
                <div className={style['btns-group']}>
                  {this.getModifierValue('button') && (
                    <Button
                      buttonClassName={style.button}
                      linkClassName={style.link}
                      bind="button-1"
                    />
                  )}
                  {this.getModifierValue('additional-button') && (
                    <Button
                      buttonClassName={style.button}
                      linkClassName={style.link}
                      bind="button-2"
                    />
                  )}
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Button', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#d8d8d8',
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
    content: 'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues. We create unique and innovative solutions for our customers along with the high-quality support services and personal approach to any case. Feel free to entrust your business to our experts, and you’ll see the difference! ',
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
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  heading: {defaultValue: false, label: 'Company title', type: 'checkbox'},
  subheading: {defaultValue: false, label: 'Company description', type: 'checkbox'},
  text: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  'social-icons': {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: false, label: 'Button', type: 'checkbox'},
  'additional-button': {defaultValue: true, label: 'Additional button', type: 'checkbox'},
}

export default Block
