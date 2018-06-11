import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const post = _.get('location.state')(this.props)
    if (post) {
      this.setState({post})
      return
    }
    if (window.contentfulClient) {
      console.log(this.props.location)
      const postId = 'foo'
      window.contentfulClient.getEntry(postId)
        .then((entry) => console.log(entry))
        .catch(console.error)
    }
    if (!window.contentful) {
      ((d) => {
        const wf = d.createElement('script')
        const s = d.scripts[0]
        wf.src = 'https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js'
        wf.async = true
        wf.onload = this.connectContentful()
        s.parentNode.insertBefore(wf, s)
      })(document)
    }
  }

  connectContentful = () => {
    try {
      const accessToken = _.getModifierValue('accessToken')
      const space = _.getModifierValue('space')
      const client = window.contentfull.createClient({space, accessToken})
      window.contentfulClient = client
    } catch (error) {
      this.setState({error})
    }
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  getPostValue = (path) => {

  }

  render() {
    const {components: {Text, Image}, style} = this.props
    const columnLayout = !(
      this.getModifierValue('title') ||
      this.getModifierValue('subtitle') ||
      this.getModifierValue('text')
    )

    const authorText = this.getModifierValue('name') ||
      this.getModifierValue('date') ||
      this.getModifierValue('divider') ||
      this.getModifierValue('time')

    const authorInfo = this.getModifierValue('avatar') || authorText

    const getMinResize = this.getOptionValue('min-resize') ? this.getOptionValue('min-resize') : 46
    const getMaxResize = this.getOptionValue('max-resize') ? this.getOptionValue('max-resize') : 100

    const arrange = this.getModifierValue('arrange-elements')

    if (!post) {
      return <div>Loading....</div>
    }
    return (
      <section className={classNames(style.section, {[style['section--column']]: columnLayout}, arrange && style['section--reverse'])}>
        <div className={style.section__inner}>
          <article className={style.article}>
            <div className={style.article__top}>
              <Image
                wrapperClassName={style['article__picture-wrapper']}
                pictureClassName={style.article__picture}
                imgClassName={style.article__image}
                bind="picture"
                size={this.getImageSize(columnLayout)}
                resize={{min: getMinResize, max: getMaxResize, disable: this.getOptionValue('disable-resizer')}}
              />
              <header className={style.article__header}>
                {this.getModifierValue('category') &&
                  <Text tagName="p" className={style.article__category} bind="category" />
                }
                <Text tagName="h1" className={style.article__title} bind="title" />
                {this.getModifierValue('subtitle') && (
                  <Text tagName="p" className={style.article__subtitle} bind="subtitle" />
                )}
                {authorInfo && (
                  <div className={style.author}>
                    {this.getModifierValue('avatar') && (
                      <Image
                        wrapperClassName={style['author__picture-wrapper']}
                        pictureClassName={style.author__picture}
                        imgClassName={style.author__image}
                        bind="author_picture"
                        size={this.getImageSize(columnLayout)}
                        resize={{disable: true}}
                      />
                    )}
                    {authorText && (
                      <div className={style.author__info}>
                        {this.getModifierValue('name') && (
                          <Text tagName="span" className={style.author__name} bind="author_name" />
                        )}
                        <div className={style.author__bottom}>
                          {this.getModifierValue('date') && (
                            <Text tagName="time" className={classNames(style.author__date, this.getModifierValue('divider') && style['author__date--decorated'])} bind="article_date" />
                          )}
                          {this.getModifierValue('time') && (
                            <Text tagName="span" className={style.author__time} bind="article_time" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </header>
            </div>
            <div className={style.article__content}>
              <Text tagName="p" className={style.article__body} bind="body" />
            </div>
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image', 'Button', 'SocialIcons', 'Icon'])($editor.components)

Block.defaultContent = {
  category: {
    content: 'LIFE',
    type: 'caption',
  },
  title: {
    content: 'Humans And Aliens',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Our interstellar communication is as much for us as it is for them',
    type: 'subtitle',
  },
  author_picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Avatar',
  },
  author_name: {
    type: 'subheading',
    content: 'Mellany Brown',
  },
  article_date: {
    type: 'small',
    content: 'Jun 7',
  },
  article_time: {
    type: 'small',
    content: '7 min read',
  },
  body: {
    content: 'The idea is that if an intelligent alien comes across this map, floating somewhere out in space, they could figure all of that out.<br><br>The pulsar map is best known as a component of the cover of the Voyager Golden Record, the 12-inch discs each attached to the pair of Voyager probes flung to the far reaches of the solar system in the 1970s. The probes were designed to visit Jupiter and Saturn, but NASA knew they’d have enough momentum to keep trucking on through — and out of — the solar system. And so, in a gesture of great romanticism, they commissioned Carl Sagan to adorn the probes with some sort of return address and, more than that, a message to whoever might find them.',
    type: 'text',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Picture about the post',
  },
}

Block.modifierScheme = {
  'arrange-elements': {
    defaultValue: true,
    name: 'Arrange elements',
    type: 'swap',
  },
  category: {defaultValue: true, label: 'Post category', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Subtitle', type: 'checkbox'},
  avatar: {defaultValue: true, label: 'Author photo', type: 'checkbox'},
  name: {defaultValue: true, label: 'Author name', type: 'checkbox'},
  date: {defaultValue: true, label: 'Publication date', type: 'checkbox'},
  divider: {defaultValue: true, label: 'Decorator divider', type: 'hidden'},
  time: {defaultValue: true, label: 'Post read time', type: 'checkbox'},
  accessToken: {defaultValue: '', label: 'Contentfull accessToken', type: 'input'},
  space: {defaultValue: '', label: 'Contentfull space', type: 'input'},
}

export default Block
