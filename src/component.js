import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Image}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={style.item__inner}>
          {_.get('image')(modifier) && (
            <Image
              wrapperClassName={style['item__pic-wrapper']}
              pictureClassName={style.item__pic}
              imgClassName={style.item__img}
              bind={`testimonials[${index}].image`}
              size={{
                'min-width: 320px': 120,
              }}
            />
          )}
          <div className={style.item__contacts}>
            <Text bind={`testimonials[${index}].name`} className={style.item__title} tagName="h2" />
          </div>
          {_.get('position')(modifier) && (
            <Text bind={`testimonials[${index}].position`} className={style.item__position} tagName="p" />
          )}
          <Text bind={`testimonials[${index}].description`} className={style.item__desc} tagName="p" />
          {_.get('publishDate')(modifier) && (
            <Text bind={`testimonials[${index}].date`} className={style.item__time} tagName="time" />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Text, Button}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h1" />
          {this.getModifierValue('subtitle') && (
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          )}
          <Slider
            className={classNames(style['items-wrapper'], {[style['items-wrapper--image-none']]: !this.getModifierValue('image')})}
            bind="testimonials"
            Item={this.collectionItem}
            settings={{
              arrows: true,
              ...customArrows,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
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
      name: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director at Fresh Food Co.',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Amanda Peterson photo',
      },
    },
    {
      id: '5ee25c3a-0026-4ab8-b291-238b72e1f6cc',
      name: {
        content: 'Amanda Peterson',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director at Fresh Food Co.',
        type: 'caption',
      },
      description: {
        content: '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
        type: 'text',
      },
      date: {
        content: 'December 15, 2017',
        type: 'caption',
      },
      image: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Amanda Peterson photo',
      },
    },
  ],
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Read the success stories of our customers to find out why so many companies choose us.',
    type: 'subtitle',
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
    type: 'secondary',
    textValue: 'Learn more',
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
