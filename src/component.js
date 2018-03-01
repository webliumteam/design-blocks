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

  render() {
    const {components: {ContactForm, Text, Menu, Logo, SocialIcons}, style: css} = this.props

    return (
      <footer className={css.footer}>
        <div className={css.footer__inner}>
          <div className={css.footer__part}>
            {this.getModifierValue('title') && (
              <div className={css.logo}>
                <Logo
                  bind="logo"
                  maxWidth={this.getOptionValue('logo-max-width')}
                  maxHeight={this.getOptionValue('logo-max-height')}
                  textClassName={css.logo__title}
                />
              </div>
            )}
          </div>
          <nav className={classNames(css.footer__part, css['footer__part--center'])}>
            <Menu
              className={css['nav-list']}
              itemClassName={css['nav-list__item']}
              linkClassName={css['nav-list__link']}
              bind="menu"
            />
          </nav>
          {this.getModifierValue('social') && (
            <div className={classNames(css.footer__part, css['footer__part--last'])}>
              <div className={css.socials}>
                <Text tagName="h2" className={css.socials__title} bind="follow" />
                <SocialIcons bind="socialIcons" className={css.socials__icons} />
              </div>
            </div>
          )}
          <ContactForm
            bind="contactForm"
            className={classNames(css.footer__part, css.form)}
            labelClassName={css.form__item}
            fieldClassName={css.form__field}
            buttonClassName={css.form__button}
          />
          <div className={css.footer__bottom}>
            <Text tagName="small" className={css.footer__meta} bind="copyright" />
            <Text tagName="small" className={css.footer__meta} bind="additional" />
          </div>
        </div>
      </footer>
    )
  }
}

Block.components = _.pick(['Text', 'Menu', 'Logo', 'SocialIcons', 'ContactForm'])($editor.components)

Block.defaultContent = {
  logo: {
    text: {
      value: 'Company Logo',
      fontSize: 24,
    },
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
      id: 'team',
      metadata: {
        displayName: 'Our team',
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
      id: 'careers',
      metadata: {
        displayName: 'Careers',
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
      id: 'approach',
      metadata: {
        displayName: 'Our approach',
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
      id: 'industries',
      metadata: {
        displayName: 'Industries',
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
      id: 'press',
      metadata: {
        displayName: 'Press',
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
    type: 'heading',
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
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'http://linkedin.com/',
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
        title: 'Email',
        placeholder: 'email',
        required: false,
      },
    ],
    submitButton: {
      title: 'subscribe',
      textValue: '',
      type: 'link',
      iconEnabled: false,
      iconAlignment: 'left',
      icon: {
        svg: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" fill-rule="evenodd"/></svg>',
      },
    },
    className: 'form',
    buttonClassName: 'link',
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
  social: {defaultValue: true, label: 'Social media Icons', type: 'checkbox'},
}


export default Block
