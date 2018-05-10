import $editor from 'weblium/editor'

class Block extends React.Component {
  static propTypes = {
    components: PropTypes.object.isRequired,
    $block: PropTypes.object.isRequired,
    style: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  }

  getModifierValue = path => _.get(['modifier', path], this.props.$block)

  getOptionValue = (path, defaultValue = false) =>
    _.getOr(defaultValue, ['options', path], this.props.$block)

  render() {
    const {components: {ContactForm, Text, Menu, Logo, SocialIcons}, style, content} = this.props
    const withoutSocials = !this.getModifierValue('social')
    const withoutForm = !this.getModifierValue('subscribe-form')
    const withoutFirstPart = !this.getModifierValue('title') && !this.getModifierValue('caption')
    const onlyMenu = withoutSocials && withoutForm && withoutFirstPart

    return (
      <footer className={classNames(
        style.footer,
        withoutSocials && [style['footer--state-1']],
        withoutForm && [style['footer--state-2']],
        withoutSocials && withoutForm && [style['footer--state-3']],
        onlyMenu && [style['footer--state-4']],
        withoutFirstPart && [style['footer--state-5']],
      )}
      >
        <div className={style.footer__inner}>
          {!withoutFirstPart && (
            <div className={classNames(style.footer__part, style['footer__part--first'])}>
              {this.getModifierValue('title') && (
                <div className={style.logo}>
                  <Logo
                    bind="logo"
                    maxWidth={this.getOptionValue('logo-max-width')}
                    maxHeight={this.getOptionValue('logo-max-height')}
                    textClassName={style.logo__title}
                  />
                </div>
              )}
              {this.getModifierValue('caption') && (
                <Text tagName="p" className={style.footer__text} bind="mainText" />
              )}
            </div>
          )}
          <nav className={classNames(style.footer__part, style['footer__part--second'])}>
            <Menu
              className={style['nav-list']}
              itemClassName={style['nav-list__item']}
              linkClassName={style['nav-list__link']}
              bind="menu"
            />
          </nav>
          {this.getModifierValue('social') && (
            <div className={classNames(style.footer__part, style['footer__part--third'])}>
              <div className={style.socials}>
                <Text tagName="h2" className={style.socials__title} bind="follow" />
                <SocialIcons bind="socialIcons" className={style.socials__icons} />
              </div>
            </div>
          )}
          {this.getModifierValue('subscribe-form') && (
            <ContactForm
              bind="contactForm"
              className={classNames(style.footer__part, style['footer__part--last'], style.form)}
              labelClassName={style.form__item}
              descriptionClassName={style.form__desc}
              fieldClassName={style.form__field}
              buttonClassName={style.form__button}
            />
          )}
          <div className={style.footer__bottom}>
            <Text tagName="small" className={style.footer__meta} bind="copyright" />
            <Text tagName="small" className={style.footer__meta} bind="additional" />
          </div>
        </div>
      </footer>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Logo', 'SocialIcons', 'ContactForm'])($editor.components)

Block.defaultContent = {
  background: {
    type: 'color',
    color: '#676767',
  },
  logo: {
    text: {
      value: 'Quantum Company',
      fontSize: 24,
    },
  },
  mainText: {
    type: 'text',
    content: 'Our company will go the extra mile to analyze the particular project in detail, and offer a business solution that will meet your requirements.',
  },
  menu: [
    {
      id: 'about',
      metadata: {
        displayName: 'About',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'testimonials',
      metadata: {
        displayName: 'Testimonials',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'projects',
      metadata: {
        displayName: 'Projects',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'blog',
      metadata: {
        displayName: 'Blog',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'services',
      metadata: {
        displayName: 'Services',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'resources',
      metadata: {
        displayName: 'Resources',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'development',
      metadata: {
        displayName: 'Development',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
    {
      id: 'contacts-us',
      metadata: {
        displayName: 'Contact us',
        clickAction: {
          action: 'page',
          target: '_self',
          actions: {
            page: '',
            link: '',
            block: '',
          },
        },
      },
    },
  ],
  follow: {
    type: 'text',
    content: 'Follow Us',
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
  contactForm: {
    fields: [
      {
        type: 'email',
        id: 'contactForm_email',
        title: 'Subscribe to get the latest news from us',
        placeholder: 'Email',
        required: false,
      },
    ],
    submitButton: {
      title: 'subscribe',
      textValue: 'subscribe',
      type: 'primary',
    },
    className: 'form',
    buttonClassName: 'button',
  },
  copyright: {
    type: 'caption',
    content: 'Produced by Weblium.com.',
  },
  additional: {
    type: 'caption',
    content: 'All rights Reserved',
  },
}


Block.modifierScheme = {
  title: {defaultValue: true, label: 'Company name', type: 'checkbox'},
  caption: {defaultValue: true, label: 'Company main text', type: 'checkbox'},
  social: {defaultValue: true, label: 'Social buttons', type: 'checkbox'},
  'subscribe-form': {defaultValue: true, label: 'Subscribe form', type: 'checkbox'},
}


export default Block
