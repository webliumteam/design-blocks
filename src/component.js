import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) => _.getOr(defaultValue, ['options', path], this.props.$block)

  collectionItem = ({index, children, className}) => {
    const {components: {Text, Icon}, style} = this.props
    const collectionIcon = this.getOptionValue('collection-icons')
    return (
      <li className={classNames(style.list__item, className)}>
        {children}
        {this.getModifierValue('icon') &&
        <div className={classNames(style['list__item-icon'], {[style['list__item-icon--counter-none']]: collectionIcon})}>
            {collectionIcon && <Icon bind={`careers[${index}].icon`} />}
        </div>}
        <span className={style['list__item-text']}>
          <Text bind={`careers[${index}].title`} />
        </span>
      </li>
    )
  }

  render() {
    const {components: {Collection, Text, Image, Button}, style} = this.props
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
          <div className={style.content}>
            {this.getModifierValue('image') && (
              <div className={style['media-wrap']}>
                <Image
                  pictureClassName={style.media}
                  imgClassName={style.media__image}
                  bind="picture"
                  size={{'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}}
                />
              </div>
            )}
            <div className={style.content__main}>
              {this.getModifierValue('body') && (
                <p className={style.content__text}>
                  <Text bind="text" />
                </p>
              )}

              <Collection
                className={style.list}
                TagName="ul"
                bind="careers"
                Item={this.collectionItem}
                itemProps={{
                  showIcon: this.getModifierValue('icon'),
                }}
              />
            </div>
          </div>
          {this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                className={classNames(style.button, style['button--secondary'], style['button--size-md'])}
                bind="button-1"
              />
            </div>
          )}
        </div>
      </section>
    )
  }
}

Block.components = _.pick(['Collection', 'Text', 'Image', 'Button', 'Icon'])($editor.components)

Block.defaultContent = {
  careers: [
    {
      title: 'We have more than 40,000 employees worldwide',
      id: 'dc11a56a-3863-477a-8a53-fb64c7bb71e6',
      icon: {
        svg: '<svg></svg>',
      },
    },
    {
      title: 'We serve more than 24,000 pharmacies',
      id: '80c3446a-8a89-4652-89bb-b861e55f3f7d',
      icon: {
        svg: '<svg></svg>',
      },
    },
    {
      title: 'We’re in nearly 85% of U.S. hospitals.',
      id: '83cc85d7-1543-44f3-9926-6c8b20909dcd',
      icon: {
        svg: '<svg></svg>',
      },
    },
  ],
  title: 'Careers',
  subtitle:
    'The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence, and upturning of',
  text:
    "Why consider a future with Cardinal Health? As a global, growing company, we’re able to offer rewarding careers that let you make a positive impact on our customers and communities. We think of ourselves as the business behind healthcare because we focus on making it more cost-effective. We're an essential link that allows healthcare providers to reduce costs, improve operations and increase quality, so that they can offer better care to their patients. Here are a few facts about us:",
  picture: {
    src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
    alt: 'Illustration',
  },
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
    textValue: 'Additional button (M)',
  },
}

Block.modifierScheme = [
  {
    id: 'subtitle',
    type: 'checkbox',
    label: 'Careers description',
    defaultValue: true,
  },
  {
    id: 'image',
    type: 'checkbox',
    label: 'Сareers photo',
    defaultValue: true,
  },
  {
    id: 'body',
    type: 'checkbox',
    label: 'Careers main text',
    defaultValue: true,
  },
  {
    id: 'icon',
    type: 'checkbox',
    label: 'Careers icon',
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
