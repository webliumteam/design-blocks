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

  getPersonInfo = ({index, modifier}) => {
    const {
      components: {Text, Image},
      style,
    } = this.props
    return [
      _.get('image')(modifier) && (
        <Image
          wrapperClassName={classNames(style['item__pic-wrapper'], 'picture-wrapper')}
          pictureClassName={classNames(style.item__pic, 'picture')}
          imgClassName={classNames(style.item__img, 'picture__image')}
          bind={`testimonials[${index}].image`}
          size={{
            'min-width: 320px': 120,
          }}
          resize={{disable: true}}
        />
      ),
      <Text bind={`testimonials[${index}].name`} className={classNames(style.item__title, 'heading', 'text-center')} tagName="h2" />,
      _.get('position')(modifier) && (
        <Text
          bind={`testimonials[${index}].position`}
          className={classNames(style.item__position, 'caption', 'text-center')}
          tagName="p"
        />
      ),
    ]
  }

  getTestimonials = ({index, modifier}) => {
    const {
      components: {Text},
      style,
    } = this.props
    return [
      <Text bind={`testimonials[${index}].description`} className={classNames(style.item__desc, 'body', 'text-center')} tagName="p" />,
      _.get('publishDate')(modifier) && (
        <Text bind={`testimonials[${index}].date`} className={classNames(style.item__time, 'caption', 'text-center')} tagName="time" />
      ),
    ]
  }

  collectionItem = ({children, className, ...rest}) => {
    const {style} = this.props
    const isRow =
      this.getOptionValue('personal-info-wrapper') && this.getOptionValue('testimonials-wrapper')
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={classNames(style.item__inner, isRow && style['item__inner--row'])}>
          {this.getOptionValue('personal-info-wrapper') ? (
            <div className={style['item__author-wrapper']}>{this.getPersonInfo(rest)}</div>
          ) : (
            this.getPersonInfo(rest)
          )}
          {this.getOptionValue('testimonials-wrapper') ? (
            <div className={style['item__testimonials-wrapper']}>{this.getTestimonials(rest)}</div>
          ) : (
            this.getTestimonials(rest)
          )}
        </div>
      </article>
    )
  }

  render() {
    const {
      components: {Slider, Text, Button, Icon},
      style,
      $block,
    } = this.props
    const customArrows = this.getOptionValue('custom-arrows')
      ? {
        nextArrow: (
          <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />
        ),
        prevArrow: (
          <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />
        ),
      }
      : {}
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={classNames(style['top-icon'], 'icon')} bind="topIcon" />
          )}
          <Text
            bind="title"
            className={classNames(style.title, 'title', 'text-center')}
            tagName="h1"
          />
          {this.getModifierValue('subtitle') && (
            <Text
              bind="subtitle"
              className={classNames(style.subtitle, 'subtitle', 'text-center')}
              tagName="p"
            />
          )}
          <Slider
            className={classNames(style['items-wrapper'], {
              [style['items-wrapper--image-none']]: !this.getModifierValue('image'),
            })}
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
            <div className={classNames(style['btns-group'], 'btns-group')}>
              <div classNames={classNames(style['btns-group__inner'], 'btns-group__inner')}>
                <Button buttonClassName={classNames(style.button, 'butttton')} linkClassName={style.link} bind="cta" />
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Slider', 'Text', 'Button', 'Image', 'Icon'])($editor.components)

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
        content:
          '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
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
        content:
          '“I was happy to work with Quantum because their efficient solutions helped us improve plenty of business processes. As a result, our clients receive their products faster and are more satisfied with our services. They deserve the highest grade!”',
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
    content:
      'Read the success stories of our customers to find out why so many companies choose us.',
    type: 'subtitle',
  },
  cta: {
    type: 'secondary',
    textValue: 'Learn more',
  },
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Block  description', type: 'checkbox', sortOrder: 10},
  image: {defaultValue: true, label: "Client's photo", type: 'checkbox', sortOrder: 20},
  position: {defaultValue: true, label: "Client's job position", type: 'checkbox', sortOrder: 30},
  publishDate: {defaultValue: true, label: 'Comment date', type: 'checkbox', sortOrder: 40},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 50},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
