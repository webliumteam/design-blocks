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
        {this.getModifierValue('icon') && (
          <div className={classNames(style['list__item-icon'], {[style['list__item-icon--counter-none']]: collectionIcon})}>
            {collectionIcon && <Icon bind={`careers[${index}].icon`} />}
          </div>
        )}
        <span className={style['list__item-text']}>
          <Text bind={`careers[${index}].title`} />
        </span>
      </li>
    )
  }

  render() {
    const {components: {Collection, Text, Image, Button, Icon}, style} = this.props
    return (
      <section className={style.section}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={style['top-icon']} bind="topIcon" />
          )}
          {!this.getOptionValue('title-in-content') && (
            <h1 className={style.title}>
              <Text bind="title" />
            </h1>
          )}
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
                {this.getOptionValue('image-decorator-status') && (
                  <div className={style.media__decorator} dangerouslySetInnerHTML={{__html: this.getOptionValue('image-decorator-content')}} />
                )}
              </div>
            )}
            <div className={style.content__main}>
              {this.getOptionValue('title-in-content') && (
                <h1 className={style.title}>
                  <Text bind="title" />
                </h1>
              )}
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
              {this.getOptionValue('button-in-content') && this.getModifierValue('button') && (
                <div className={style['btns-group']}>
                  <Button
                    className={classNames(style.button, style['button--secondary'], style['button--size-md'])}
                    bind="button-1"
                  />
                </div>
              )}
            </div>
          </div>
          {!this.getOptionValue('button-in-content') && this.getModifierValue('button') && (
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
      title: 'Trainee program for young talents',
      id: 'dc11a56a-3863-477a-8a53-fb64c7bb71e6',
      icon: {
        svg: '<svg></svg>',
      },
    },
    {
      title: 'Relocation and full support for experts from other cities and countries',
      id: '80c3446a-8a89-4652-89bb-b861e55f3f7d',
      icon: {
        svg: '<svg></svg>',
      },
    },
    {
      title: '100+ experts who work in different industry fields ',
      id: '83cc85d7-1543-44f3-9926-6c8b20909dcd',
      icon: {
        svg: '<svg></svg>',
      },
    },
  ],
  title: 'Careers',
  subtitle:
    'Do you want to join our company? Check the list of open vacancies or contact our HR director to get to know about open positions.',
  text:
    'Our company is always looking for professional and inspired people who are ready to work, according to our principles and standards. Look through the list of our advantages to see what you get by becoming a part of our team.',
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
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
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
  {
    id: 'top-icon',
    type: 'hidden',
    label: 'Top icon decorator',
    defaultValue: false,
  },
]

export default Block
