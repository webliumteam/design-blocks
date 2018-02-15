import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text, Image}, style, $block: {id}} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('picture') && (
            <div className={style['picture-wrapper']}>
              <Image
                pictureClassName={style.picture}
                imgClassName={style.picture__image}
                bind="picture"
              />
            </div>
          )}
          <div className={style.blockquote}>
            <Text className={style.blockquote__inner} tagName="blockquote" bind="blockquote" />
            <div className={style.blockquote__line} aria-hidden="true">
              <div className={style.blockquote__icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 18">
                  <path
                    d="M2.5 17.75h5.25l3.5-7V.25H.75v10.5H6l-3.5 7zm14 0h5.25l3.5-7V.25h-10.5v10.5H20l-3.5 7z"
                    fillRule="nonzero"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          {this.getModifierValue('author') && (
            <Text tagName="p" className={style.author} bind="author" />
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text', 'Image'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#f0f0f0',
  },
  blockquote: {
    content: 'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.',
    type: 'quote',
  },
  author: {
    content: 'Ray Goforth',
    type: 'text',
  },
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration photo',
  },
}

Block.modifierScheme = {
  author: {
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
  picture: {
    type: 'hidden',
    label: 'Picture',
    defaultValue: false,
  },
}

export default Block
