import $editor from 'weblium/editor'
import css from './style.css'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
  }

  getModifierValue = (path) => _.get(['modifier', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Button, Image}} = this.props
    return (
      <article className={classNames(css.article, className)}>
        {children}
        {this.getModifierValue('image') && <div className={css['article__picture-wrapper']}>
          <Image
            pictureClassName={css.article__picture}
            imgClassName={css.article__image}
            bind={`services[${index}].picture`}
            size={{'min-width: 320px': 446, 'min-width: 480px': 738, 'min-width: 768px': 460}}
          />
        </div>}
        {this.getModifierValue('heading') && <h2 className={css.article__title}>
          <Text bind={`services[${index}].title`} />
        </h2>}
        {this.getModifierValue('body') && <p className={css.article__text}>
          <Text bind={`services[${index}].description`} />
        </p>}
        {this.getModifierValue('link') && <Button className={css.article__link} bind={`services[${index}].cta`} />}
      </article>
    )
  }

  render() {
    const {components: {Collection, Text, Button}} = this.props
    return (
      <section className={css.section}>
        <div className={css.section__inner}>
          {(this.getModifierValue('title') || this.getModifierValue('subtitle')) && <header className={css.section__header}>
            {this.getModifierValue('title') && <h1 className={css.title}>
              <Text bind="title" />
            </h1>}
            {this.getModifierValue('subtitle') && <p className={css.subtitle}>
              <Text bind="description" />
            </p>}
          </header>}
          <Collection
            className={css['articles-wrapper']}
            bind="services"
            Item={this.collectionItem}
            fakeHelpers={{
              count: 3,
              className: css.fake,
            }}
          />
          {this.getModifierValue('button') && <div className={css['btns-group']}>
            <Button
              className={classNames(css.button, css['button--secondary'], css['button--size-md'])}
              bind="button-2"
            />
          </div>}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Button', 'Image'])($editor.components)

Block.defaultContent = {
  services: [
    {
      id: '900aa334-14f2-4c05-b078-78099a5725e5',
      title: 'Service 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'cfb2c56d-7708-4459-bdf2-6780f4ba62b9',
      title: 'Service 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'eea21546-b56e-406b-8cba-18a5a5ec1820',
      title: 'Service 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
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
        textValue: 'Learn more',
      },
    },
    {
      id: 'aa5d3a04-43b7-4bb3-9c7a-00e1986f359e',
      title: 'Service 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Service illustration photo',
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
        textValue: 'Learn more',
      },
    },
  ],
  title: 'Services We Provide',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'button-1': {
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
    textValue: 'Book a service',
  },
  'button-2': {
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
    textValue: 'All services',
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
    label: 'Services description',
    defaultValue: false,
  },
  {
    id: 'image',
    type: 'checkbox',
    label: 'Image',
    defaultValue: true,
  },
  {
    id: 'heading',
    type: 'checkbox',
    label: 'Service title',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Service main text',
    defaultValue: true,
  },
  {
    id: 'link',
    type: 'checkbox',
    label: 'Link',
    defaultValue: true,
  },
  {
    id: 'button',
    type: 'checkbox',
    label: 'Secondary button',
    defaultValue: true,
  },
]

export default Block