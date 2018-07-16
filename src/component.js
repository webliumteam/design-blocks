import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {
      components: {Text, Button, Image, SocialIcons},
      style,
    } = this.props
    const memberContacts = [
      _.get('member-email')(modifier) && (
        <Text tagName="div" className={classNames(style.item__email, 'caption')} bind={`team[${index}].email`} />
      ),
      _.get('member-social')(modifier) && (
        <SocialIcons className={style.socials} bind={`team[${index}].socialIcons`} />
      ),
    ]
    return (
      <article className={classNames(style.item, className)}>
        {children}
        <div className={style.item__inner}>
          <Image
            wrapperClassName={classNames(style['item__pic-link'], 'wt-picture-wrapper')}
            pictureClassName={classNames(style.item__pic, 'wt-picture')}
            imgClassName={classNames(style.item__img, 'wt-picture__image')}
            bind={`team[${index}].picture`}
            size={{'min-width: 320px': 150}}
            resize={{disable: true}}
          />
          <Text tagName="h2" className={classNames(style.item__title, 'wt-heading')} bind={`team[${index}].name`} />
          <Text tagName="p" className={classNames(style.item__position, 'caption')} bind={`team[${index}].position`} />
          {_.get('member-desc')(modifier) && (
            <Text tagName="p" className={classNames(style.item__desc, 'wt-body')} bind={`team[${index}].description`} />
          )}
          {_.get('member-link')(modifier) && (
            <Button
              buttonClassName={style.button}
              linkClassName={style.link}
              bind={`team[${index}].more`}
            />
          )}
          {this.getOptionValue('member-contacts-wrapper') ? (
            <div className={style.item__contacts}>{memberContacts}</div>
          ) : (
            memberContacts
          )}
        </div>
      </article>
    )
  }

  render() {
    const {
      components: {Collection, Text, Button, Icon},
      style,
      $block,
    } = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={classNames(style['top-icon'], 'wt-icon')} bind="topIcon" />
          )}
          <Text
            tagName="h1"
            className={classNames(style.title, 'wt-title', 'wt-text-center')}
            bind="title"
          />
          {this.getModifierValue('subtitle') && (
            <Text
              tagName="p"
              className={classNames(style.subtitle, 'wt-subtitle', 'wt-text-center')}
              bind="subtitle"
            />
          )}
          <Collection
            className={style['items-wrapper']}
            bind="team"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('block-button') && (
            <div className={classNames(style['btns-group'], 'wt-btns-group')}>
              <div className={classNames(style['btns-group__inner'], 'wt-btns-group__inner')}>
                <Button className="wt-btns-group__item" buttonClassName={style.button} linkClassName={style.link} bind="cta" />
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick([
  'Collection',
  'Text',
  'Button',
  'Image',
  'SocialIcons',
  'Icon',
])($editor.components)

Block.defaultContent = {
  team: [
    {
      name: {
        content: 'Andrew Shimmer',
        type: 'heading',
      },
      position: {
        content: 'CEO',
        type: 'caption',
      },
      description: {
        content:
          'Andrew Shimmer has more than 15 years of experience in IT development and marketing. He has successfully run companies specializing in innovative technologies.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Andrew Shimmer photo',
      },
      more: {
        textValue: 'Know more',
        type: 'link',
      },
      email: {
        content: '<a href="mailto:shimmer@gmail.com">shimmer@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Ann Maisner',
        type: 'heading',
      },
      position: {
        content: 'Marketing Director',
        type: 'caption',
      },
      description: {
        content:
          'Ann is a highly skilled professional with over 10 years of experience in marketing. She has been rewarded by the Association of Marketing as one of the most successful directors. ',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Ann Maisner photo',
      },
      more: {
        textValue: 'Know more',
        type: 'link',
      },
      email: {
        content: '<a href="mailto:maisner@gmail.com">maisner@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
    {
      name: {
        content: 'Tomas Abbar',
        type: 'heading',
      },
      position: {
        content: 'Product Manager',
        type: 'caption',
      },
      description: {
        content:
          'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
        type: 'text',
      },
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Tomas Abbar photo',
      },
      more: {
        textValue: 'Know more',
        type: 'link',
      },
      email: {
        content: '<a href="mailto:abbar@gmail.com">abbar@gmail.com</a>',
        type: 'caption',
      },
      socialIcons: {
        networks: [
          {
            id: 'facebook',
            name: 'Facebook',
            url: 'https://facebook.com/',
          },
          {
            id: 'twitter',
            name: 'Twitter',
            url: 'https://twitter.com/',
          },
          {
            id: 'linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/',
          },
        ],
        target: '_blank',
        design: {
          border: 'circle',
          innerFill: true,
          preset: 'preset001',
          offset: 15,
          color: '#b9b9b9',
          sizes: [15, 25, 35, 45],
          size: 30,
        },
      },
    },
  ],
  title: {
    content: 'Our Team',
    type: 'blockTitle',
  },
  subtitle: {
    content:
      'Our team is our proud. Each of the team members is dedicated to delivering the best results to the clients. Meet some of our expert who will work on your case:',
    type: 'subtitle',
  },
  cta: {
    textValue: 'Learn more',
    type: 'secondary',
  },
  topIcon: {
    svg:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  subtitle: {defaultValue: false, label: 'Block description', type: 'checkbox', sortOrder: 10},
  'member-desc': {defaultValue: true, label: "Team member's description", type: 'checkbox', sortOrder: 20},
  'member-link': {defaultValue: true, label: "Team member's link (button)", type: 'checkbox', sortOrder: 30},
  'member-email': {defaultValue: true, label: "Team member's contacts", type: 'checkbox', sortOrder: 40},
  'member-social': {defaultValue: true, label: "Team member's social media buttons", type: 'checkbox', sortOrder: 50},
  'block-button': {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 60},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}

export default Block
