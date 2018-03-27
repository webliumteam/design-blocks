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

  getContent = () => {
    const {components: {Text}, style} = this.props
    return [
      this.getModifierValue('title') && <Text tagName="h1" className={style.title} bind="title" />,
      this.getModifierValue('subtitle') && <Text tagName="p" className={style.description} bind="description" />,
    ]
  }

  getSectionInner = () => {
    const {components: {Background, Button, Image}, style} = this.props
    return [
      this.getOptionValue('content-wrapper') ?
        <div className={style['content-wrapper']}>{this.getContent()}</div> :
        this.getContent(),
      <Button
        buttonClassName={style.button}
        linkClassName={style.link}
        bind="cta"
      />,
      this.getModifierValue('picture') && (
        <Image
          wrapperClassName={style['section__picture-wrapper']}
          pictureClassName={style.section__picture}
          imgClassName={style.section__image}
          bind="picture"
        />
      ),
    ]
  }

  render() {
    const {components: {Background, Image, Button}, style} = this.props
    return (
      <section className={style.section}>
        {this.getOptionValue('content-bg') ?
          <Background className={style.section__inner} bind="contentBackground">
            {this.getSectionInner()}
          </Background> :
          <div className={style.section__inner}>
            {this.getSectionInner()}
          </div>
        }
      </section>
    )
  }
}

Block.components = _.pick(['Background', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  theme: 'dark',
  background: {
    type: 'color',
    color: '#A4A4A4',
  },
  contentBackground: {
    type: 'color',
    color: 'rgba(255,255,255,0)',
  },
  title: {
    content: 'Want to work with us?',
    type: 'blockTitle',
  },
  description: {
    content: 'Get a full-scale analysis of your business and recommended solutions to increase your profits.',
    type: 'text',
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
    textValue: 'Request a quote',
    type: 'primary-alt',
    size: 'lg',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
}

Block.modifierScheme = {
  title: {defaultValue: true, label: 'Block title', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Title description', type: 'checkbox'},
  picture: {defaultValue: false, label: 'Picture', type: 'hidden'},
}


export default Block
