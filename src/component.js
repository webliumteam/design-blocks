import $editor from 'weblium/editor'
import md from 'showdown'

const converter = new md.Converter()
class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }
  state = {}

  componentDidMount() {
    const accessToken = this.getModifierValue('accessToken')
    const space = this.getModifierValue('space')
    this.initContentful({accessToken, space})
  }

  componentWillReceiveProps(nextProps) {
    const accessToken = _.get('modifier.accessToken')(nextProps.$block)
    const space = _.get('modifier.space')(nextProps.$block)
    this.initContentful({accessToken, space})
  }

  initContentful = ({accessToken, space}) => {
    if (window.contentfulClient) {
      this.getPosts()
      return
    }
    if (accessToken && space) {
      const contentful = require('contentful')
      const client = contentful.createClient({accessToken, space})
      window.contentfulClient = client
      this.getPosts()
    }
  }

  getPosts = () => {
    window.contentfulClient.getEntries({
      content_type: 'post',
    }).then((entries) => {
      const posts = entries.items
      this.setState({posts})
    })
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  itemHeader = (post) => {
    const {components: {SsrText, Image}, style} = this.props
    const imageUrl = _.get('image.fields.file.url')(post)
    return [
      this.getModifierValue('item_image') && (
        <Image
          wrapperClassName={style['article__picture-wrapper']}
          pictureClassName={style.article__picture}
          imgClassName={style.article__image}
          value={{src: imageUrl}}
          size={{'min-width: 768px': 570, 'min-width: 480px': 768, 'min-width: 320px': 480}}
          disabledControls={['toolbar', 'scale']}
        />
      ),
      this.getModifierValue('item_date') && (
        <small className={style.article__meta}>
          {!this.getOptionValue('hidden-category') && <SsrText tagName="span" value={{content: post.articleCategory}} className={style.article__category} /> }
          {!this.getOptionValue('hidden-date') && <SsrText tagName="span" value={{content: post.subtitle}} className={style.article__date} /> }
        </small>
      ),
    ]
  }

  postItem = (item) => {
    const {style, components: {SsrText, Button}} = this.props
    const post = _.getOr({}, 'fields')(item)
    const postId = _.getOr('', 'sys.id')(item)
    const postPage = this.getModifierValue('post_mount')

    return (
      <article className={classNames(style.article)}>
        {this.getOptionValue('picture-with-date') ? <div className={style.article__header}>{this.itemHeader(post)}</div> : this.itemHeader(post)}
        <SsrText tagName="h2" className={style.article__title} value={{content: post.title, type: 'subtitle'}} />
        <SsrText tagName="h2" value={{content: converter.makeHtml(post.content)}} />
        {this.getModifierValue('item_button') && (
          <Button
            className={style.article__link}
            buttonClassName={style.button}
            linkClassName={style.link}
            bind="moreButton"
            to={{pathname: `/${postPage}`, search: `?postid=${encodeURIComponent(postId)}`, state: {item}}}
            disabledControls={['action']}
          />
        )}
      </article>
    )
  }

  renderPosts = () => {
    const {posts} = this.state
    const {style} = this.props
    const accessToken = this.getModifierValue('accessToken')
    const space = this.getModifierValue('space')
    if (_.isEmpty(accessToken) || _.isEmpty(space)) {
      return <div>Please add contentfull tokens</div>
    }
    if (!posts) {
      return <div>Loading ....</div>
    }
    return <div className={classNames('collection', style['articles-wrapper'])}>{posts.map(this.postItem)}</div>
  }

  render() {
    const {components: {Text, Button, Icon}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('icon_decorator') && (
            <Icon className={style['top-icon']} bind="icon_decorator" />
          )}
          <Text tagName="h1" className={style.title} bind="title" />
          {this.getModifierValue('subtitle') && (
            <Text tagName="div" className={style.subtitle} bind="subtitle" />
            )}
          {this.renderPosts()}
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={style.button}
                linkClassName={style.link}
                bind="button"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'SsrText', 'Button', 'Image', 'Icon'])($editor.components)

Block.defaultContent = {
  icon_decorator: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
  title: {
    content: 'Blog',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Subtitle here',
    type: 'subtitle',
  },
  collection: {
    background: {},
  },
  moreButton: {
    textValue: 'Load more',
    type: 'secondary',
  },
  button: {
    textValue: 'Learn more',
    type: 'secondary',
  },
}

Block.modifierScheme = {
  icon_decorator: {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
  subtitle: {defaultValue: false, label: 'Subtitle', type: 'hidden'},
  item_image: {defaultValue: true, label: 'Image', type: 'checkbox'},
  item_date: {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  item_body: {defaultValue: true, label: 'Post main text', type: 'checkbox'},
  item_button: {defaultValue: true, label: 'Link', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  post_mount: {defaultValue: '', label: 'Post mount slug', type: 'input'},
  accessToken: {defaultValue: '', label: 'Contentfull accessToken', type: 'input'},
  space: {defaultValue: '', label: 'Contentfull space', type: 'input'},
}

export default Block
