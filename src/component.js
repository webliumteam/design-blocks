import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}

        <div className={style.item__inner}>
          {_.get('image')(modifier) && (
            <Image
              pictureClassName={style.item__pic}
              imgClassName={style.item__img}
              bind={`testimonials[${index}].image`}
            />
          )}
          <div className={style.item__contacts}>
            <h2 className={style.item__title}>
              <Text bind={`testimonials[${index}].name`} />
            </h2>
          </div>
          {_.get('position')(modifier) && (
            <p className={style.item__position}>
              <Text bind={`testimonials[${index}].position`} />
            </p>
          )}
          <p className={style.item__desc}>
            <Text bind={`testimonials[${index}].description`} />
          </p>
          {_.get('publishDate')(modifier) && (
            <time className={style.item__time}>
              <Text bind={`testimonials[${index}].date`} />
            </time>
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Text, Button}, style, $block} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <h1 className={style.title}>
            <Text bind="title" />
          </h1>
          {this.getModifierValue('subtitle') && (
            <p className={style.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
          <Slider
            className={style['items-wrapper']}
            bind="testimonials"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={classNames(style.button, style['button--size-md'], style['button--secondary'])}
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

Block.modifierScheme = {
  button: {defaultValue: true, label: 'Secondary Button', type: 'checkbox'},
  image: {defaultValue: true, label: 'Reviewer photo', type: 'checkbox'},
  position: {defaultValue: true, label: 'Reviewer job position', type: 'checkbox'},
  publishDate: {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  subtitle: {defaultValue: false, label: 'Testimonials description', type: 'checkbox'},
}


export default Block
