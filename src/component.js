import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
  }

  state = {
    nav1: null,
    nav2: null,
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
      <div className={style.testimonial}>
        <div className={style.testimonial__inner}>
          <Text tagName="p" className={style.testimonial__text} bind={`testimonials[${index}].text`} />
          {_.get('item-date')(modifier) && (
            <Text tagName="p" className={style.testimonial__date} bind={`testimonials[${index}].date`} />
          )}
        </div>
      </div>
    )
  }

  collectionItem = ({index, modifier}) => {
    const {components: {Image, Text, SocialIcons}, style} = this.props

    return (
      <div className={style.item}>
        <div className={style.item__inner}>
          {_.get('item-image')(modifier) && (
            <Image
              wrapperClassName={style['item__picture-wrapper']}
              pictureClassName={classNames(style.item__picture, 'item__picture--global')}
              imgClassName={style.item__image}
              bind={`testimonials[${index}].image`}
              size={{
                'min-width: 992px': 1200,
                'min-width: 768px': 1000,
                'min-width: 480px': 800,
              }}
              resize={{disable: true}}
            />
          )}
          <div className="item__person-info--global">
            <Text tagName="h2" className={classNames(style.item__author)} bind={`testimonials[${index}].author`} />
            {_.get('item-position')(modifier) && (
              <Text tagName="p" className={style.item__position} bind={`testimonials[${index}].position`} />
            )}
          </div>
          {_.get('item-socials')(modifier) && (
            <SocialIcons bind={`testimonials[${index}].socialIcons`} className={classNames(style.item__socials, 'item__socials--global')} />
          )}
        </div>
      </div>
    )
  }

  render() {
    const {components: {Slider, Text, Button}, style, $block} = this.props
    const customArrows = this.getOptionValue('custom-arrows') ? {
      nextArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('next-arrow')}} />,
      prevArrow: <button dangerouslySetInnerHTML={{__html: this.getOptionValue('prev-arrow')}} />,
    } : {}
    const onlyNameState = !this.getModifierValue('item-image') && !this.getModifierValue('item-position') && !this.getModifierValue('item-socials')
    const onlyNameClass = onlyNameState && style['items-wrapper--only-name']

    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          <Text bind="title" className={style.title} tagName="h1" />
          {this.getModifierValue('subtitle') && (
            <Text bind="subtitle" className={style.subtitle} tagName="p" />
          )}
          <Slider
            className={style['preview-slider']}
            bind="testimonials"
            Item={this.testimonialsItem}
            setRef={slider => (this.slider1 = slider)}
            settings={{
              dots: false,
              arrows: false,
              asNavFor: this.state.nav2,
              adaptiveHeight: true,
              infinite: false,
            }}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          <Slider
            className={classNames(style['items-wrapper'], onlyNameClass)}
            bind="testimonials"
            Item={this.collectionItem}
            setRef={slider => (this.slider2 = slider)}
            settings={{
              arrows: false,
              centerMode: true,
              infinite: false,
              focusOnSelect: true,
              slidesToShow: 3,
              centerPadding: '0',
              draggable: true,
              asNavFor: this.state.nav1,
              adaptiveHeight: false,
              responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    arrows: true,
                  },
                },
              ],
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
  testimonials: [
    {
      text: {
        content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
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
            id: 'twitter',
            name: 'Twitter',
            url: 'http://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'http://linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'softRect',
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
      text: {
        content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
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
            id: 'twitter',
            name: 'Twitter',
            url: 'http://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'http://linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'softRect',
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
      text: {
        content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
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
            id: 'twitter',
            name: 'Twitter',
            url: 'http://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'http://linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'softRect',
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
      text: {
        content: '“I am happy to work with BeZee. They know how to handle even the most challenging tasks and find the best solutions for customers.”',
        type: 'heading',
      },
      date: {
        content: 'October 28, 2017',
        type: 'caption',
      },
      image: {
        src: 'https://weblium-prod.storage.googleapis.com/res/5a4b747cd294a10025a2a530/5a4baf9cd294a10025a2b305.png',
        alt: 'Gallery image',
      },
      author: {
        content: 'Dr. Sam White',
        type: 'subtitle',
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
            id: 'twitter',
            name: 'Twitter',
            url: 'http://twitter.com/',
          },
          {
            id: 'instagram',
            name: 'Instagram',
            url: 'http://instagram.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'http://linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'softRect',
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
  subtitle: {defaultValue: false, label: 'Testimonials description', type: 'checkbox'},
  'item-date': {defaultValue: true, label: 'Date of publishing', type: 'checkbox'},
  'item-image': {defaultValue: true, label: 'Image', type: 'checkbox'},
  'item-position': {defaultValue: true, label: 'Reviewer job position', type: 'checkbox'},
  'item-socials': {defaultValue: true, label: 'Social media buttons', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary buttons', type: 'checkbox'},
}

export default Block
