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
    const collectionIcon = !this.getOptionValue('hidden-collection-icons')
    return (
      <li className={classNames(style.list__item, className)}>
        {children}
        {this.getModifierValue('icon') && (
          <div className={classNames(style['list__item-icon'], {[style['list__item-icon--counter-none']]: collectionIcon})}>
            {collectionIcon && <Icon bind={`careers[${index}].icon`} className="icon" />}
          </div>
        )}
        <Text tagName="span" className={classNames(style['list__item-text'], 'heading')} bind={`careers[${index}].title`} />
      </li>
    )
  }

  render() {
    const {components: {Collection, Text, Image, Button, Icon}, style} = this.props
    const arrange = this.getModifierValue('arrange-elements')

    return (
      <section className={classNames(style.section, arrange && style['section--reverse'])}>
        <div className={style.section__inner}>
          {this.getModifierValue('top-icon') && (
            <Icon className={classNames(style['top-icon'], 'icon')} bind="topIcon" />
          )}
          {!this.getOptionValue('title-in-content') && <Text tagName="h1" className={classNames(style.title, 'title', 'text-center')} bind="title" />}
          {this.getModifierValue('subtitle') && <Text tagName="p" className={classNames(style.subtitle, 'subtitle', 'text-center')} bind="subtitle" />}
          <div className={style.content}>
            {this.getModifierValue('image') && (
              <Image
                wrapperClassName={classNames(style.media, 'picture-wrapper')}
                pictureClassName={classNames(style.media__picture, 'picture')}
                imgClassName={classNames(style.media__image, 'picture__image')}
                bind="picture"
                size={{'min-width: 320px': 480, 'min-width: 480px': 768, 'min-width: 768px': 570}}
              >
                {this.getOptionValue('image-decorator-status') && (
                  <div className={style.media__decorator} dangerouslySetInnerHTML={{__html: this.getOptionValue('image-decorator-content')}} />
                )}
              </Image>
            )}
            <div className={style.content__main}>
              {this.getOptionValue('title-in-content') && <Text tagName="h1" className={classNames(style.title, 'title')} bind="title" />}
              {this.getModifierValue('body') && <Text tagName="p" className={classNames(style.content__text, 'body')} bind="text" />}
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
                    buttonClassName={style.button}
                    linkClassName={style.link}
                    bind="button-1"
                  />
                </div>
              )}
            </div>
          </div>
          {!this.getOptionValue('button-in-content') && this.getModifierValue('button') && (
            <div className={style['btns-group']}>
              <Button
                buttonClassName={style.button}
                linkClassName={style.link}
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
      title: {
        content: 'Trainee program for young talents with big ambitions',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M436.27 39.8H304.8C300.15 17.13 280.04 0 256 0s-44.16 17.12-48.8 39.8H75.73a26.82 26.82 0 0 0-26.8 26.8v284.56a26.82 26.82 0 0 0 26.8 26.79h124.9l-40.57 120.87a10 10 0 0 0 18.96 6.36l42.7-127.23h68.55l42.7 127.23a10 10 0 0 0 18.97-6.37l-40.57-120.86h124.9a26.82 26.82 0 0 0 26.8-26.79V66.6a26.82 26.82 0 0 0-26.8-26.8zM256 20a29.86 29.86 0 0 1 28.08 19.8h-56.16A29.86 29.86 0 0 1 256 20zm187.06 331.16a6.8 6.8 0 0 1-6.79 6.79h-26.12V215.39a10 10 0 0 0-20 0v142.56H359.4V245.98a10 10 0 0 0-20 0v111.97h-28.08v-79.26a10 10 0 0 0-20 0v79.26H266V253.28a10 10 0 0 0-20 0v104.67h-29.04v-55.02a10 10 0 0 0-20 0v55.02h-23.22v-50.99a10 10 0 0 0-20 0v50.99h-26.78V318.6a10 10 0 0 0-20 0v39.34H75.72a6.8 6.8 0 0 1-6.79-6.79V66.6a6.8 6.8 0 0 1 6.8-6.8H436.26a6.8 6.8 0 0 1 6.8 6.8v284.56z"/><path d="M410.1 106.88c0-.13-.03-.26-.05-.4-.03-.19-.05-.38-.09-.56l-.11-.47-.13-.48c-.04-.16-.1-.3-.16-.45-.05-.16-.1-.32-.17-.48l-.19-.4c-.07-.16-.14-.33-.23-.48l-.22-.38-.28-.46-.29-.4-.3-.39a9.9 9.9 0 0 0-.56-.62l-.1-.1-.1-.1c-.2-.2-.4-.39-.62-.57l-.38-.28-.41-.3c-.14-.1-.3-.18-.44-.27l-.4-.23-.45-.22-.44-.2-.43-.16-.5-.17c-.14-.05-.28-.08-.42-.11-.17-.05-.35-.1-.53-.13l-.47-.07-.5-.08-.8-.04h-43.38a10 10 0 0 0 0 20h19.06l-83.03 83.02-21.8-21.8a10 10 0 0 0-14.14 0l-72.16 72.17-21.54-21.55a10 10 0 0 0-14.14 0l-36.5 36.5a10 10 0 0 0 14.15 14.14l29.42-29.42 21.54 21.54a10 10 0 0 0 14.14 0l72.16-72.16 21.8 21.8a10 10 0 0 0 14.14 0l90.1-90.1v19.05a10 10 0 0 0 20 0v-43.19c0-.33-.01-.67-.04-1z"/><circle cx="119.78" cy="107.87" r="10"/><circle cx="119.78" cy="148.64" r="10"/><circle cx="119.78" cy="189.41" r="10"/></svg>',
      },
    },
    {
      title: {
        content: 'Relocation and full support for experts from other cities and countries',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="501.98" cy="109.28" r="10.02"/><path d="M305.55 410.68h-38.8a10.02 10.02 0 0 0 0 20.05h38.8c5.97 0 10.83 4.86 10.83 10.83s-4.86 10.83-10.83 10.83H201.1a52.52 52.52 0 0 1-40.48-18.98l-24.97-30.02a72.48 72.48 0 0 0-53.77-26.15v-59h36.8a69.33 69.33 0 0 1 48.38 19.54l53.9 52.03a9.85 9.85 0 0 1 .4 13.69 9.82 9.82 0 0 1-13.82.58l-42.32-38.8a10.02 10.02 0 0 0-13.55 14.78l42.32 38.8a29.72 29.72 0 0 0 20.15 7.81c8.05 0 16.08-3.22 21.94-9.57a30.02 30.02 0 0 0-1.2-41.72L181 323.35a89.28 89.28 0 0 0-62.3-25.16h-38.6a24.84 24.84 0 0 0-23-15.54H10.02A10.02 10.02 0 0 0 0 292.68v73.1a10.02 10.02 0 0 0 20.05 0V302.7h37.04a4.77 4.77 0 0 1 4.76 4.76v80.14a4.77 4.77 0 0 1-4.76 4.76H46.7a10.02 10.02 0 0 0 0 20.05H57.1a24.84 24.84 0 0 0 22.85-15.17 52.51 52.51 0 0 1 40.3 18.97l24.98 30.02a72.5 72.5 0 0 0 55.9 26.2h104.43a30.91 30.91 0 0 0 30.88-30.87 30.91 30.91 0 0 0-30.88-30.88zM368.38 341.25a10.02 10.02 0 0 0-14.28.88 10 10 0 0 0 7.51 16.64c2.76 0 5.51-1.13 7.5-3.35l-7.44-6.72 7.45 6.7a10.02 10.02 0 0 0-.74-14.15zM347.44 363.05a10.06 10.06 0 0 0-14.04-2.18 10.02 10.02 0 0 0 11.79 16.21l.08-.06a9.98 9.98 0 0 0 2.17-13.97zM322.42 379.81a10.03 10.03 0 0 0-13.19-5.04 10.02 10.02 0 1 0 8.19 18.3 10.02 10.02 0 0 0 5-13.25z"/><path d="M294.4 390.98a10.03 10.03 0 0 0-11.8-7.78 10.02 10.02 0 1 0 4.05 19.64 10.02 10.02 0 0 0 7.75-11.86zM406.8 235.04l-9.83 1.9 9.83-1.92a10.02 10.02 0 1 0-19.67 3.82l.04.24a10.06 10.06 0 0 0 11.87 7.8 10 10 0 0 0 7.77-11.84zM397.65 257.01a10.02 10.02 0 0 0-10.86 9.1l-.02.25a10.05 10.05 0 0 0 10 10.79 10 10 0 0 0 9.98-9.26l-9.98-.9 9.98.89a10.02 10.02 0 0 0-9.1-10.87zM384.12 315.54a10.07 10.07 0 0 0-13.69 3.8 10.02 10.02 0 1 0 17.48 9.82 9.98 9.98 0 0 0-3.8-13.62zM393.99 286.97c-5.3-1.61-10.9 1.4-12.5 6.7a10.02 10.02 0 1 0 19.13 5.97l.06-.18a10.02 10.02 0 0 0-6.7-12.5zM129.65 285.48a10.03 10.03 0 0 0-19.56 4.4l.07.3a10.01 10.01 0 0 0 19.49-4.7zM131.87 189.99a10.02 10.02 0 0 0-13.26 5l-.11.27a10.01 10.01 0 0 0 18.41 7.92 10.02 10.02 0 0 0-5.04-13.2zM120.82 218.05a10.03 10.03 0 0 0-11.86 7.76l-.05.24a10.04 10.04 0 0 0 9.85 11.95 10 10 0 0 0 9.82-8.1 10.02 10.02 0 0 0-7.76-11.85zM148.5 164.85a10.04 10.04 0 0 0-13.98 2.28l8.1 5.92-8.11-5.9a10.02 10.02 0 0 0 16.2 11.8l.12-.15a10 10 0 0 0-2.32-13.95zM170.25 143.88a10.02 10.02 0 0 0-14.15-.74l-.08.07c-4.11 3.7-4.4 10-.7 14.12a10.06 10.06 0 0 0 14.19.7 10.02 10.02 0 0 0 .74-14.15zM195.96 128.1a10.02 10.02 0 0 0-13.84-3.75 10.03 10.03 0 0 0 9.99 17.38c4.83-2.7 6.55-8.8 3.85-13.64zM224.39 117.9a10 10 0 0 0-12.6-6.47l2.94 9.59-2.95-9.58a10.02 10.02 0 0 0 5.9 19.16l.22-.08a10.05 10.05 0 0 0 6.49-12.62zM254.34 114.3a10.02 10.02 0 0 0-10.86-9.1h-.1a9.98 9.98 0 0 0-9.05 10.87 10.06 10.06 0 0 0 10.91 9.1 10.02 10.02 0 0 0 9.1-10.87zM126.15 257.55a10.04 10.04 0 0 0-10.32-9.76 10 10 0 0 0-9.72 10.28l10.02-.13-10.02.15a10.02 10.02 0 0 0 10.02 9.87h.15a10.02 10.02 0 0 0 9.87-10.17v-.24zM266.31 245.23H245.7c-8.4 0-15.24-6.83-15.24-15.24v-12c0-8.4 6.83-15.23 15.24-15.23h22.85c7.17 0 13.01 5.84 13.01 13a10.02 10.02 0 0 0 20.05 0 33.1 33.1 0 0 0-33.06-33.05h-2.52V167.8a10.02 10.02 0 0 0-20.04 0v14.92h-.3A35.32 35.32 0 0 0 210.4 218v12a35.32 35.32 0 0 0 35.29 35.28H266.3c8.4 0 15.24 6.83 15.24 15.23v12c0 8.4-6.83 15.24-15.24 15.24h-22.85c-7.18 0-13.01-5.84-13.01-13.01a10.02 10.02 0 0 0-20.05 0 33.1 33.1 0 0 0 33.06 33.05h2.52v14.92a10.02 10.02 0 0 0 20.04 0V327.8h.3a35.32 35.32 0 0 0 35.28-35.28v-12a35.32 35.32 0 0 0-35.29-35.28z"/><path d="M501.98 131.94a10.02 10.02 0 0 0-10.03 10.03v67h-37.04a4.77 4.77 0 0 1-4.76-4.77v-80.14a4.77 4.77 0 0 1 4.76-4.76h9.65a10.02 10.02 0 0 0 0-20.04h-9.65a24.84 24.84 0 0 0-22.99 15.5 52.5 52.5 0 0 1-40.17-18.97l-24.97-30.02a72.5 72.5 0 0 0-55.9-26.2H206.45a30.91 30.91 0 0 0-30.88 30.87 30.91 30.91 0 0 0 30.88 30.88h42.7a10.02 10.02 0 0 0 0-20.05h-42.7a10.85 10.85 0 0 1-10.83-10.83c0-5.97 4.86-10.83 10.83-10.83H310.9c15.69 0 30.44 6.92 40.48 18.98l24.97 30.02a72.47 72.47 0 0 0 53.77 26.14v59.02h-36.8a69.33 69.33 0 0 1-48.38-19.55l-53.9-52.03a9.86 9.86 0 0 1-.4-13.7 9.82 9.82 0 0 1 13.82-.57l42.32 38.8a10.02 10.02 0 1 0 13.55-14.78L318 93.14a29.9 29.9 0 0 0-42.1 1.76 30.02 30.02 0 0 0 1.2 41.72l53.91 52.03a89.28 89.28 0 0 0 62.3 25.16h38.74a24.84 24.84 0 0 0 22.86 15.2h47.07c5.53 0 10.02-4.5 10.02-10.03v-77.01c0-5.54-4.49-10.03-10.02-10.03z"/><circle cx="10.02" cy="402.38" r="10.02"/></svg>',
      },
    },
    {
      title: {
        content: '100+ experts who work in different industry fields',
        type: 'heading',
      },
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="441.64" cy="338.1" r="10"/><circle cx="60.97" cy="338.1" r="10"/><path d="M494.3 492h-85.88l-.52-245.78a10 10 0 0 0-10-9.98h-.03a10 10 0 0 0-9.98 10.03l.53 245.73h-29.05l-.26-109.35a10 10 0 0 0-10-9.98h-.02a10 10 0 0 0-9.98 10.02l.26 109.3h-24.29V359.65c28.31-2.5 50.57-25.77 50.57-54.02V208.7c0-15.42-3.27-30.52-9.52-44.48a82.8 82.8 0 0 1 52.28 23.02c15.47 14.94 24.02 34.82 24.07 55.97l.18 56.91a10 10 0 0 0 10 9.97h.03a10 10 0 0 0 9.97-10.03l-.18-56.9c-.06-26.6-10.77-51.57-30.18-70.31a102.23 102.23 0 0 0-38.6-23.44 52.77 52.77 0 0 0 16.48-38.43 52.98 52.98 0 0 0-52.92-52.8h-.12a53.09 53.09 0 0 0-24.4 6 10 10 0 1 0 9.28 17.73 32.95 32.95 0 0 1 48.16 29.12A32.95 32.95 0 0 1 347.33 144c-.43 0-.85.04-1.27.1l-1.6.06a113.82 113.82 0 0 0-57.84-41.4 58.54 58.54 0 0 0 20.04-44.1A58.75 58.75 0 0 0 247.98 0a58.74 58.74 0 0 0-58.68 58.67 58.58 58.58 0 0 0 21.85 45.64 113.71 113.71 0 0 0-53.3 39.8 105.94 105.94 0 0 0-6.97-.08c-.18 0-.36-.03-.55-.03a32.95 32.95 0 0 1-32.91-32.91 32.95 32.95 0 0 1 48.6-28.94 10 10 0 0 0 9.56-17.58 53 53 0 0 0-25.25-6.4 52.98 52.98 0 0 0-52.92 52.92 52.8 52.8 0 0 0 18.18 39.86c-37.82 14.58-64.63 50.52-64.63 92.42v56.72a10 10 0 1 0 20 0v-56.72c0-41.48 33.12-75.6 75.15-79.05-6.23 13.92-9.48 29-9.48 44.38v96.92c0 28.8 23.14 52.43 52.25 54.14V492h-27.25V382.67a10 10 0 1 0-20 0V492h-24.59V246.35a10 10 0 1 0-20 0V492H17.7a10 10 0 1 0 0 20h476.6a10 10 0 1 0 0-20zm-285-433.32c0-21.33 17.36-38.68 38.68-38.68s38.67 17.35 38.67 38.68-17.35 38.67-38.67 38.67a38.72 38.72 0 0 1-38.67-38.67zm95.78 143.39a10 10 0 0 0-10 10V492h-35.62V352.85a10 10 0 1 0-20 0V492h-30.57V212.07a10 10 0 1 0-20 0V339.7c-18.08-1.64-32.26-16.3-32.26-34.09V208.7a88.83 88.83 0 0 1 14.56-48.73c17.45-26.69 47.34-42.62 79.95-42.62 32.66 0 62.58 15.97 80.02 42.73a88.84 88.84 0 0 1 14.49 48.62v96.92c0 17.23-13.31 31.53-30.57 33.9V212.07a10 10 0 0 0-10-10z"/></svg>',
      },
    },
  ],
  title: {
    content: 'Careers',
    type: 'blockTitle',
  },
  subtitle: {
    content: 'Do you want to join our company? Check the list of open vacancies or contact our HR director to learn about open positions.',
    type: 'subtitle',
  },
  text: {
    content: 'Our company is always looking for professional and inspired people who are ready to work, according to our principles and standards. Look through the list of our advantages to see what you get by becoming a part of our team.',
    type: 'text',
  },
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
    textValue: 'Learn more',
    type: 'secondary',
  },
  topIcon: {
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"/></svg>',
    fill: 'red',
  },
}

Block.modifierScheme = {
  'arrange-elements': {
    type: 'swap',
    title: 'Swap text with image',
    defaultValue: false,
    sortOrder: 10,
  },
  subtitle: {defaultValue: true, label: 'Block description', type: 'checkbox', sortOrder: 20},
  image: {defaultValue: true, label: 'Image', type: 'checkbox', sortOrder: 30},
  body: {defaultValue: true, label: 'Main text', type: 'checkbox', sortOrder: 40},
  icon: {defaultValue: true, label: 'Icons', type: 'checkbox', sortOrder: 50},
  button: {defaultValue: true, label: 'Button (link)', type: 'checkbox', sortOrder: 60},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default Block
