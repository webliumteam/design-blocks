import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {Image, Text, Button, SocialIcons}, style} = this.props
    const showButtonGroups = this.getModifierValue('button') || this.getModifierValue('additional-button')
    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 28
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 67

    return (
      <section className={classNames(style.section)}>
        <div className={style.section__inner}>
          <div className={style.article}>
            {this.getModifierValue('image') && (
              <Image
                wrapperClassName={classNames(style['article__picture-wrapper'], 'picture-wrapper')}
                pictureClassName={classNames(style.article__picture, 'picture')}
                imgClassName={classNames(style.article__image, 'picture__image')}
                bind="image"
                size={{
                  'min-width: 992px': 1200,
                  'min-width: 768px': 1000,
                  'min-width: 480px': 800,
                }}
                resize={{min: getMinResize, max: getMaxResize}}
              />
            )}
            <div className={style.article__content}>
              {this.getModifierValue('title') && (
                <Text bind="title" className={classNames(style.article__title, 'title', 'text-center')} tagName="h1" />
              )}
              {this.getModifierValue('heading') && (
                <Text bind="heading" className={classNames(style.article__heading, 'body', 'text-center')} tagName="h2" />
              )}
              {this.getModifierValue('subheading') && (
                <Text bind="subheading" className={classNames(style.article__subheading, 'subtitle', 'text-center')} tagName="p" />
              )}
              {this.getModifierValue('text') && (
                <Text bind="text" className={classNames(style.article__text, 'body', 'text-center')} tagName="p" />
              )}
              {this.getModifierValue('social-icons') && (
                <div className={style['socials-wrapper']}>
                  <SocialIcons bind="social-icons" className={classNames(style.socials, 'body', 'text-center')} />
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
                      className={style.button}
                      linkClassName={style.link}
                      bind="button-2"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Image', 'Text', 'Button', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'About Us',
    type: 'blockTitle',
  },
  image: {
    src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
    alt: 'About illustration',
  },
  heading: {
    content: 'A whole bulk of services',
    type: 'heading',
  },
  subheading: {
    content: 'We provide a whole bulk of services to ensure stable growth of the company',
    type: 'subtitle',
  },
  text: {
    content: 'We provide a whole bulk of services to ensure stable growth of the company. The profound expertise of our team, deep understanding of all business aspects, ideal knowledge of processes will help to deal with various issues.<br><br> We create unique and innovative solutions for our customers along with the high-quality support services and personal approach to any case. Feel free to entrust your business to our experts, and you’ll see the difference! ',
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
        id: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/',
      },
      {
        id: 'instagram',
        name: 'Instagram',
        url: 'http://instagram.com/',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
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
  image: {defaultValue: true, label: 'Image', type: 'checkbox', sortOrder: 10},
  title: {defaultValue: true, label: 'Block title', type: 'checkbox', sortOrder: 20},
  heading: {defaultValue: false, label: 'Block subtitle', type: 'checkbox', sortOrder: 30},
  subheading: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 40},
  text: {defaultValue: true, label: 'Main text', type: 'checkbox', sortOrder: 50},
  'social-icons': {defaultValue: false, label: 'Social media buttons', type: 'checkbox', sortOrder: 60},
  button: {defaultValue: false, label: 'Button (link)', type: 'checkbox', sortOrder: 70},
  'additional-button': {defaultValue: true, label: 'Additional button (link)', type: 'checkbox', sortOrder: 80},
}

export default Block
