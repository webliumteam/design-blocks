import $editor from 'weblium/editor'
import md from 'showdown'

const converter = new md.Converter()

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }
  state = {}


  static getDerivedStateFromProps(props) {
    const accessToken = _.get('$block.modifier.accessToken')(props)
    const space = _.get('$block.modifier.space')(props)
    return {accessToken, space, isBlog: !(_.isEmpty(accessToken) || _.isEmpty(space))}
  }

  componentDidMount() {
    if (this.state.isBlog) {
      const post = this.formatDate(_.get('location.state.item')(this.props))
      // transition from main page
      if (post) {
        this.setState({post}) //eslint-disable-line
        return
      }
      this.loadPost()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((!prevState.isBlog && this.state.isBlog) || (prevProps.location !== this.props.location)) {
      this.loadPost()
    }
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  getImageSize = fullWidth =>
    fullWidth
      ? {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 1170}
      : {'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}

  connectContentful = () => {
    try {
      const {accessToken, space} = this.state
      const client = window.contentful.createClient({space, accessToken})
      window.contentfulClient = client
      this.loadPost()
    } catch (error) {
      console.log(error)
      this.setState({error})
    }
  }

  loadPost = async () => {
    if (!window.contentful) {
      ((w) => {
        const {document} = w
        const wf = document.createElement('script')
        const s = document.getElementsByTagName('script')[0]
        wf.src = 'https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js'
        wf.onload = this.connectContentful
        if (s) {
          s.parentNode.insertBefore(wf, s)
        } else {
          document.body.insertBefore(wf, s)
        }
      })(window)
      return
    }
    if (this.state.isBlog) {
      const postId = _.get('location.search')(this.props)
      try {
        if (!postId) {
          throw new Error('no postid specified')
        }
        const entry = await window.contentfulClient.getEntry(postId)
        const post = this.formatDate(_.get('item')(entry))
        this.setState({post})
      } catch (e) {
        try {
          const entries = await window.contentfulClient.getEntries({
            content_type: 'post',
          })
          const item = _.get('items[0]')(entries)
          const post = this.formatDate(item)
          this.setState({post})
        } catch (error) {
          console.log(error)
          this.setState({error})
        }
      }
    }
  }

  formatDate = (post) => {
    if (!post) {
      return
    }
    const postItem = _.get('fields')(post)
    const createdAt = _.get('sys.createdAt')(post)
    if (createdAt) {
      const date = new Date(createdAt)
      postItem.articleDate = date.toLocaleDateString()
      postItem.articleTime = date.toLocaleTimeString()
    }
    return postItem
  }

  render() {
    const {components: {Text, Image, SsrText}, style} = this.props
    const {post, error} = this.state
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

    if (error) {
      return <div>Something went wrong</div>
    }
    const {isBlog} = this.state
    if (isBlog && !post) {
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
                resize={{min: getMinResize, max: getMaxResize, disable: this.getOptionValue('disable-resizer')}}
                {...isBlog ? {value: {src: _.get('image.fields.file.url')(post)}, disabledControls: ['toolbar', 'scale']} : {bind: 'picture', size: this.getImageSize(columnLayout)}}
              />
              <header className={style.article__header}>
                {this.getModifierValue('category') &&
                  (
                    isBlog
                      ? <SsrText tagName="p" className={style.article__category} value={{type: 'caption', content: post.articleCategory}} />
                      : <Text tagName="p" className={style.article__category} bind="category" />
                  )
                }
                {
                  isBlog
                    ? <SsrText tagName="h1" className={style.article__title} value={{type: 'blockTitle', content: post.title}} />
                    : <Text tagName="h1" className={style.article__title} bind="title" />
                }
                {this.getModifierValue('subtitle') && (
                  isBlog
                    ? <SsrText tagName="p" className={style.article__subtitle} value={{type: 'subtitle', content: post.subtitle}} />
                    : <Text tagName="p" className={style.article__subtitle} bind="subtitle" />
                )}
                {authorInfo && (
                  <div className={style.author}>
                    {this.getModifierValue('avatar') && (
                      <Image
                        wrapperClassName={style['author__picture-wrapper']}
                        pictureClassName={style.author__picture}
                        imgClassName={style.author__image}
                        resize={{disable: true}}
                        {...isBlog ? {value: {src: _.get('author.fields.avatar.fields.file.url')(post)}, disabledControls: ['toolbar', 'scale']} : {bind: 'author_picture', size: this.getImageSize(columnLayout)}}
                      />
                    )}
                    {authorText && (
                      <div className={style.author__info}>
                        {this.getModifierValue('name') && (
                          isBlog
                            ? <SsrText tagName="span" className={style.author__name} value={{type: 'subheading', content: _.get('author.fields.authorName')(post)}} />
                            : <Text tagName="span" className={style.author__name} bind="author_name" />
                        )}
                        <div className={style.author__bottom}>
                          {this.getModifierValue('date') && (
                            isBlog
                              ? <SsrText tagName="time" className={classNames(style.author__date, this.getModifierValue('divider') && style['author__date--decorated'])} value={{type: 'small', content: post.articleDate}} />
                              : <Text tagName="time" className={classNames(style.author__date, this.getModifierValue('divider') && style['author__date--decorated'])} bind="article_date" />
                          )}
                          {this.getModifierValue('time') && (
                            isBlog
                              ? <SsrText tagName="span" className={style.author__time} value={{type: 'small', content: post.articleTime}} />
                              : <Text tagName="span" className={style.author__time} bind="article_time" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </header>
            </div>
            <div className={style.article__content}>
              {
                isBlog
                  ? <SsrText tagName="p" className={style.article__body} value={{content: converter.makeHtml(post.content), type: 'text'}} />
                  : <Text tagName="p" className={style.article__body} bind="body" />
              }
            </div>
          </article>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'SsrText', 'Image', 'Button', 'SocialIcons', 'Icon'])($editor.components)

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
  textLabel: {defaultValue: '', label: 'Connect Contentful CMS', type: 'label', advanced: true},
  space: {defaultValue: '', label: 'Space ID', type: 'input', advanced: true},
  accessToken: {defaultValue: '', label: 'Content Delivery API', type: 'input', advanced: true},
}

export default Block
