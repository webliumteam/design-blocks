import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
  }

  /* eslint-disable */
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }
  /* eslint-enable */

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  testimonialsItem = ({index, modifier}) => {
    const {components: {Text}, style} = this.props

    return (
      <article className={style.testimonial}>
        <div className={style.testimonial__inner}>
          <Text tagName="p" className={style.testimonial__text} bind={`testimonials.content[${index}].text`} />
          <Text tagName="p" className={style.testimonial__date} bind={`testimonials.content[${index}].date`} />
        </div>
      </article>
    )
  }

  collectionItem = ({index, modifier}) => {
    const {components: {Image, Text, SocialIcons}, style} = this.props
    return (
      <article className={style.item}>
        <div className={style.item__inner}>
          <Image
            wrapperClassName={style['item__picture-wrapper']}
            pictureClassName={style.item__picture}
            imgClassName={style.item__image}
            bind={`testimonials.person[${index}].image`}
            size={{
              'min-width: 992px': 1200,
              'min-width: 768px': 1000,
              'min-width: 480px': 800,
            }}
            resize={{disable: false}}
          />
          <Text tagName="h2" className={style.item__author} bind={`testimonials.person[${index}].author`} />
          <Text tagName="p" className={style.item__position} bind={`testimonials.person[${index}].position`} />
          <SocialIcons bind={`testimonials.person[${index}].socialIcons`} className={style.item__socials} />
        </div>
      </article>
    )
  }

  render() {
    const {components: {Slider, Text, Button, Icon}, style, $block} = this.props
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
            className={style['preview-slider']}
            bind="testimonials.content"
            Item={this.testimonialsItem}
            setRef={slider => (this.slider1 = slider)}
            settings={{
              dots: false,
              arrows: false,
              asNavFor: this.state.nav2,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          <Slider
            className={style['items-wrapper']}
            bind="testimonials.person"
            Item={this.collectionItem}
            setRef={slider => (this.slider2 = slider)}
            settings={{
              arrows: false,
              centerMode: true,
              infinite: false,
              focusOnSelect: true,
              slidesToShow: 3,
              centerPadding: '60px',
              draggable: true,
              asNavFor: this.state.nav1,
              adaptiveHeight: false,
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

Block.components = _.pick(['Slider', 'Text', 'Button', 'Image', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  title: {
    content: 'Testimonials',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'The best praise for us is our clients’ words.  Just look what they say about us!',
    type: 'subtitle',
  },
  testimonials: {
    content: [
      {
        text: {
          content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
          type: 'heading',
        },
        date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
      },
      {
        text: {
          content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
          type: 'heading',
        },
        date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
      },
      {
        text: {
          content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
          type: 'heading',
        },
        date: {
          content: 'October 28, 2017',
          type: 'caption',
        },
      },
    ],
    person: [
      {
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Gallery image',
        },
        author: {
          content: 'Dr. Sam White',
          type: 'heading',
        },
        position: {
          content: 'Surgeon at St. Laurence Child Clinic',
          type: 'text',
        },
        socialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [10, 20, 30, 40],
            size: 30,
          },
        },
      },
      {
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Gallery image',
        },
        author: {
          content: 'Mary Sanders',
          type: 'heading',
        },
        position: {
          content: 'Creative Director of MindSet',
          type: 'text',
        },
        socialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [10, 20, 30, 40],
            size: 30,
          },
        },
      },
      {
        image: {
          src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
          alt: 'Gallery image',
        },
        author: {
          content: 'Victor Manner',
          type: 'heading',
        },
        position: {
          content: 'Recruiter at JobsDone',
          type: 'text',
        },
        socialIcons: {
          networks: [
            {
              id: 'facebook',
              name: 'Facebook',
              url: 'http://facebook.com/',
            },
            {
              id: 'instagram',
              name: 'Instagram',
              url: 'http://instagram.com/',
            },
            {
              id: 'youtube',
              name: 'YouTube',
              url: 'http://youtube.com/',
            },
          ],
          target: '_blank',
          design: {
            border: 'circle',
            innerFill: true,
            preset: 'preset001',
            offset: 15,
            color: '#9b9b9b',
            sizes: [10, 20, 30, 40],
            size: 30,
          },
        },
      },
    ],
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
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
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
