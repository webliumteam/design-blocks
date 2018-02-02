import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
  }

  collectionItem = ({index, children, className, openLightbox}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <div
        data-fancybox="gallery"
        href="img/picture.jpg"
        className={classNames(css.item, className)}
      >
        {children}
        <Image
          pictureClassName={css.item__picture}
          imgClassName={css.item__image}
          onOpenLightbox={openLightbox}
          bind={`gallery[${index}].picture`}
          size={{'max-width: 479px': 460, 'min-width: 480px': 460, 'min-width: 768px': 480}}
        />
        <p className={css.item__text}>
          <Text bind={`gallery[${index}].title`} />
        </p>
      </div>
    )
  }

  collectionItem2 = ({index, children, className, openLightbox}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <div
        data-fancybox="gallery"
        href="img/picture.jpg"
        className={classNames(css.item, className)}
      >
        {children}

        <Image
          pictureClassName={css.item__picture}
          imgClassName={css.item__image}
          onOpenLightbox={openLightbox}
          bind={`gallery2[${index}].picture`}
          size={{'max-width: 479px': 460, 'min-width: 480px': 460, 'min-width: 768px': 480}}

        />
        <p className={css.item__text}>
          <Text bind={`gallery2[${index}].title`} />
        </p>
      </div>
    )
  }
  collectionItem3 = ({index, children, className, openLightbox}) => {
    const {components: {Text, Image}, style: css} = this.props
    return (
      <div
        data-fancybox="gallery"
        href="img/picture.jpg"
        className={classNames(css.item, className)}
      >
        {children}

        <Image
          pictureClassName={css.item__picture}
          imgClassName={css.item__image}
          bind={`gallery3[${index}].picture`}
          onOpenLightbox={openLightbox}
          size={{'max-width: 479px': 460, 'min-width: 480px': 460, 'min-width: 768px': 480}}

        />
        <p className={css.item__text}>
          <Text bind={`gallery3[${index}].title`} />
        </p>
      </div>
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
          <div className={css.container}>
            <Collection
              className={css['items-wrapper']}
              bind="gallery"
              galleryId="gallery"
              Item={this.collectionItem}
            />
          </div>
          <p className={css.subtitle}>
            <Text bind="subtitle2" />
          </p>
          <div className={css.container}>
            <Collection
              className={css['items-wrapper']}
              bind="gallery2"
              galleryId="gallery2"
              Item={this.collectionItem2}
            />
          </div>
          <p className={css.subtitle}>
            <Text bind="subtitle3" />
          </p>
          <div className={css.container}>
            <Collection
              className={css['items-wrapper']}
              bind="gallery3"
              galleryId="gallery3"
              Item={this.collectionItem3}
            />
          </div>
          <div className={css['btns-group']}>
            <Button
              className={classNames(css.button, css['button--custom'])}
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
  gallery: [
    {
      title: 'Офисы УкрБуд',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Обувной бутик Marchesi',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
  ],
  gallery2: [
    {
      title: 'Обувной бутик Marchesi',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery2',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
  ],
  gallery3: [
    {
      title: 'Отель Sheraton',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: 'ce744570-02be-4080-b3f2-740d628ccb52',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: 'a980742f-2b78-40b0-9fed-247e71056797',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: 'cb6bbbcc-1980-4575-af5c-0f46e33d6d1e',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: '3e7b03a6-54fb-4d5c-8735-ddfd27f0c8fa',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: 'd6741c92-36d7-4495-93cc-ba77ce79f2bb',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
    {
      title: 'Alice was beginning to get very tired',
      picture: {
        src: 'https://www.vms.ro/wp-content/uploads/2015/04/mobius-placeholder-2.png',
        alt: 'Picture description',
        galleryId: 'gallery3',
      },
      id: '529f880a-60f0-4c8f-9fc3-8c9f482051bb',
    },
  ],
  title: 'БОЛЕЕ 500 УСПЕШНЫХ ПРОЕКТОВ ЗА 18 ЛЕТ',
  theme: 'dark',
  subtitle:
    'ДИЗАЙН ОФИСОВ',
  subtitle2:
    'ДИЗАЙН МАГАЗИНОВ',
  subtitle3:
    'ДИЗАЙН ОТЕЛЕЙ',
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
    type: 'primary',
    textValue: 'СМОТРЕТЬ ВСЕ',
  },
}

export default Block
