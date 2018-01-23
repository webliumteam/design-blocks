import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className, modifier}) => {
    const {components: {Text, Button, Image, SocialIcons}, style} = this.props
    return (
      <article className={classNames(style.item, className)}>
        {children}

        <div className={style.item__inner}>
          <div title="Read more" className={style['item__pic-link']}>
            <Image
              pictureClassName={style.item__pic}
              imgClassName={style.item__img}
              bind={`team[${index}].picture`}
            />
          </div>
          <h2 className={style.item__title}>
            <Text bind={`team[${index}].name`} />
          </h2>
          <p className={style.item__position}>
            <Text bind={`team[${index}].position`} />
          </p>
          {_.get('member-desc')(modifier) && (
            <p className={style.item__desc}>
              <Text bind={`team[${index}].description`} />
            </p>
          )}
          {_.get('member-link')(modifier) && (
            <Button className={style.link} bind={`team[${index}].more`} />
          )}
          {_.get('member-email')(modifier) && (
            <div className={style['item__email-wrapper']}>
              <Button className={style.item__email} bind={`team[${index}].email`} />
            </div>
          )}
          {_.get('member-social')(modifier) && (
            <SocialIcons className={style.socials} bind={`team[${index}].socialIcons`} />
          )}
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style, $block} = this.props
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
          <Collection
            className={style['items-wrapper']}
            bind="team"
            Item={this.collectionItem}
            itemProps={{
              modifier: $block.modifier,
            }}
          />
          {this.getModifierValue('block-button') && (
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

Block.components =
  _.pick(['Collection', 'Text', 'Button', 'Image', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  team: [
    {
      id: '06567442-178b-46ab-a822-661218143093',
      name: 'Andrew Shimmer',
      position: 'CEO',
      description:
        'Andrew Shimmer has a 15-year experience in IT development and marketing. He has successfully run companies specializing in innovative technologies.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Andrew Shimmer photo',
      },
      more: {
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
        textValue: 'Know more',
      },
      email: {
        actionConfig: {
          action: 'external',
          actions: {
            external: {
              url: 'mailto:shimmer@gmail.com',
            },
          },
        },
        textValue: 'shimmer@gmail.com',
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
          marginRight: 15,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: 'Ann Maisner',
      position: 'Marketing Director',
      description:
        'Ann is a high-skilled professional with over 10 years of experience in marketing. She has been rewarded by the Association of Marketing as one of the most successful directors. ',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Ann Maisner photo',
      },
      more: {
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
        textValue: 'Know more',
      },
      email: {
        actionConfig: {
          action: 'external',
          actions: {
            external: {
              url: 'mailto:maisner@gmail.com',
            },
          },
        },
        textValue: 'maisner@gmail.com',
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
          marginRight: 15,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Tomas Abbar',
      position: 'Product Manager',
      description:
        'For 13 years, Tomas has been taking a position of product manager at Quantum. He successfully launched several best-selling products. Now he is working on 3 new products.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Tomas Abbar photo',
      },
      more: {
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
        textValue: 'Know more',
      },
      email: {
        actionConfig: {
          action: 'external',
          actions: {
            external: {
              url: 'mailto:abbar@gmail.com',
            },
          },
        },
        textValue: 'abbar@gmail.com',
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
          marginRight: 15,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
  ],
  title: 'Our Team',
  subtitle:
    'Our team is our proud. Each of the team members is dedicated to delivering the best results to the clients. Meet some of our expert who will work on your case:',
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
    textValue: 'Medium button',
  },
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Team description',
    defaultValue: true,
  },
  {
    id: 'block-button',
    type: 'checkbox',
    label: 'Block button',
    defaultValue: true,
  },
  {
    id: 'member-link',
    type: 'checkbox',
    label: 'Team member link',
    defaultValue: true,
  },
  {
    id: 'member-desc',
    type: 'checkbox',
    label: 'Team member bio',
    defaultValue: true,
  },
  {
    id: 'member-email',
    type: 'checkbox',
    label: 'Team member email',
    defaultValue: true,
  },
  {
    id: 'member-social',
    type: 'checkbox',
    label: 'Team social buttons',
    defaultValue: true,
  },

]

export default Block
