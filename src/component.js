import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  render() {
    const {components: {Text}, style, $block: {id}} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <blockquote className={style.blockquote} aria-describedby={`${id}-author`}>
            <Text bind="blockquote" />
            <div className={style.blockquote__line}>
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
          </blockquote>
          {this.getModifierValue('author') && (
            <p id={`${id}-author`} className={style.author}>
              <Text bind="author" />
            </p>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Text'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#f0f0f0',
  },
  blockquote:
    'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.',
  author: 'Ray Goforth',
}

Block.modifierScheme = [
  {
    id: 'author',
    type: 'checkbox',
    label: 'Quote author',
    defaultValue: true,
  },
]

export default Block
