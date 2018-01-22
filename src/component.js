import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <article className={classNames(css.item, className)}>
        {children}

        <div className={css.item__inner}>
          {this.getModifierValue('image') && (
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
          {this.getModifierValue('position') && (
            <p className={css.item__position}>
              <Text bind={`testimonials[${index}].position`} />
            </p>
          )}
          <p className={css.item__desc}>
            <Text bind={`testimonials[${index}].description`} />
          </p>
          {this.getModifierValue('publishDate') && (
            <time className={css.item__time}>
              <Text bind={`testimonials[${index}].date`} />
            </time>
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Text, Button}, style: css} = this.props
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
            Item={this.collectionItem}
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
      name: 'Amanda Peterson',
      position: 'Marketing Director at Fresh Food Co.',
      description:
        '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
      date: 'December 15, 2017',
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: 'Amanda Peterson',
      position: 'Marketing Director at Fresh Food Co.',
      description:
        '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
      date: 'December 15, 2017',
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
  title: 'Testimonials',
  subtitle:
    'Read the success stories of our customers to find out why so many companies choose us.',
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
