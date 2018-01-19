import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button, Image}, style: css} = this.props
    return (
      <article className={classNames(css.item, className)}>
        {children}

        <div className={css.item__container}>
          <Image
            pictureClassName={css.item__pic}
            imgClassName={css.item__image}
            bind={`partners[${index}.picture`}
          />
          <p className={css.item__desc}>
            <Text bind={`partners[${index}].title`} />
          </p>
          <Button className={css.link} bind={`partners[${index}].cta`} />
        </div>
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}, style: css} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          <h1 className={css.title}>
            <Text bind="title" />
          </h1>
          <p className={css.subtitle}>
            <Text bind="subtitle" />
          </p>
          <Collection className={css['items-wrapper']} bind="partners" Item={this.collectionItem} />
          <div className={css['btns-group']}>
            <Button
              className={classNames(css.button, css['button--secondary'], css['button--size-md'])}
              bind="cta"
            />
          </div>
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.options = {
  invert: true,
}

Block.defaultContent = {
  partners: [
    {
      title:
        'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
      picture: {
        alt: '',
        src: '',
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
        textValue: 'Case study',
      },
      id: '65c03fa0-0d1c-4ea2-a9b7-f52e9e0f088c',
    },
    {
      title:
        'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
      picture: {
        alt: '',
        src: '',
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
        textValue: 'Case study',
      },
      id: 'a0a9a1c3-97d4-458b-834c-b9f1f9745c11',
    },
    {
      title:
        'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
      picture: {
        alt: '',
        src: '',
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
        textValue: 'Case study',
      },
      id: 'c803f315-a502-4dfb-a961-88b2be6d3795',
    },
    {
      title:
        'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
      picture: {
        alt: '',
        src: '',
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
        textValue: 'Case study',
      },
      id: '6b27909c-5d0b-4070-ae03-70de1a2889df',
    },
    {
      title:
        'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor.',
      picture: {
        alt: '',
        src: '',
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
        textValue: 'Case study',
      },
      id: '6b27909c-5d0b-4070-ae03-70de1a2889df',
    },
  ],
  title: 'Partners',
  background: {
    type: 'color',
    color: 'rgba(237, 237, 237, 0.5)',
  },
  subtitle:
    'There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space.',
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

export default Block
