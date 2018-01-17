import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <article className={classNames(css.item, className)}>
        {children}

        <div className={css.item__inner}>
          {_.get('image')(modifier) && (
            <Image
              pictureClassName={css.item__pic}
              imgClassName={css.item__img}
              bind={`testimonials[${index}].image`}
            />
          )}
          <div className={css.item__contacts}>
            <h2 className={css.item__title}>
              <Text bind={`testimonials[${index}].name`} />
            </h2>
          </div>
          {_.get('position')(modifier) && (
            <p className={css.item__position}>
              <Text bind={`testimonials[${index}].position`} />
            </p>
          )}
          <p className={css.item__desc}>
            <Text bind={`testimonials[${index}].description`} />
          </p>
          {_.get('publishDate')(modifier) && (
            <time className={css.item__time}>
              <Text bind={`testimonials[${index}].date`} />
            </time>
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Text, Button}, style: css, $block} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          {this.getModifierValue('subtitle') && (
            <p className={css.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
          <Slider
            className={css['items-wrapper']}
            bind="testimonials"
            Item={props => <this.collectionItem {...props} modifier={$block.modifier} />}
          />
          {this.getModifierValue('button') && (
            <div className={css['btns-group']}>
              <Button
                className={classNames(css.button, css['button--size-md'], css['button--secondary'])}
                bind="cta"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  testimonials: [
    {
      id: 'bf40db18-b817-4a19-bd5b-b72cfacce814',
      name: 'Julia Banks',
      position: 'CEO at Minor Thinking',
      description:
        "“They are always accountable. I have confidence when I make a decision. I know it's going to get done. If they could lose money on a project just because they're trying to make the customer happy, they probably would do that.”",
      date: 'October 28, 2017',
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Julia Banks photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: 'Glen Riley',
      position: 'Professional',
      description:
        'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath.',
      date: 'October 28, 2017',
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Glen Riley photo',
      },
    },
  ],
  title: 'Testimonials',
  subtitle:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of the natural chain of',
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
    textValue: 'Additional button (M)',
  },
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Testimonials description',
    defaultValue: false,
  },
  {
    id: 'image',
    type: 'checkbox',
    label: 'Reviewer photo',
    defaultValue: true,
  },
  {
    id: 'position',
    type: 'checkbox',
    label: 'Reviewer job position',
    defaultValue: true,
  },
  // {
  //   id: 'socialButtons',
  //   type: 'checkbox',
  //   label: 'Social Buttons',
  //   defaultValue: false,
  // },
  // {
  //   id: 'rating',
  //   type: 'checkbox',
  //   label: 'Star rating',
  //   defaultValue: false,
  // },
  {
    id: 'publishDate',
    type: 'checkbox',
    label: 'Date of publishing',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Secondary Button',
    defaultValue: true,
  },
]

export default Block
