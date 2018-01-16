import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button, Image, SocialIcons}, style: css} = this.props
    return (
      <article className={classNames(css.item, className)}>
        {children}

        <div className={css.item__inner}>
          <div title="Read more" className={css['item__pic-link']}>
            <Image
              pictureClassName={css.item__pic}
              imgClassName={css.item__img}
              bind={`team[${index}].picture`}
            />
          </div>
          <h2 className={css.item__title}>
            <Text bind={`team[${index}].name`} />
          </h2>
          <p className={css.item__position}>
            <Text bind={`team[${index}].position`} />
          </p>
          {this.getModifierValue('member-desc') && (
            <p className={css.item__desc}>
              <Text bind={`team[${index}].description`} />
            </p>
          )}
          {this.getModifierValue('member-link') && (
            <Button className={css.link} bind={`team[${index}].more`} />
          )}
          {this.getModifierValue('member-email') && (
            <div className={css['item__email-wrapper']}>
              <Button className={css.item__email} bind={`team[${index}].email`} />
            </div>
          )}
          <SocialIcons className={css.socials} bind={`team[${index}].socialIcons`} />
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          {this.getModifierValue('title') && (
            <h1 className={css.title}>
              <Text bind="title" />
            </h1>
          )}
          {this.getModifierValue('subtitle') && (
            <p className={css.subtitle}>
              <Text bind="subtitle" />
            </p>
          )}
          <Collection className={css['items-wrapper']} bind="team" Item={this.collectionItem} />
          {this.getModifierValue('block-button') && (
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

Block.components =
  _.pick(['Collection', 'Text', 'Button', 'Image', 'SocialIcons'])($editor.components)

Block.defaultContent = {
  team: [
    {
      id: '06567442-178b-46ab-a822-661218143093',
      name: 'Glen Riley',
      position: 'Professional',
      description:
        'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Glen Riley photo',
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
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'glen.riley@gmail.com',
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
          marginRight: 20,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
    {
      id: 'd7b368a3-75c8-4039-80ef-15c783140026',
      name: 'Glen Riley',
      position: 'Professional',
      description:
        'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Glen Riley photo',
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
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'glen.riley@gmail.com',
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
          marginRight: 20,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
    {
      id: 'b29ef90b-8d5c-4fd9-b6e4-64e248da29db',
      name: 'Glen Riley',
      position: 'Professional',
      description:
        'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath.',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Glen Riley photo',
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
          action: 'link',
          actions: {
            link: {
              type: '',
              innerPage: '',
              url: '',
            },
          },
        },
        textValue: 'glen.riley@gmail.com',
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
          marginRight: 20,
          color: '',
          sizes: [15, 25, 35, 45],
          size: '25px',
        },
      },
    },
  ],
  title: 'Our Team',
  subtitle:
    'Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath.',
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
    id: 'title',
    type: 'checkbox',
    label: 'Block title',
    defaultValue: true,
  },
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
]

export default Block
